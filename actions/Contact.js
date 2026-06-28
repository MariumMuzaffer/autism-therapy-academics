"use server";

import { resend, CONTACT_FROM_ADDRESS, CONTACT_TO_ADDRESS } from "@/lib/Resend";
import { contactFormSchema } from "@/lib/ContactSchema";
import { ContactNotificationEmail } from "@/emails/ContactNotification";

// ─────────────────────────────────────────────────────────────────────────────
// Server Action: receives FormData from <ContactForm />, validates it with
// the shared Zod schema, then sends a notification email via Resend using a
// React Email template. Designed for useActionState on the client.
// ─────────────────────────────────────────────────────────────────────────────

// Very small in-memory rate limit: blocks rapid repeat submissions from the
// same IP. Resets when the server process restarts. For multi-instance /
// serverless production deployments, replace this with a durable store
// (e.g. Upstash Redis) — this is here so the form isn't wide open by default.
const submissionLog = new Map();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 submission per IP per minute

function isRateLimited(key) {
  const last = submissionLog.get(key);
  const now = Date.now();
  if (last && now - last < RATE_LIMIT_WINDOW_MS) return true;
  submissionLog.set(key, now);
  return false;
}

export async function submitContactForm(_prevState, formData) {
  // --- Honeypot check -----------------------------------------------------
  // A hidden field named "company" that real visitors never see or fill.
  if (formData.get("company")?.length) {
    // Pretend success so bots don't learn the honeypot was triggered.
    return { status: "success" };
  }

  // --- Basic rate limiting -------------------------------------------------
  const { headers } = await import("next/headers");
  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "You're submitting too quickly. Please wait a moment and try again.",
    };
  }

  // --- Validate --------------------------------------------------------------
  const raw = {
    ageRange: formData.get("ageRange"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    message: formData.get("message"),
    company: formData.get("company"),
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors = {};
    for (const issue of parsed.error.issues) {
      const fieldName = issue.path[0];
      if (!fieldErrors[fieldName]) fieldErrors[fieldName] = issue.message;
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const { ageRange, firstName, lastName, email, phone, address, message } = parsed.data;

  // --- Send email via Resend ------------------------------------------------
  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM_ADDRESS,
      to: CONTACT_TO_ADDRESS,
      replyTo: email,
      subject: `New inquiry from ${firstName} ${lastName}`,
      react: ContactNotificationEmail({
        firstName,
        lastName,
        email,
        phone,
        address: address || undefined,
        ageRangeLabel: ageRange,
        message: message || undefined,
      }),
    });

    if (error) {
      console.error("[contact-form] Resend error:", error);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again or call us directly.",
      };
    }

    return {
      status: "success",
      message: "Thanks for reaching out! A member of our team will be in touch soon.",
    };
  } catch (err) {
    console.error("[contact-form] Unexpected error:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again or call us directly.",
    };
  }
}
import { Resend } from "resend";

// ─────────────────────────────────────────────────────────────────────────────
// Resend client — instantiated once and reused across Server Action calls.
// RESEND_API_KEY must be set in your environment (.env.local locally,
// and in your hosting provider's dashboard for production). Never expose
// this key to the client — it's only ever read inside server-only files.
// ─────────────────────────────────────────────────────────────────────────────

if (!process.env.RESEND_API_KEY) {
  // Fails loudly at boot in development rather than silently dropping emails later.
  console.warn(
    "[resend] RESEND_API_KEY is not set. Contact form emails will fail to send until this is configured."
  );
}

export const resend = new Resend(process.env.RESEND_API_KEY);

// The verified sending address. Resend (and most providers) require you to
// send "From" a domain you've verified — you cannot send "From" a visitor's
// own address, or major providers like Gmail will reject it under DMARC.
// The visitor's email is instead placed in "Reply-To" so clicking Reply
// in the inbox goes straight to them.
export const CONTACT_FROM_ADDRESS =
  process.env.CONTACT_FROM_ADDRESS || "Autism Therapy Associates <onboarding@resend.dev>";

// Where new contact form submissions should land.
export const CONTACT_TO_ADDRESS = process.env.CONTACT_TO_ADDRESS || "info@ata-org.com";
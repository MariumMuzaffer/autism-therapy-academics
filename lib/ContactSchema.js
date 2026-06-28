import { z } from "zod";

// ─────────────────────────────────────────────────────────────────────────────
// Shared validation schema — used by the Server Action so the rules only
// live in one place.
// ─────────────────────────────────────────────────────────────────────────────

export const contactFormSchema = z.object({
  ageRange: z
    .string()
    .trim()
    .min(1, "Please enter your child's age.")
    .max(40, "Enter a valid age."),
  firstName: z.string().trim().min(1, "First name is required.").max(80),
  lastName: z.string().trim().min(1, "Last name is required.").max(80),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(20, "Enter a valid phone number.")
    .regex(/^[0-9+().\-\s]+$/, "Enter a valid phone number."),
  address: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  // Honeypot field — real users never fill this in; bots usually do.
  company: z.string().max(0).optional().or(z.literal("")),
});

export const initialContactFormState = { status: "idle" };

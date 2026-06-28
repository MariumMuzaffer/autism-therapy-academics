"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "@/constants";
import { submitContactForm } from "@/actions/Contact";
import { initialContactFormState } from "@/lib/ContactSchema";

// ─────────────────────────────────────────────────────────────────────────────
// "Send Us a Message" contact form.
// Uses useActionState (React 19 / Next.js 16) to call the submitContactForm
// Server Action directly — no client-side fetch, no API route needed.
// Styled with the same palette as the rest of the site:
//   navy #043F8C · blue #0597F2 · green #62BF04 · amber #F2A007
// ─────────────────────────────────────────────────────────────────────────────

const inputBase =
  "font-['Poppins'] w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#043F8C] placeholder:text-[#9aacc6] outline-none transition-colors focus:border-[#0597F2] focus:ring-2 focus:ring-[#0597F2]/20";

function FieldLabel({ htmlFor, required = false, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-['Poppins'] mb-2 block text-sm font-semibold text-[#043F8C]"
    >
      {children}
      {required && <span className="text-[#F2A007]"> *</span>}
    </label>
  );
}

function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="font-['Poppins'] mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#dc2626]">
      <AlertCircle size={13} strokeWidth={2.2} />
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );
  const formRef = useRef(null);

  const errors = state.fieldErrors || {};

  // Reset the form on a successful submission.
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(4,63,140,0.10)] sm:p-9">
      <h2 className="font-['Montserrat'] mb-1.5 text-2xl font-extrabold text-[#043F8C] sm:text-[1.7rem]">
        Send Us a Message
      </h2>
      <p className="font-['Poppins'] mb-7 text-sm text-[#4a6080]">
        Fill out the form and we&apos;ll get back to you promptly.
      </p>

      <form ref={formRef} action={formAction} className="flex flex-col gap-6">
        {/* Honeypot — visually hidden, never filled by real users */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden opacity-0"
          aria-hidden="true"
        />

        {/* Child's Age — highlighted panel */}
        <div className="rounded-2xl border border-[#62BF04]/20 bg-[#62BF04]/5 p-5">
          <p className="font-['Montserrat'] mb-1 text-sm font-bold text-[#043F8C]">
            Child&apos;s Age
          </p>
          <p className="font-['Poppins'] mb-4 text-xs leading-relaxed text-[#4a6080]">
            Confirm your child is within our accepted age range (18 months – 14
            years)
          </p>

          <input
            id="ageRange"
            name="ageRange"
            type="text"
            placeholder="e.g. 4 years"
            className={`${inputBase} border-[#d8e8c8]`}
          />
          <FieldError message={errors.ageRange} />
        </div>

        {/* Name */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="firstName" required>
              First Name
            </FieldLabel>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              className={`${inputBase} border-[#e3e9f3]`}
            />
            <FieldError message={errors.firstName} />
          </div>
          <div>
            <FieldLabel htmlFor="lastName" required>
              Last Name
            </FieldLabel>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              className={`${inputBase} border-[#e3e9f3]`}
            />
            <FieldError message={errors.lastName} />
          </div>
        </div>

        {/* Email / Phone */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <FieldLabel htmlFor="email" required>
              Email
            </FieldLabel>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={`${inputBase} border-[#e3e9f3]`}
            />
            <FieldError message={errors.email} />
          </div>
          <div>
            <FieldLabel htmlFor="phone" required>
              Phone
            </FieldLabel>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={`${inputBase} border-[#e3e9f3]`}
            />
            <FieldError message={errors.phone} />
          </div>
        </div>

        {/* Address */}
        <div>
          <FieldLabel htmlFor="address">Address</FieldLabel>
          <input
            id="address"
            name="address"
            type="text"
            autoComplete="street-address"
            className={`${inputBase} border-[#e3e9f3]`}
          />
          <FieldError message={errors.address} />
        </div>

        {/* Message */}
        <div>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your child and how we can help…"
            className={`${inputBase} resize-none border-[#e3e9f3]`}
          />
          <FieldError message={errors.message} />
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isPending}
          whileHover={
            !isPending
              ? { y: -2, boxShadow: "0 14px 30px rgba(5,151,242,0.35)" }
              : {}
          }
          whileTap={!isPending ? { scale: 0.98 } : {}}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
          className="font-['Poppins'] mt-1 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#0597F2] px-7 py-4 text-sm font-bold text-white shadow-[0_10px_24px_rgba(5,151,242,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} strokeWidth={2.2} />
              Send Message
            </>
          )}
        </motion.button>

        {/* Status banner */}
        <AnimatePresence>
          {state.status !== "idle" && state.message && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              className={`flex items-start gap-2.5 rounded-xl px-4 py-3.5 text-sm ${
                state.status === "success"
                  ? "bg-[#62BF04]/10 text-[#3f7d02]"
                  : "bg-[#dc2626]/10 text-[#b91c1c]"
              }`}
            >
              {state.status === "success" ? (
                <CheckCircle2
                  size={18}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0"
                />
              ) : (
                <AlertCircle
                  size={18}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0"
                />
              )}
              <p className="font-['Poppins'] font-medium">{state.message}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
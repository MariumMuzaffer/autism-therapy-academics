"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "@/constants";
import { CONTACT_CARDS, FAQS } from "@/constants";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// Animation variants
// ─────────────────────────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 38 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const cardHover = {
  whileHover: { y: -4, boxShadow: "0 12px 32px rgba(4,63,140,0.10)" },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};

// ─────────────────────────────────────────────────────────────────────────────
// Shared layout primitive
// ─────────────────────────────────────────────────────────────────────────────

/** Observes when its content scrolls into view and exposes `inView` to children. */
function ScrollReveal({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} data-inview={inView} className={className}>
      {children(inView)}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 1 — Contact Us hero
// ─────────────────────────────────────────────────────────────────────────────
function ContactHero() {
  return (
    <ScrollReveal>
      {(inView) => (
        <section className="relative w-full overflow-hidden bg-white">
          {/* Background washes */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 75% 65% at 68% 35%, rgba(5,151,242,0.07) 0%, rgba(4,63,140,0.04) 55%, transparent 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 15% 90%, rgba(242,160,7,0.07) 0%, transparent 70%)",
            }}
          />

          {/* Decorative ring */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.2 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="pointer-events-none absolute -top-24 -right-36 h-[420px] w-[420px] rounded-full border border-[#0597F2]/20"
          />

          {/* Floating accent dots */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute top-7 left-[clamp(24px,6vw,72px)] h-[10px] w-[10px] rounded-full bg-[#62BF04]"
            style={{ boxShadow: "0 0 12px 3px rgba(98,191,4,0.35)" }}
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="absolute bottom-8 right-[clamp(24px,7vw,88px)] h-2 w-2 rounded-full bg-[#F2A007]"
            style={{ boxShadow: "0 0 10px 2px rgba(242,160,7,0.4)" }}
          />

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mb-6 flex items-center gap-3"
            >
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className="block h-0.5 w-7 origin-left rounded-full bg-[#0597F2]"
              />
              <span className="font-['Poppins'] text-[11px] font-bold uppercase tracking-[0.2em] text-[#0597F2]">
                Get in Touch
              </span>
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className="block h-0.5 w-7 origin-right rounded-full bg-[#0597F2]"
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.14)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-['Montserrat'] mb-6 text-[clamp(2.2rem,5.8vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-[#043F8C]"
            >
              Contact Us
            </motion.h1>

            {/* Body copy */}
            <motion.p
              variants={fadeUp(0.28)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-['Poppins'] mb-14 max-w-[640px] text-[clamp(0.95rem,2.1vw,1.06rem)] leading-[1.78] text-[#2d4a7a]"
            >
              We are now accepting children ages 18 months to 14 years for ABA
              Therapy. Submit the form below and a member of our team will reach
              out to answer any questions.
            </motion.p>

            {/* Contact cards */}
            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-3">
              {CONTACT_CARDS.map(({ Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp(0.42 + i * 0.1)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  {...cardHover}
                  className="flex flex-col items-center rounded-2xl border border-[#e3e9f3] bg-white px-6 py-9 text-center"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0597F2]/10">
                    <Icon size={22} color="#0597F2" strokeWidth={1.8} />
                  </span>
                  <p className="font-['Poppins'] mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#6b7d9c]">
                    {label}
                  </p>
                  <p className="font-['Montserrat'] text-base font-bold text-[#043F8C]">
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 2 — Send Us a Message (contact form)
// ─────────────────────────────────────────────────────────────────────────────
function ContactFormSection() {
  return (
    <ScrollReveal>
      {(inView) => (
        <section className="relative w-full overflow-hidden bg-[#f0f4fa] py-16 sm:py-20 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 85% 10%, rgba(5,151,242,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-2xl px-5 sm:px-8">
            <motion.div
              variants={scaleIn(0)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>
      )}
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 3 — Frequently Asked Questions
// ─────────────────────────────────────────────────────────────────────────────
function FaqItem({ question, answer, index, isOpen, onToggle, inView }) {
  return (
    <motion.div
      variants={fadeUp(0.1 + index * 0.08)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="overflow-hidden rounded-2xl border border-[#e3e9f3] bg-white"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#f7faff] sm:px-7"
      >
        <span className="font-['Montserrat'] text-[15px] font-bold text-[#043F8C] sm:text-base">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
            isOpen ? "bg-[#0597F2]" : "bg-[#0597F2]/10"
          }`}
        >
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex"
          >
            <ChevronDown
              size={16}
              strokeWidth={2.2}
              color={isOpen ? "#ffffff" : "#0597F2"}
            />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-['Poppins'] px-6 pb-5 text-sm leading-relaxed text-[#4a6080] sm:px-7 sm:text-[15px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <ScrollReveal>
      {(inView) => (
        <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 10% 10%, rgba(5,151,242,0.05) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
            {/* Left — image */}
            <motion.div
              variants={scaleIn(0)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative order-1 mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-[#e3e9f3] shadow-[0_20px_50px_rgba(4,63,140,0.10)] lg:order-1 lg:max-w-none"
            >
              <Image
                src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1782677320/WhatsApp_Image_2026-06-29_at_1.03.44_AM_shkdwp.jpg"
                alt="Therapist supporting a child during an ABA session"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(4,63,140,0) 55%, rgba(4,63,140,0.18) 100%)",
                }}
              />
            </motion.div>

            {/* Right — FAQs */}
            <div className="order-1 text-center lg:order-2 lg:text-left">
              {/* Eyebrow */}
              <motion.div
                variants={fadeUp(0)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="mb-6 flex items-center justify-center gap-3 lg:justify-start"
              >
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                  }}
                  className="block h-0.5 w-7 origin-left rounded-full bg-[#0597F2]"
                />
                <span className="font-['Poppins'] text-[11px] font-bold uppercase tracking-[0.2em] text-[#0597F2]">
                  Frequently Asked
                </span>
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                  }}
                  className="block h-0.5 w-7 origin-right rounded-full bg-[#0597F2]"
                />
              </motion.div>

              <motion.h2
                variants={fadeUp(0.05)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="font-['Montserrat'] mb-4 text-[clamp(1.9rem,4.4vw,2.5rem)] font-extrabold leading-tight text-[#043F8C]"
              >
                Common Questions
              </motion.h2>

              <motion.p
                variants={fadeUp(0.1)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="font-['Poppins'] mx-auto mb-12 max-w-xl text-sm leading-relaxed text-[#4a6080] sm:text-base lg:mx-0"
              >
                Answers to what families ask us most before getting started.
              </motion.p>

              <div className="flex flex-col gap-4 text-left">
                {FAQS.map((faq, i) => (
                  <FaqItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                    index={i}
                    inView={inView}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Root page
// ─────────────────────────────────────────────────────────────────────────────
export default function ContactUs() {
  return (
    <main className="w-full">
      <ContactHero />
      <ContactFormSection />
      <FaqSection />
    </main>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ABA_BULLETS, ALL_SERVICES, ArrowRight, Puzzle } from "@/constants";

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
  hidden: { opacity: 0, scale: 0.92 },
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
// Shared layout primitives
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

/** Eyebrow label used above section headings. */
function SectionEyebrow({ inView, children, align = "center" }) {
  return (
    <motion.p
      variants={fadeUp(0)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`font-['Poppins'] mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0597F2] ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {children}
    </motion.p>
  );
}

/** Pill-shaped call-to-action button with a trailing arrow. */
function CtaButton({ children, delay = 0, inView = true }) {
  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.button
        whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(5,151,242,0.32)" }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
        className="font-['Poppins'] inline-flex items-center gap-2 rounded-full bg-[#0597F2] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(5,151,242,0.28)] cursor-pointer"
      >
        {children}
        <ArrowRight size={16} strokeWidth={2.2} />
      </motion.button>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 1 — Services hero
// ─────────────────────────────────────────────────────────────────────────────
function ServicesHero() {
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

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
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
                Our Services
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
              Comprehensive Support
              <br />
              for{" "}
              <span className="relative inline-block">
                Every Stage
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={inView ? { scaleX: 1, opacity: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.62,
                  }}
                  className="absolute -bottom-1 left-0 right-0 h-1 origin-left rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #0597F2 0%, #62BF04 100%)",
                  }}
                />
              </span>
            </motion.h1>

            {/* Body copy */}
            <motion.p
              variants={fadeUp(0.28)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-['Poppins'] max-w-[560px] text-[clamp(0.95rem,2.1vw,1.06rem)] leading-[1.78] text-[#2d4a7a]"
            >
              From individualized therapy to family coaching, we provide a
              complete ecosystem of care designed to promote lasting growth and
              independence.
            </motion.p>
          </div>
        </section>
      )}
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 2 — ABA Therapy spotlight (image left, text right)
// ─────────────────────────────────────────────────────────────────────────────
function AbaTherapySpotlight() {
  return (
    <ScrollReveal>
      {(inView) => (
        <section className="relative w-full overflow-hidden bg-[#f0f4fa] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-16">
              {/* Image */}
              <motion.div
                variants={scaleIn(0.1)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="w-full lg:w-[48%]"
              >
                <div className="relative h-[340px] overflow-hidden rounded-2xl sm:h-[420px] lg:h-full min-h-[380px]">
                  <Image
                    src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1782476410/a3bdf7d38_generated_a82f312b_fcww4d.png"
                    alt="Therapist working with a child on a skills puzzle"
                    className="h-full w-full object-cover"
                    width={900}
                    height={420}
                  />
                </div>
              </motion.div>

              {/* Text */}
              <div className="w-full lg:w-[52%]">
                <motion.div
                  variants={fadeUp(0)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="mb-5"
                >
                  <span className="font-['Poppins'] inline-flex items-center gap-2 rounded-full bg-[#0597F2] px-5 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(5,151,242,0.28)]">
                    <Puzzle size={14} strokeWidth={2.2} />
                    Core Service
                  </span>
                </motion.div>

                <motion.h2
                  variants={fadeUp(0.12)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="font-['Montserrat'] mb-5 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-tight text-[#043F8C]"
                >
                  ABA Therapy
                </motion.h2>

                <motion.p
                  variants={fadeUp(0.2)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="font-['Poppins'] mb-7 text-sm leading-relaxed text-[#4a6080] sm:text-base"
                >
                  Applied Behavior Analysis (ABA) is the foundation of our
                  intervention model. Our BCBAs &amp; RBTs use 1:1 play-based,
                  evidence-based strategies to build skills, increase
                  independence, and reduce challenging behaviors in a structured
                  and supportive environment.
                </motion.p>

                <div className="mb-8 flex flex-col gap-3.5">
                  {ABA_BULLETS.map((item, i) => (
                    <motion.div
                      key={item}
                      variants={fadeUp(0.3 + i * 0.08)}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0597F2]" />
                      <p className="font-['Poppins'] text-sm leading-relaxed text-[#043F8C] sm:text-base">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <Link href="/contact-us" passHref>
                  <CtaButton delay={0.62} inView={inView}>
                    Get Started
                  </CtaButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 3 — All Services grid
// ─────────────────────────────────────────────────────────────────────────────

const SERVICE_ACCENTS = [
  { bg: "bg-[#0597F2]/10", fg: "#0597F2" },
  { bg: "bg-[#62BF04]/10", fg: "#62BF04" },
  { bg: "bg-[#F2A007]/10", fg: "#F2A007" },
  { bg: "bg-[#F20732]/10", fg: "#F20732" },
];

function AllServicesGrid() {
  return (
    <ScrollReveal>
      {(inView) => (
        <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-8 lg:px-10">
            <motion.h2
              variants={fadeUp(0)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-['Montserrat'] mb-4 text-[clamp(1.9rem,4.4vw,2.8rem)] font-extrabold leading-tight text-[#043F8C]"
            >
              All Services
            </motion.h2>
            <motion.p
              variants={fadeUp(0.12)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-['Poppins'] mx-auto mb-12 max-w-xl text-sm leading-relaxed text-[#4a6080] sm:text-base"
            >
              Every service works together as part of a comprehensive care plan.
            </motion.p>
 
            <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
              {ALL_SERVICES.map(({ Icon, title, desc, featured }, i) => {
                const accent = SERVICE_ACCENTS[i % SERVICE_ACCENTS.length];
                return (
                  <motion.div
                    key={title}
                    variants={fadeUp(0.18 + i * 0.08)}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    {...cardHover}
                    className="group flex flex-col items-start rounded-2xl border border-[#e3e9f3] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(4,63,140,0.12)]"
                  >
                    <span
                      className={`mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                        featured ? "bg-[#0597F2]" : accent.bg
                      }`}
                    >
                      <Icon
                        size={22}
                        color={featured ? "#ffffff" : accent.fg}
                        strokeWidth={1.8}
                      />
                    </span>
                    <h3 className="font-['Montserrat'] mb-2.5 text-lg font-bold text-[#043F8C]">
                      {title}
                    </h3>
                    <p className="font-['Poppins'] text-sm leading-relaxed text-[#4a6080]">
                      {desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 4 — School & academic support (text left, image right)
// ─────────────────────────────────────────────────────────────────────────────
function SchoolAcademicSupport() {
  return (
    <ScrollReveal>
      {(inView) => (
        <section className="relative w-full overflow-hidden bg-[#f0f4fa] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
              {/* Text */}
              <div className="w-full lg:w-[48%]">
                <SectionEyebrow inView={inView} align="left">
                  School &amp; Academic Support
                </SectionEyebrow>

                <motion.h2
                  variants={fadeUp(0.12)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="font-['Montserrat'] mb-5 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-tight text-[#043F8C]"
                >
                  From Therapy Room to Classroom
                </motion.h2>

                <motion.p
                  variants={fadeUp(0.22)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="font-['Poppins'] mb-8 text-sm leading-relaxed text-[#4a6080] sm:text-base"
                >
                  We bridge therapy and education, collaborating with schools to
                  ensure your child&apos;s progress carries over into academic
                  settings. Our team supports IEP goals and helps develop the
                  readiness skills needed for classroom success.
                </motion.p>
                <Link href="/contact-us">
                  <CtaButton delay={0.34} inView={inView}>
                    Schedule a Consultation
                  </CtaButton>
                </Link>
              </div>

              {/* Image */}
              <motion.div
                variants={scaleIn(0.18)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="w-full lg:w-[52%]"
              >
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ boxShadow: "0 20px 60px rgba(4,63,140,0.12)" }}
                >
                  <Image
                    src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1782476410/5b1754173_generated_0f36c394_fqhw8o.png"
                    alt="Tutor helping a student with classwork"
                    className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[460px]"
                    width={900}
                    height={460}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1.5"
                    style={{
                      background:
                        "linear-gradient(90deg, #043F8C 0%, #0597F2 50%, #62BF04 100%)",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </ScrollReveal>
  );
}

export default function Services() {
  return (
    <main className="w-full">
      <ServicesHero />
      <AbaTherapySpotlight />
      <AllServicesGrid />
      <SchoolAcademicSupport />
    </main>
  );
}

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Heart,
  Clock,
  CheckCircle2,
  HERO_STATS,
  ACCEPTED_INSURANCE,
  UPCOMING_INSURANCE,
  APPROACH_ITEMS,
  HOME_SERVICES,
  FAMILY_BULLETS,
  Phone,
} from "@/constants";

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

const MotionLink = motion(Link);

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

/** Solid pill-shaped primary button with a trailing arrow. */
function PrimaryButton({ children, delay = 0, inView = true }) {
  return (
    <motion.button
      variants={fadeUp(delay)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -2, boxShadow: "0 12px 28px rgba(5,151,242,0.32)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className="font-['Poppins'] inline-flex items-center gap-2 rounded-full bg-[#0597F2] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(5,151,242,0.28)] cursor-pointer"
    >
      {children}
      <ArrowRight size={16} strokeWidth={2.2} />
    </motion.button>
  );
}

/** Outlined pill-shaped secondary button. */
function SecondaryButton({
  children,
  delay = 0,
  inView = true,
  icon: IconComp,
}) {
  return (
    <motion.button
      variants={fadeUp(delay)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(4,63,140,0.10)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className="font-['Poppins'] inline-flex items-center gap-2 rounded-full border border-[#e3e9f3] bg-white px-7 py-3.5 text-sm font-semibold text-[#043F8C] cursor-pointer"
    >
      {IconComp && <IconComp size={16} strokeWidth={2.2} />}
      {children}
    </motion.button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 1 — Hero
// ─────────────────────────────────────────────────────────────────────────────
function HomeHero() {
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

          <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24 lg:px-4">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-14">
              {/* Text */}
              <div className="w-full lg:w-[48%]">
                <motion.div
                  variants={fadeUp(0)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0597F2]/25 bg-[#0597F2]/10 px-4 py-2"
                >
                  <Heart size={14} color="#0597F2" strokeWidth={2} />
                  <span className="font-['Poppins'] text-xs font-semibold text-[#043F8C]">
                    Evidence-Based ABA Therapy
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp(0.12)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="font-['Montserrat'] mb-6 text-[clamp(2.1rem,5.2vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-[#043F8C]"
                >
                  Foundation That Supports{" "}
                  <span className="text-[#0597F2]">Meaningful Progress</span>{" "}
                  &amp; Success
                </motion.h1>

                <motion.p
                  variants={fadeUp(0.24)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="font-['Poppins'] mb-8 max-w-[540px] text-[clamp(0.95rem,2vw,1.05rem)] leading-[1.78] text-[#4a6080]"
                >
                  We deliver personalized, evidence-based ABA therapy designed
                  around each child and family. Our BCBAs &amp; RBTs use 1:1
                  play-based strategies to build skills, increase independence
                  and reduce challenging behaviors in a structured &amp;
                  supportive environment.
                </motion.p>

                <motion.div
                  variants={fadeUp(0.36)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="mb-10 flex flex-wrap items-center justify-center xl:justify-start gap-3"
                >
                  <Link href="/contact-us">
                    <PrimaryButton inView={inView}>
                      Start Your Journey
                    </PrimaryButton>
                  </Link>
                  <Link href="/services">
                    <SecondaryButton inView={inView}>
                      Explore Services
                    </SecondaryButton>
                  </Link>
                </motion.div>

                <motion.div
                  variants={fadeUp(0.48)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex flex-wrap items-center justify-center xl:justify-start gap-6"
                >
                  {HERO_STATS.map(({ value, label }, i) => (
                    <div
                      key={label}
                      className={`flex items-center gap-6 ${i > 0 ? "border-l border-[#e3e9f3] pl-6" : ""}`}
                    >
                      <div>
                        <p className="font-['Montserrat'] text-lg font-extrabold text-[#043F8C]">
                          {value}
                        </p>
                        <p className="font-['Poppins'] text-xs text-[#6b7d9c]">
                          {label}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                variants={scaleIn(0.18)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="relative w-full lg:w-[52%]"
              >
                <div
                  className="relative h-[340px] overflow-hidden rounded-2xl sm:h-[420px] lg:h-[460px]"
                  style={{ boxShadow: "0 20px 60px rgba(4,63,140,0.12)" }}
                >
                  <Image
                    src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1782671665/WhatsApp_Image_2026-06-28_at_7.42.34_PM_2_jrps0w.jpg"
                    alt="Therapist playing with a child using building blocks"
                    className="h-full w-full object-cover"
                    width={900}
                    height={460}
                  />
                </div>

                {/* Floating badge */}
                {/* <motion.div
                  variants={fadeUp(0.5)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_40px_rgba(4,63,140,0.16)] sm:left-8"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#62BF04]/15">
                    <Heart size={20} color="#62BF04" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-['Montserrat'] text-sm font-bold text-[#043F8C]">
                      Positive Growth
                    </p>
                    <p className="font-['Poppins'] text-xs text-[#6b7d9c]">
                      Data-driven results
                    </p>
                  </div>
                </motion.div> */}
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 2 — Insurance strip
// ─────────────────────────────────────────────────────────────────────────────
function InsuranceStrip() {
  return (
    <ScrollReveal>
      {(inView) => (
        <section className="relative w-full overflow-hidden bg-[#f0f4fa] py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-5 text-center sm:px-8">
            <motion.h2
              variants={fadeUp(0)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-['Poppins'] text-lg font-bold text-[#043F8C] sm:text-xl"
            >
              Insurances We Accept
            </motion.h2>

            <motion.div
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-wrap items-center justify-center gap-2"
            >
              <span className="font-['Poppins'] inline-flex items-center gap-1.5 rounded-full bg-[#62BF04]/15 px-3 py-1.5 text-xs font-semibold text-[#3f7d02]">
                <CheckCircle2 size={14} strokeWidth={2.2} />
                Now Accepting
              </span>
              <span className="font-['Poppins'] text-sm font-semibold text-[#043F8C]">
                {ACCEPTED_INSURANCE}
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-wrap items-center justify-center gap-2"
            >
              <span className="font-['Poppins'] inline-flex items-center gap-1.5 rounded-full bg-[#F2A007]/15 px-3 py-1.5 text-xs font-semibold text-[#9a6c04]">
                <Clock size={14} strokeWidth={2.2} />
                Coming Soon
              </span>
              <span className="font-['Poppins'] text-sm text-[#4a6080]">
                {UPCOMING_INSURANCE}
              </span>
            </motion.div>
          </div>
        </section>
      )}
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 3 — Our approach
// ─────────────────────────────────────────────────────────────────────────────
function OurApproach() {
  return (
    <ScrollReveal>
      {(inView) => (
        <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-8 lg:px-10">
            <SectionEyebrow inView={inView}>Our Approach</SectionEyebrow>

            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-['Montserrat'] mb-4 text-[clamp(1.9rem,4.4vw,2.8rem)] font-extrabold leading-tight text-[#043F8C]"
            >
              Precision in Practice
            </motion.h2>

            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-['Poppins'] mx-auto mb-12 max-w-2xl text-sm leading-relaxed text-[#4a6080] sm:text-base"
            >
              Applied Behavior Analysis is the foundation of our intervention
              model. We combine clinical rigor with compassionate, play-based
              learning.
            </motion.p>

            <div className="mb-10 grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
              {APPROACH_ITEMS.map(({ Icon, title, desc, accent }, i) => (
                <motion.div
                  key={title}
                  variants={fadeUp(0.3 + i * 0.1)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  {...cardHover}
                  className="rounded-2xl border border-[#e3e9f3] bg-white p-7"
                >
                  <span
                    className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: `${accent}18` }}
                  >
                    <Icon size={20} color={accent} strokeWidth={1.8} />
                  </span>
                  <h3 className="font-['Montserrat'] mb-2 text-base font-bold text-[#043F8C]">
                    {title}
                  </h3>
                  <p className="font-['Poppins'] text-sm leading-relaxed text-[#4a6080]">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <MotionLink
              href="/about-us"
              variants={fadeUp(0.6)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ gap: "10px" }}
              className="font-['Poppins'] inline-flex items-center gap-2 text-sm font-semibold text-[#0597F2]"
            >
              Learn More About Our Philosophy
              <ArrowRight size={16} strokeWidth={2.2} />
            </MotionLink>
          </div>
        </section>
      )}
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 4 — Our services (bento-style grid)
// ─────────────────────────────────────────────────────────────────────────────

// Icon background / foreground pairs cycled across the smaller cards so the
// grid reads as lively but still on-brand — pulled straight from the palette:
// red #F20732 · navy #043F8C · blue #0597F2 · green #62BF04 · amber #F2A007
const SERVICE_ACCENTS = [
  { bg: "bg-[#0597F2]/10", fg: "#0597F2" },
  { bg: "bg-[#62BF04]/10", fg: "#62BF04" },
  { bg: "bg-[#F2A007]/10", fg: "#F2A007" },
  { bg: "bg-[#F20732]/10", fg: "#F20732" },
];

function OurServices() {
  const [first, ...rest] = HOME_SERVICES;

  return (
    <ScrollReveal>
      {(inView) => (
        <section className="relative w-full overflow-hidden bg-[#f0f4fa] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 text-center sm:px-8 lg:px-10">
            <SectionEyebrow inView={inView}>What We Offer</SectionEyebrow>

            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-['Montserrat'] mb-4 text-[clamp(1.9rem,4.4vw,2.8rem)] font-extrabold leading-tight text-[#043F8C]"
            >
              Our Services
            </motion.h2>

            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-['Poppins'] mx-auto mb-12 max-w-2xl text-sm leading-relaxed text-[#4a6080] sm:text-base"
            >
              Comprehensive support tailored to every stage of your child&apos;s
              development journey.
            </motion.p>

            <div className="mb-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
              {/* Featured large card spans full width on larger screens */}
              <motion.div
                variants={fadeUp(0.3)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                {...cardHover}
                className="group rounded-2xl border border-[#e3e9f3] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(4,63,140,0.12)] sm:col-span-2 lg:col-span-2"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0597F2] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <first.Icon size={22} color="#ffffff" strokeWidth={1.8} />
                </span>
                <h3 className="font-['Montserrat'] mb-2.5 text-lg font-bold text-[#043F8C]">
                  {first.title}
                </h3>
                <p className="font-['Poppins'] text-sm leading-relaxed text-[#4a6080]">
                  {first.desc}
                </p>
              </motion.div>

              {rest.slice(0, 1).map(({ Icon, title, desc }, i) => {
                const accent = SERVICE_ACCENTS[i % SERVICE_ACCENTS.length];
                return (
                  <motion.div
                    key={title}
                    variants={fadeUp(0.36 + i * 0.08)}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    {...cardHover}
                    className="group rounded-2xl border border-[#e3e9f3] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(4,63,140,0.12)]"
                  >
                    <span
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${accent.bg}`}
                    >
                      <Icon size={22} color={accent.fg} strokeWidth={1.8} />
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

              {rest.slice(1).map(({ Icon, title, desc }, i) => {
                const accent = SERVICE_ACCENTS[(i + 1) % SERVICE_ACCENTS.length];
                return (
                  <motion.div
                    key={title}
                    variants={fadeUp(0.44 + i * 0.08)}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    {...cardHover}
                    className="group rounded-2xl border border-[#e3e9f3] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(4,63,140,0.12)]"
                  >
                    <span
                      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${accent.bg}`}
                    >
                      <Icon size={22} color={accent.fg} strokeWidth={1.8} />
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

            <Link href="/services">
              <PrimaryButton delay={0.8} inView={inView}>
                View All Services
              </PrimaryButton>
            </Link>
          </div>
        </section>
      )}
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 5 — Family training & community
// ─────────────────────────────────────────────────────────────────────────────
function FamilyCommunity() {
  return (
    <ScrollReveal>
      {(inView) => (
        <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-16">
              {/* Image */}
              <motion.div
                variants={scaleIn(0.1)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="w-full lg:w-[48%]"
              >
                <div
                  className="relative h-[340px] overflow-hidden rounded-2xl sm:h-[420px] lg:h-full min-h-[380px]"
                  style={{ boxShadow: "0 20px 60px rgba(4,63,140,0.12)" }}
                >
                  <Image
                    src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1782671665/WhatsApp_Image_2026-06-28_at_7.42.34_PM_1_mazggg.jpg"
                    alt="Two women in conversation at a table during a family coaching session"
                    className="h-full w-full object-cover"
                    width={900}
                    height={420}
                  />
                </div>
              </motion.div>

              {/* Text */}
              <div className="w-full lg:w-[52%]">
                <SectionEyebrow inView={inView} align="left">
                  Family Training &amp; Community
                </SectionEyebrow>

                <motion.h2
                  variants={fadeUp(0.12)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="font-['Montserrat'] mb-5 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-[#043F8C]"
                >
                  Empowerment &amp; Wellness
                </motion.h2>

                <motion.p
                  variants={fadeUp(0.22)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="font-['Poppins'] mb-7 text-sm leading-relaxed text-[#4a6080] sm:text-base"
                >
                  Family involvement is essential to long-term success. We
                  provide parent training with the support needed to reinforce
                  growth at home and in the community.
                </motion.p>

                <div className="mb-9 flex flex-col gap-4">
                  {FAMILY_BULLETS.map(({ title, desc }, i) => (
                    <motion.div
                      key={title}
                      variants={fadeUp(0.32 + i * 0.1)}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0597F2]" />
                      <p className="font-['Poppins'] text-sm leading-relaxed text-[#4a6080] sm:text-base">
                        <span className="font-bold text-[#043F8C]">
                          {title}
                        </span>{" "}
                        {desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={fadeUp(0.54)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex flex-wrap items-center gap-3"
                >
                  <Link href="/contact-us">
                    <PrimaryButton inView={inView}>
                      Contact Us Today
                    </PrimaryButton>
                  </Link>
                  <SecondaryButton inView={inView} icon={Phone}>
                    <Link href="tel:331-332-0712">331-332-0712</Link>
                  </SecondaryButton>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}
    </ScrollReveal>
  );
}

export default function Home() {
  return (
    <main className="w-full">
      <HomeHero />
      <InsuranceStrip />
      <OurApproach />
      <OurServices />
      <FamilyCommunity />
    </main>
  );
}

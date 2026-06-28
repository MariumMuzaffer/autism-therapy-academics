"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CORE_PRINCIPLES,
  HERO_PILLS,
  ACADEMIC_ITEMS,
  COMMUNITY_CARDS,
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
  whileHover: { x: 4, boxShadow: "0 8px 32px rgba(4,63,140,0.10)" },
  transition: { type: "spring", stiffness: 260, damping: 20 },
};

const tileHoverFor = (accent) => ({
  whileHover: { y: -6, boxShadow: `0 20px 48px ${accent}22` },
  transition: { type: "spring", stiffness: 240, damping: 20 },
});

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

/** Eyebrow label with a heading line; used at the top of several sections. */
function SectionEyebrow({ inView, children }) {
  return (
    <motion.p
      variants={fadeUp(0)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="font-['Poppins'] mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0597F2]"
    >
      {children}
    </motion.p>
  );
}

/** Icon + title + description row used by the core principles and academic lists. */
function FeatureRow({ Icon, title, desc, accent, delay, variant = "row" }) {
  const isCard = variant === "card";

  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      animate="visible"
      {...(isCard ? cardHover : {})}
      className={
        isCard
          ? "flex items-start gap-4 rounded-2xl border border-white/80 bg-white px-6 py-5 shadow-sm"
          : "flex items-start gap-4"
      }
    >
      <span
        className={`mt-0.5 flex shrink-0 items-center justify-center rounded-xl ${
          isCard ? "h-11 w-11" : "h-10 w-10"
        }`}
        style={{ background: `${accent}18` }}
      >
        <Icon size={isCard ? 22 : 18} color="#043F8C" strokeWidth={1.8} />
      </span>
      <div>
        <h3
          className={`font-['Montserrat'] font-bold text-[#043F8C] ${isCard ? "mb-1.5 text-base" : "mb-1 text-sm"}`}
        >
          {title}
        </h3>
        <p className="font-['Poppins'] text-sm leading-relaxed text-[#4a6080]">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

/** Centered icon tile used in the family/community grid. */
function CommunityTile({ Icon, title, desc, accent, gradient, delay }) {
  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      animate="visible"
      {...tileHoverFor(accent)}
      className={`flex flex-col items-center rounded-2xl border border-white/70 bg-linear-to-br ${gradient} bg-white p-8 text-center shadow-sm backdrop-blur-sm`}
    >
      <span
        className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{ background: `${accent}18` }}
      >
        <Icon size={26} color={accent} strokeWidth={1.8} />
      </span>
      <h3 className="font-['Montserrat'] mb-3 text-lg font-bold text-[#043F8C]">
        {title}
      </h3>
      <p className="font-['Poppins'] text-sm leading-relaxed text-[#4a6080]">
        {desc}
      </p>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 1 — ABA Philosophy hero
// ─────────────────────────────────────────────────────────────────────────────
function PhilosophyHero() {
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
                About Us
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
              Our ABA{" "}
              <span className="relative inline-block">
                Philosophy
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
              className="font-['Poppins'] mb-10 max-w-[560px] text-[clamp(0.95rem,2.1vw,1.06rem)] leading-[1.78] text-[#2d4a7a]"
            >
              Precision in Practice: Meaningful &amp; Lasting Outcomes. Applied
              Behavior Analysis is the foundation of our intervention model,
              combining clinical excellence with compassionate care.
            </motion.p>

            {/* Pills */}
            <motion.div
              variants={fadeUp(0.42)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-wrap justify-center gap-3"
            >
              {HERO_PILLS.map(({ label, dotCls, bgCls, borderCls }) => (
                <motion.span
                  key={label}
                  whileHover={{ y: -2, scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className={`font-['Poppins'] inline-flex cursor-default select-none items-center gap-2 rounded-full border px-5 py-2 text-xs font-semibold tracking-wide text-[#043F8C] ${bgCls} ${borderCls}`}
                >
                  <span
                    className={`h-[7px] w-[7px] shrink-0 rounded-full ${dotCls}`}
                  />
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </ScrollReveal>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section 2 — Core principles (image left, cards right)
// ─────────────────────────────────────────────────────────────────────────────
function CorePrinciples() {
  return (
    <ScrollReveal>
      {(inView) => (
        <section className="relative w-full overflow-hidden bg-[#f0f4fa] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-12">
              {/* Image */}
              <motion.div
                variants={scaleIn(0.1)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="w-full lg:w-[48%]"
              >
                <div className="relative h-[340px] overflow-hidden rounded-2xl sm:h-[420px] lg:h-full min-h-[380px]">
                  <Image
                    src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1782475450/f1c6b6613_generated_474a0bba_hhqikw.png"
                    alt="Therapist consulting with a parent"
                    className="h-full w-full object-cover"
                    width={900}
                    height={420}
                  />
                </div>
              </motion.div>

              {/* Cards */}
              <div className="flex w-full flex-col gap-4 lg:w-[52%]">
                {inView &&
                  CORE_PRINCIPLES.map(({ Icon, title, desc, accent }, i) => (
                    <FeatureRow
                      key={title}
                      Icon={Icon}
                      title={title}
                      desc={desc}
                      accent={accent}
                      delay={0.15 + i * 0.12}
                      variant="card"
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
// Section 3 — Academic integration (text left, image right)
// ─────────────────────────────────────────────────────────────────────────────
function AcademicIntegration() {
  return (
    <ScrollReveal>
      {(inView) => (
        <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
              {/* Text */}
              <div className="w-full lg:w-[48%]">
                <SectionEyebrow inView={inView}>
                  Academic Integration
                </SectionEyebrow>

                <motion.h2
                  variants={fadeUp(0.12)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="font-['Montserrat'] mb-5 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight text-[#043F8C]"
                >
                  Bridging the Gap Where Academics Meets Advocacy
                </motion.h2>

                <motion.p
                  variants={fadeUp(0.22)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="font-['Poppins'] mb-8 text-sm leading-relaxed text-[#4a6080] sm:text-base"
                >
                  We help children apply therapy skills in educational settings
                  by developing the readiness skills needed for classroom
                  success.
                </motion.p>

                <div className="flex flex-col gap-5">
                  {inView &&
                    ACADEMIC_ITEMS.map(({ Icon, title, desc, accent }, i) => (
                      <FeatureRow
                        key={title}
                        Icon={Icon}
                        title={title}
                        desc={desc}
                        accent={accent}
                        delay={0.3 + i * 0.12}
                        variant="row"
                      />
                    ))}
                </div>
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
                    src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1782671665/WhatsApp_Image_2026-06-28_at_7.42.34_PM_qlqv4s.jpg"
                    alt="Teacher working with children in a classroom"
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

// ─────────────────────────────────────────────────────────────────────────────
// Section 4 — Family training & community
// ─────────────────────────────────────────────────────────────────────────────
function FamilyCommunity() {
  return (
    <ScrollReveal>
      {(inView) => (
        <section className="relative w-full overflow-hidden bg-[#f0f4fa] py-16 sm:py-20 lg:py-24">
          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div
              className="absolute -top-32 left-1/2 h-64 w-[700px] -translate-x-1/2 rounded-full opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(5,151,242,0.3) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
            <SectionEyebrow inView={inView}>
              Family Training &amp; Community
            </SectionEyebrow>

            <motion.h2
              variants={fadeUp(0.12)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-['Montserrat'] mb-5 text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-tight text-[#043F8C]"
            >
              Empowerment &amp; Wellness
            </motion.h2>

            <motion.p
              variants={fadeUp(0.22)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-['Poppins'] mx-auto mb-12 max-w-2xl text-sm leading-relaxed text-[#4a6080] sm:text-base"
            >
              Family involvement is essential to long-term success. We provide
              parent training with the support needed to reinforce growth at
              home and in the community.
            </motion.p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {inView &&
                COMMUNITY_CARDS.map(
                  ({ Icon, title, desc, accent, gradient }, i) => (
                    <CommunityTile
                      key={title}
                      Icon={Icon}
                      title={title}
                      desc={desc}
                      accent={accent}
                      gradient={gradient}
                      delay={0.3 + i * 0.14}
                    />
                  ),
                )}
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
export default function AboutUs() {
  return (
    <main className="w-full">
      <PhilosophyHero />
      <CorePrinciples />
      <AcademicIntegration />
      <FamilyCommunity />
    </main>
  );
}

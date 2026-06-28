import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  QUICK_LINKS,
  CONTACT_INFO,
  LEGAL_LINKS,
  CURRENT_YEAR,
  ArrowUpRight,
} from "@/constants";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#043F8C]">
      {/* Background washes for depth, matching other dark sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 88% -5%, rgba(5,151,242,0.22) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 5% 110%, rgba(98,191,4,0.10) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-16 pb-10 sm:px-8 sm:pt-20 sm:pb-12 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_1fr]">
          {/* Brand */}
          <div className="max-w-md">
            <div className="mb-5 flex items-center gap-3.5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/95 p-2 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                <Image
                  src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1782453812/Autism_Therapy_Academics_Logo_2_a2llb9.png"
                  alt="ATA Logo"
                  width={42}
                  height={42}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <p className="font-['Montserrat'] text-lg font-bold leading-tight text-white">
                  Autism Therapy & Academics
                </p>
                <p className="font-['Poppins'] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#62BF04]">
                  ABA Services
                </p>
              </div>
            </div>

            <p className="font-['Poppins'] text-sm leading-relaxed text-[#aebfdd]">
              Empowering families through evidence-based ABA therapy. We deliver
              personalized care designed around each child and family, now
              accepting children ages 18 months to 14 years.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-['Montserrat'] mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3.5">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-['Poppins'] group inline-flex items-center gap-1.5 text-sm text-[#aebfdd] transition-colors hover:text-white"
                  >
                    {label}
                    <ArrowUpRight
                      size={13}
                      strokeWidth={2.2}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Montserrat'] mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              {CONTACT_INFO.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-['Poppins'] group flex items-center gap-3 text-sm text-[#aebfdd] transition-colors hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 transition-colors group-hover:bg-[#62BF04]">
                      <Icon
                        size={15}
                        strokeWidth={1.8}
                        className="text-[#9fd957] transition-colors group-hover:text-white"
                      />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
              {/* <li>
                <span className="font-['Poppins'] flex items-start gap-3 text-sm text-[#aebfdd]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin size={15} strokeWidth={1.8} className="text-[#9fd957]" />
                  </span>
                  <span className="pt-2">Ages 18 months – 14 years</span>
                </span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-['Poppins'] text-xs text-[#8ea2c9]">
            © {CURRENT_YEAR} Autism Therapy & Academics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="font-['Poppins'] text-xs text-[#8ea2c9] transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

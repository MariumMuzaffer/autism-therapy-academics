"use client";
import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navLinks, Menu, Phone, ChevronDown, X } from "@/constants";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileClosing, setMobileClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const pathname = usePathname();
  const dropdownTimerRef = useRef(null);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trigger slide-out then unmount
  const handleCloseDrawer = () => {
    setMobileClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setMobileClosing(false);
    }, 260);
  };

  // Close menus on route change
  useEffect(() => {
    handleCloseDrawer();
    setDropdownOpen(null);
    setMobileDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (path) => pathname === path;

  const handleMouseEnter = (label) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setDropdownOpen(label);
  };

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => setDropdownOpen(null), 100);
  };

  const handleOpenDrawer = () => {
    setMobileOpen(true);
    setMobileClosing(false);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 xl:px-20">
          <div className="flex items-center justify-between h-16 lg:h-18 xl:h-20">
            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2 lg:gap-3 shrink-0 group"
              aria-label="Autism Therapy Academics - Home"
            >
              <Image
                src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1782453812/Autism_Therapy_Academics_Logo_2_a2llb9.png"
                alt="Autism Therapy Academics Logo"
                width={56}
                height={56}
                className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="flex flex-col">
                <span
                  className="text-[11px] xs:text-xs sm:text-sm lg:text-base xl:text-lg font-bold leading-tight tracking-tight"
                  style={{ color: "#043F8C" }}
                >
                  Autism Therapy & Academics
                </span>
                <span
                  className="text-[10px] xs:text-[11px] sm:text-xs lg:text-sm font-semibold leading-tight tracking-wide"
                  style={{ color: "#0597F2" }}
                  // style={{ color: "#FA0321" }}
                >
                  ABA Services
                </span>
                <span
                  className="text-[9px] xs:text-[10px] sm:text-[10px] lg:text-xs font-medium leading-tight tracking-wide"
                  // style={{ color: "#F2A007" }}
                  style={{ color: "#BF40BF"}}
                >
                  Empowering Growth. Building Futures.
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <ul
              className="hidden lg:flex items-center gap-0.5 xl:gap-2.5"
              role="list"
            >
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && handleMouseEnter(link.label)
                  }
                  onMouseLeave={() => link.children && handleMouseLeave()}
                >
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        className={`flex items-center gap-1 px-3 xl:px-4 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${
                          isActive(link.path)
                            ? "text-white shadow-sm"
                            : "text-gray-700 hover:bg-[rgba(4,63,140,0.08)] hover:text-[#043F8C]"
                        }`}
                        style={
                          isActive(link.path)
                            ? { backgroundColor: "#043F8C" }
                            : undefined
                        }
                        aria-expanded={dropdownOpen === link.label}
                        aria-haspopup="true"
                      >
                        {link.label}
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${
                            dropdownOpen === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {dropdownOpen === link.label && (
                        <ul
                          className="dropdown-fade-in absolute top-full left-0 mt-1 w-52 xl:w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                          role="menu"
                          onMouseEnter={() => handleMouseEnter(link.label)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {link.children.map((child) => (
                            <li key={child.label} role="none">
                              <Link
                                href={child.path}
                                className="block px-4 py-2.5 text-xs xl:text-sm text-gray-700 border-l-2 border-transparent transition-colors duration-150 hover:bg-[rgba(5,151,242,0.08)] hover:text-[#043F8C] hover:border-[#0597F2]"
                                role="menuitem"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.path}
                      className={`px-3 xl:px-4 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 block ${
                        isActive(link.path)
                          ? "text-white shadow-sm"
                          : "text-gray-700 hover:bg-[rgba(4,63,140,0.08)] hover:text-[#043F8C]"
                      }`}
                      style={
                        isActive(link.path)
                          ? { backgroundColor: "#043F8C" }
                          : undefined
                      }
                      aria-current={isActive(link.path) ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
              {/* Phone */}
              <a
                href="tel:3313320712"
                className="flex items-center gap-1.5 xl:gap-2 group"
                aria-label="Call us at 331-332-0712"
              >
                <span
                  className="flex items-center justify-center w-7 h-7 xl:w-8 xl:h-8 rounded-full transition-all duration-200 group-hover:scale-110"
                  style={{ backgroundColor: "rgba(4,63,140,0.08)" }}
                >
                  <Phone size={13} style={{ color: "#043F8C" }} />
                </span>
                <div className="flex flex-col leading-tight">
                  <span
                    className="text-[9px] xl:text-[10px] font-semibold uppercase tracking-widest"
                    style={{ color: "#0597F2" }}
                  >
                    Call Us
                  </span>
                  <span
                    className="text-xs xl:text-sm font-bold tracking-tight"
                    style={{ color: "#043F8C" }}
                  >
                    331-332-0712
                  </span>
                </div>
              </a>

              {/* Divider */}
              <div className="w-px h-7 xl:h-8 bg-gray-200" aria-hidden="true" />

              {/* Get Started */}
              <Link
                href="/contact-us"
                className="px-4 xl:px-6 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-[#0597F2] whitespace-nowrap"
                style={{ backgroundColor: "#043F8C" }}
              >
                Get Started
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-lg transition-colors duration-200"
              style={{ color: "#043F8C" }}
              onClick={handleOpenDrawer}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/30 z-40 lg:hidden ${
              mobileClosing ? "overlay-fade-out" : "overlay-fade-in"
            }`}
            onClick={handleCloseDrawer}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div
            id="mobile-menu"
            className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl lg:hidden overflow-y-auto ${
              mobileClosing ? "drawer-slide-out" : "drawer-slide-in"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div className="flex items-center gap-1">
                <Image
                  src="https://res.cloudinary.com/dn7cdtibf/image/upload/v1782453812/Autism_Therapy_Academics_Logo_2_a2llb9.png"
                  alt="Autism Therapy Academics"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain shrink-0"
                />
                <div className="flex flex-col">
                  <span
                    className="text-sm font-bold leading-tight tracking-tight"
                    style={{ color: "#043F8C" }}
                  >
                    Autism Therapy & Academics
                  </span>
                  <span
                    className="text-xs font-semibold leading-tight tracking-wide"
                    style={{ color: "#0597F2" }}
                    // style={{ color: "#FA0321" }}
                  >
                    ABA Services
                  </span>
                  <span
                    className="text-[10px] font-medium leading-tight tracking-wide"
                    // style={{ color: "#F2A007" }}
                    style={{ color: "#BF40BF" }}
                  >
                    Empowering Growth. Building Futures.
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCloseDrawer}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
                style={{ color: "#043F8C" }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Drawer links */}
            <nav className="p-4" aria-label="Mobile navigation">
              <ul className="space-y-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    {link.children ? (
                      <div>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === link.label ? null : link.label,
                            )
                          }
                          className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150"
                          style={{
                            color: isActive(link.path) ? "#043F8C" : "#374151",
                            backgroundColor: isActive(link.path)
                              ? "rgba(4,63,140,0.08)"
                              : "transparent",
                          }}
                          aria-expanded={mobileDropdown === link.label}
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              mobileDropdown === link.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileDropdown === link.label && (
                          <ul className="dropdown-fade-in ml-4 mt-1 space-y-0.5">
                            {link.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  href={child.path}
                                  className="block px-4 py-2.5 rounded-lg text-sm transition-colors duration-150"
                                  style={{
                                    color: isActive(child.path)
                                      ? "#0597F2"
                                      : "#6B7280",
                                    backgroundColor: isActive(child.path)
                                      ? "#EFF6FF"
                                      : "transparent",
                                  }}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.path}
                        className="block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150"
                        style={{
                          color: isActive(link.path) ? "#043F8C" : "#374151",
                          backgroundColor: isActive(link.path)
                            ? "rgba(4,63,140,0.08)"
                            : "transparent",
                        }}
                        aria-current={isActive(link.path) ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="mt-6 px-2 flex flex-col gap-3">
                <a
                  href="tel:3313320712"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full text-base font-semibold border-2 transition-all duration-300 hover:shadow-md"
                  style={{
                    color: "#043F8C",
                    borderColor: "#043F8C",
                    backgroundColor: "rgba(4,63,140,0.05)",
                  }}
                  aria-label="Call 331-332-0712"
                >
                  <Phone size={16} style={{ color: "#043F8C" }} />
                  331-332-0712
                </a>

                <Link
                  href="/contact-us"
                  className="block w-full text-center px-6 py-3 rounded-full text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#0597F2]"
                  style={{ backgroundColor: "#043F8C" }}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

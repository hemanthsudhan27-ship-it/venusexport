"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { mobileMenuVariants, navbarVariants } from "@/lib/animations";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/global-reach", label: "Global Reach" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHero, setIsHero] = useState(true);
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setIsHero(window.scrollY < 80 && pathname === "/");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isTransparent = isHero && !scrolled && !menuOpen;

  return (
    <motion.header
      variants={prefersReduced ? {} : navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md border-b border-[#E2EBF5] shadow-sm pointer-events-auto"
      }`}
      role="banner"
    >
      {isTransparent ? (
        // Cutout layout for Hero top
        <div className="flex h-[88px] lg:h-[128px] pointer-events-auto w-full">
          {/* Left white section */}
          <div 
            className="bg-white h-full flex items-center relative z-10 pl-[1.5rem] sm:pl-[2rem] lg:pl-[max(3rem,calc((100vw-1280px)/2+3rem))] pr-2 lg:pr-8 transition-all duration-300 pt-4 lg:pt-6"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B65B2] rounded-lg"
              aria-label="Venus Global Exports — Home"
            >
              <div className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="Venus Global Exports Logo"
                  width={240}
                  height={64}
                  className="h-14 lg:h-16 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 ml-6 lg:ml-12" aria-label="Main navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-[#0B65B2] bg-[#EBF3FC]"
                        : "text-[#1A2433] hover:text-[#0B65B2] hover:bg-[#F5F8FC]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            
            {/* Hamburger (Mobile only in cutout) */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden ml-6 flex flex-col justify-center items-center w-10 h-10 rounded-lg text-[#1A2433] hover:bg-[#F5F8FC] transition-colors duration-200"
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <motion.div className="flex flex-col gap-[5px] w-5" animate={menuOpen ? "open" : "closed"}>
                <motion.span className="block h-0.5 w-5 origin-center rounded-full bg-[#1A2433]" variants={{ open: { rotate: 45, y: 7 }, closed: { rotate: 0, y: 0 } }} transition={{ duration: 0.25 }} />
                <motion.span className="block h-0.5 w-5 rounded-full bg-[#1A2433]" variants={{ open: { opacity: 0, x: -8 }, closed: { opacity: 1, x: 0 } }} transition={{ duration: 0.2 }} />
                <motion.span className="block h-0.5 w-5 origin-center rounded-full bg-[#1A2433]" variants={{ open: { rotate: -45, y: -7 }, closed: { rotate: 0, y: 0 } }} transition={{ duration: 0.25 }} />
              </motion.div>
            </button>
          </div>
          
          {/* S-Curve Transition */}
          <div className="flex-shrink-0 z-10 relative">
            {/* Desktop SVG - h-[128px] starts y=0, fills top 24px and curves down to 128px */}
            <svg className="hidden lg:block h-[128px] w-[140px] text-white" viewBox="0 0 140 128" fill="none">
              <path d="M -1 128 C 70 128 70 24 140 24 L 140 0 L -1 0 Z" fill="currentColor" />
            </svg>
            {/* Mobile SVG - h-[88px] starts y=0, fills top 16px and curves down to 88px */}
            <svg className="block lg:hidden h-[88px] w-[100px] text-white" viewBox="0 0 100 88" fill="none">
              <path d="M -1 88 C 50 88 50 16 100 16 L 100 0 L -1 0 Z" fill="currentColor" />
            </svg>
          </div>

          {/* Spacer to allow click through to the hero on the right side */}
          <div className="flex-1"></div>
        </div>
      ) : (
        // Standard layout
        <div className="container-site pointer-events-auto">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B65B2] rounded-lg"
              aria-label="Venus Global Exports — Home"
            >
              <div className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="Venus Global Exports Logo"
                  width={200}
                  height={56}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-[#0B65B2] bg-[#EBF3FC]"
                        : "text-[#1A2433] hover:text-[#0B65B2] hover:bg-[#F5F8FC]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-xl bg-[#0B65B2] text-white text-sm font-semibold hover:bg-[#084d88] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B65B2] focus-visible:ring-offset-2"
              >
                Request an Enquiry
              </Link>
              <button
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg text-[#1A2433] hover:bg-[#F5F8FC] transition-colors duration-200"
              >
                <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
                <motion.div className="flex flex-col gap-[5px] w-5" animate={menuOpen ? "open" : "closed"}>
                  <motion.span className="block h-0.5 w-5 origin-center rounded-full bg-[#1A2433]" variants={{ open: { rotate: 45, y: 7 }, closed: { rotate: 0, y: 0 } }} transition={{ duration: 0.25 }} />
                  <motion.span className="block h-0.5 w-5 rounded-full bg-[#1A2433]" variants={{ open: { opacity: 0, x: -8 }, closed: { opacity: 1, x: 0 } }} transition={{ duration: 0.2 }} />
                  <motion.span className="block h-0.5 w-5 origin-center rounded-full bg-[#1A2433]" variants={{ open: { rotate: -45, y: -7 }, closed: { rotate: 0, y: 0 } }} transition={{ duration: 0.25 }} />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            variants={prefersReduced ? {} : mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden overflow-hidden bg-white border-t border-[#E2EBF5]"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container-site py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-[#0B65B2] bg-[#EBF3FC]"
                        : "text-[#1A2433] hover:text-[#0B65B2] hover:bg-[#F5F8FC]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 pb-1 border-t border-[#E2EBF5] mt-2">
                <Link
                  href="/contact"
                  id="mobile-enquiry-cta"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center w-full px-5 py-3 rounded-xl bg-[#0B65B2] text-white text-sm font-semibold hover:bg-[#084d88] transition-colors duration-200"
                >
                  Request an Enquiry
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/rice", label: "Rice" },
      { href: "/products/coconut", label: "Coconut" },
      { href: "/products/vegetables", label: "Vegetables" },
      { href: "/products/fruits", label: "Fruits" },
      { href: "/products/spices", label: "Spices" },
    ],
  },
  { href: "/global-reach", label: "Global Reach" },
  { href: "/quality", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMenuOpen(false); setOpenDropdown(null); }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navBg = scrolled
    ? "bg-white/97 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] border-b border-[#E8EDF2]"
    : "bg-transparent";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${navBg}`}
      role="banner"
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-[72px] lg:h-[80px]">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-lg"
            aria-label="Venus Global Exports — Home"
          >
            <Image
              src="/logo/logo.png"
              alt="Venus Global Exports Logo"
              width={180}
              height={52}
              className="h-11 lg:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav
            ref={dropdownRef}
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              const hasChildren = link.children && link.children.length > 0;

              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => hasChildren && setOpenDropdown(link.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`
                      relative px-4 py-2.5 rounded-lg text-sm font-semibold nav-link-underline transition-all duration-200
                      ${isActive
                        ? "text-[#C8102E] active"
                        : scrolled
                          ? "text-[#08063A] hover:text-[#C8102E]"
                          : "text-white hover:text-white/80"
                      }
                    `}
                    aria-current={isActive ? "page" : undefined}
                    aria-haspopup={hasChildren ? "true" : undefined}
                    aria-expanded={hasChildren ? openDropdown === link.href : undefined}
                  >
                    {link.label}
                    {hasChildren && (
                      <svg
                        className={`inline-block ml-1 w-3 h-3 transition-transform duration-200 ${openDropdown === link.href ? "rotate-180" : ""}`}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {hasChildren && (
                    <AnimatePresence>
                      {openDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-2 w-52 bg-white rounded-2xl border border-[#E8EDF2] shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden py-2"
                          role="menu"
                        >
                          {link.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="dropdown-link px-5 py-2.5"
                              role="menuitem"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ── CTA + Mobile Toggle ── */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              id="navbar-enquiry-cta"
              className="hidden lg:inline-flex btn-primary text-sm"
            >
              Get In Touch
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </Link>

            {/* Hamburger */}
            <button
              id="mobile-menu-toggle"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((p) => !p)}
              className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-colors duration-200 ${scrolled ? "text-[#08063A] hover:bg-[#F4F6F8]" : "text-white hover:bg-white/10"}`}
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <motion.div
                className="flex flex-col gap-[5px] w-5"
                animate={menuOpen ? "open" : "closed"}
              >
                <motion.span
                  className={`block h-0.5 w-5 origin-center rounded-full ${scrolled ? "bg-[#08063A]" : "bg-white"}`}
                  variants={{ open: { rotate: 45, y: 7 }, closed: { rotate: 0, y: 0 } }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className={`block h-0.5 w-5 rounded-full ${scrolled ? "bg-[#08063A]" : "bg-white"}`}
                  variants={{ open: { opacity: 0, x: -8 }, closed: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className={`block h-0.5 w-5 origin-center rounded-full ${scrolled ? "bg-[#08063A]" : "bg-white"}`}
                  variants={{ open: { rotate: -45, y: -7 }, closed: { rotate: 0, y: 0 } }}
                  transition={{ duration: 0.25 }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={prefersReduced ? {} : { opacity: 0, height: 0 }}
            animate={prefersReduced ? {} : { opacity: 1, height: "auto" }}
            exit={prefersReduced ? {} : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-[#E8EDF2] shadow-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container-site py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                        isActive
                          ? "text-[#C8102E] bg-[#FEF2F2]"
                          : "text-[#08063A] hover:text-[#C8102E] hover:bg-[#FEF2F2]"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] flex-shrink-0" aria-hidden="true" />
                      )}
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-6 mt-1 flex flex-col gap-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="dropdown-link px-4 py-2 text-xs rounded-lg hover:bg-[#FEF2F2]"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 pb-2 border-t border-[#E8EDF2] mt-3">
                <Link
                  href="/contact"
                  id="mobile-get-in-touch-cta"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                  style={{ background: "#C8102E" }}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Hero section"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-new.jpg"
          alt="Venus Global Exports premium food export — cargo shipping"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
          onLoad={() => setImgLoaded(true)}
        />
      </div>

      {/* ── Navy Gradient Overlay (Nikosi-style: dark left → transparent right) ── */}
      <div className="hero-overlay-navy absolute inset-0 z-10" aria-hidden="true" />

      {/* ── Extra bottom vignette for text readability ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, rgba(6,38,92,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Hero Content ── */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen pt-28 pb-24 lg:pt-32 lg:pb-28">
        <div className="container-site">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate={imgLoaded ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
            }}
          >
            {/* Eyebrow Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -24 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="mb-6"
            >
              <span className="subtitle-badge subtitle-badge-light">
                <span className="badge-line" />
                WELCOME TO VENUS GLOBAL EXPORTS
                <span className="badge-line" />
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-extrabold text-white leading-[1.03] tracking-[-0.02em] mb-6"
            >
              Exporting India&apos;s
              <br />
              <span style={{ color: "#D7A03F" }}>Finest Produce</span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
              }}
              className="text-lg lg:text-xl text-white/85 leading-relaxed mb-10 max-w-xl"
            >
              Venus Global Exports is India&apos;s trusted food export partner — delivering premium rice, coconut, vegetables, fruits, and spices to global markets with uncompromising quality.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link
                href="/products"
                id="hero-explore-products"
                className="btn-primary text-base px-8 py-4"
              >
                Explore Products
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </Link>

              <Link
                href="/contact"
                id="hero-contact-us"
                className="btn-outline text-base px-8 py-4"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Bottom indicator strip */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8, delay: 0.6 } },
              }}
              className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <div className="w-px h-8 bg-white/20 hidden sm:block" aria-hidden="true" />
              {[
                { icon: "🌾", text: "Rice & Coconut" },
                { icon: "🌶️", text: "Spices & Herbs" },
                { icon: "🌍", text: "Global Export" },
                { icon: "✓", text: "Quality Certified" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-sm" aria-hidden="true">{item.icon}</span>
                  <span className="text-xs font-semibold text-white/65 tracking-wide">{item.text}</span>
                  {i < 3 && <div className="w-px h-3.5 bg-white/15 ml-4 hidden sm:block" aria-hidden="true" />}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Animated Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

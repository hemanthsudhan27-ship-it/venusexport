"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  // Text layer parallax — moves opposite to mouse, sits "behind" ship
  const textX = useTransform(springX, [-1, 1], prefersReduced ? [0, 0] : [-18, 18]);
  const textY = useTransform(springY, [-1, 1], prefersReduced ? [0, 0] : [-8, 8]);

  const [shipLoaded, setShipLoaded] = useState(false);

  useEffect(() => {
    if (prefersReduced) return;
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, prefersReduced]);

  return (
    <section
      className="w-full bg-white px-4 lg:px-6 pb-4 lg:pb-6 pt-4 lg:pt-6"
      aria-label="Hero section"
    >
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-[#0A1628] rounded-[40px]"
        style={{ minHeight: "calc(100svh - 3rem)" }}
      >
      {/* ── LAYER 1: Background Gradient ─────────────────────────────── */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(165deg, #0A2447 0%, #0B65B2 40%, #073D6B 70%, #041122 100%)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── LAYER 2: Large Typography (Behind Ship) ───────────────────── */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none"
        style={{ x: textX, y: textY }}
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center px-4"
        >
          <div
            className="font-extrabold leading-none tracking-[-0.02em] text-white"
            style={{
              fontSize: "clamp(4.5rem, 14vw, 12rem)",
              opacity: 0.08,
              letterSpacing: "-0.04em",
            }}
          >
            <div>VENUS</div>
            <div>GLOBAL</div>
            <div>EXPORTS</div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── LAYER 3: Ship Image (Foreground) ─────────────────────────── */}
      <div className="absolute inset-0 z-20 pointer-events-none" aria-hidden="true">
        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: shipLoaded ? 1 : 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/hero-new.jpg"
            alt="Venus Global Exports large container cargo ship sailing the ocean for international food trade and logistics"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
            onLoad={() => setShipLoaded(true)}
          />
          {/* Gradient overlays for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5,14,27,0.65) 0%, rgba(5,14,27,0.15) 30%, rgba(5,14,27,0.25) 55%, rgba(5,14,27,0.95) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(5,14,27,0.75) 0%, rgba(5,14,27,0.4) 45%, transparent 70%, rgba(5,14,27,0.4) 100%)",
            }}
          />
        </motion.div>
      </div>

      {/* ── LAYER 4: Hero Content ─────────────────────────────────────── */}
      <div className="relative z-30 flex flex-col justify-end min-h-screen pb-20 pt-28 lg:pt-32">
        <div className="container-site">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15, delayChildren: 0.7 } },
            }}
          >
            {/* Eyebrow */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="inline-flex items-center gap-2 mb-5"
            >
              <span className="w-6 h-px bg-[#3D9148]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white drop-shadow-md">
                Premium Food Exports • Sea & Air Freight
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-5"
            >
              From Our Land.
              <br />
              <span className="text-[#7DD3FC]">To The World.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg drop-shadow-md"
            >
              Connecting quality food products with global markets.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <Link
                href="/products"
                id="hero-explore-products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B65B2] text-white font-semibold text-sm hover:bg-[#1a7dd4] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1628]"
              >
                Explore Products
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </Link>

              <Link
                href="/contact"
                id="hero-contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1628]"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Bottom indicators */}
          <motion.div
            className="mt-16 flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="w-px h-10 bg-white/20" aria-hidden="true" />
            {[
              { label: "Rice, Coconut & More", icon: "🌾" },
              { label: "Global Export", icon: "🌍" },
              { label: "Quality First", icon: "✓" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-sm text-slate-400" aria-hidden="true">{item.icon}</span>
                <span className="text-xs text-slate-400 font-medium">{item.label}</span>
                {i < 2 && <div className="w-px h-4 bg-white/10 ml-4" aria-hidden="true" />}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
      </div>
    </section>
  );
}

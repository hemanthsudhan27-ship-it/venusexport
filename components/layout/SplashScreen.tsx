"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [phase, setPhase] = useState<"locked" | "unlocking" | "opening" | "portal" | "done">("locked");

  const finishSplash = useCallback(() => {
    setPhase("done");
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem("venus_splash_seen", "true");
      } catch {
        // Ignore private browsing restrictions
      }
    }
    setTimeout(() => {
      setIsVisible(false);
    }, 450);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const forceSplash = urlParams.get("splash") === "1";
      const hasSeen = sessionStorage.getItem("venus_splash_seen");

      if (hasSeen && !forceSplash) {
        setIsVisible(false);
        return;
      }
    }

    // Phase 1: Unlock handles & seal at 400ms
    const t1 = setTimeout(() => {
      setPhase("unlocking");
    }, 400);

    // Phase 2: Swing 3D doors open at 750ms
    const t2 = setTimeout(() => {
      setPhase("opening");
    }, 750);

    // Phase 3: Portal zoom & logo reveal transition at 2300ms
    const t3 = setTimeout(() => {
      setPhase("portal");
    }, 2300);

    // Phase 4: Complete transition at 2850ms
    const t4 = setTimeout(() => {
      finishSplash();
    }, 2850);

    // Keyboard listener to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        finishSplash();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [finishSplash]);

  if (!isVisible) return null;

  const isUnlocked = phase !== "locked";
  const isOpen = phase === "opening" || phase === "portal" || phase === "done";
  const isPortal = phase === "portal" || phase === "done";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="shipping-container-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={finishSplash}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#03070C] overflow-hidden select-none cursor-pointer"
          style={{ perspective: "1400px" }}
          aria-label="Venus Export Loading Screen — Click to skip"
        >
          {/* ── Atmospheric Maritime Backdrop ── */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Dock floodlight radial ambient glow */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-[#1E4D38]/30 via-[#D7A03F]/10 to-transparent rounded-full blur-[140px]" />
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0A2218]/40 rounded-full blur-[120px]" />

            {/* Industrial geometric blueprint grid lines */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Terminal telemetry tags */}
            <div className="absolute top-6 left-6 hidden sm:flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase font-mono text-white/40">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>PORT JNPT (MUMBAI) • BERTH 04 • EXPORT CONSIGNMENT</span>
            </div>
            <div className="absolute top-6 right-6 hidden sm:flex items-center gap-2 text-[10px] tracking-[0.16em] uppercase font-mono text-white/40">
              <span>ISO 1496/1 • CARGO TYPE: 45G1</span>
            </div>
          </div>

          {/* ── SKIP BUTTON BADGE ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-6 z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-white/80 text-xs font-medium tracking-wide transition-colors"
          >
            <span>Tap anywhere to enter</span>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </motion.div>

          {/* ── 3D CONTAINER RIG ── */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{
              scale: isPortal ? 1.15 : 1,
              opacity: isPortal ? 0 : 1,
            }}
            transition={{ duration: isPortal ? 0.65 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[92vw] max-w-[440px] sm:max-w-[560px] md:max-w-[640px] max-h-[82vh] aspect-[1/1.18] rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-visible"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* ── INTERIOR CARGO BAY & LOGO (Behind the doors) ── */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020B07] via-[#041910] to-[#010805] rounded-2xl flex flex-col items-center justify-center p-4 sm:p-8 md:p-10 overflow-hidden border border-[#D7A03F]/20">
              {/* Wooden container plank floor perspective */}
              <div
                className="absolute inset-x-0 bottom-0 h-1/3 opacity-25"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, #4A3319 0 28px, #362410 28px 30px, #2A1A0B 30px 32px)",
                  transform: "perspective(300px) rotateX(45deg)",
                  transformOrigin: "bottom center",
                }}
              />

              {/* Luminous Cargo Light Burst */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  scale: isOpen ? 1.25 : 0.6,
                }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(235, 174, 47, 0.45) 0%, rgba(16, 185, 129, 0.25) 35%, transparent 70%)",
                }}
              />

              {/* Floating dust / grain particles in light rays */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <span className="absolute top-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#D7A03F] animate-ping" />
                <span className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-white animate-pulse" />
                <span className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
              </div>

              {/* Official Brand Identity Revealed Inside Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.82, y: 18 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  scale: isOpen ? 1 : 0.82,
                  y: isOpen ? 0 : 18,
                }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col items-center text-center max-w-md w-full px-2"
              >
                {/* Official Vector Logo with luminous halo */}
                <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-3 sm:mb-4 filter drop-shadow-[0_12px_40px_rgba(215,160,63,0.45)]">
                  {/* Subtle backlight disc to illuminate dark logo elements */}
                  <div className="absolute inset-2 rounded-full bg-radial from-white/15 via-[#D7A03F]/10 to-transparent blur-xl pointer-events-none" />
                  <Image
                    src="/logo/logo.svg"
                    alt="Venus Export Official Logo"
                    fill
                    priority
                    unoptimized
                    className="object-contain relative z-10"
                  />
                </div>

                {/* Tagline & Cargo Verification Status */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 8 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-2 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span className="text-[9px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#D7A03F]">
                      Certified Agro-Export Cargo
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base font-semibold text-white tracking-widest uppercase">
                    From Our Land. To The World.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* ── OUTER HEAVY CONTAINER STEEL FRAME ── */}
            <div className="absolute -inset-3 sm:-inset-4 pointer-events-none rounded-2xl border-[8px] sm:border-[12px] border-[#0A1710] shadow-[inset_0_2px_8px_rgba(255,255,255,0.1),0_20px_60px_rgba(0,0,0,0.9)] z-20">
              {/* Corner Castings (ISO 1161 twist-lock fittings) */}
              {/* Top Left */}
              <div className="absolute -top-2 -left-2 w-9 h-9 sm:w-12 sm:h-12 bg-[#12281C] border-2 border-[#1E432F] rounded-md flex items-center justify-center shadow-lg">
                <div className="w-4 h-6 sm:w-5 sm:h-7 rounded-full bg-[#030805] border border-white/20" />
              </div>
              {/* Top Right */}
              <div className="absolute -top-2 -right-2 w-9 h-9 sm:w-12 sm:h-12 bg-[#12281C] border-2 border-[#1E432F] rounded-md flex items-center justify-center shadow-lg">
                <div className="w-4 h-6 sm:w-5 sm:h-7 rounded-full bg-[#030805] border border-white/20" />
              </div>
              {/* Bottom Left */}
              <div className="absolute -bottom-2 -left-2 w-9 h-9 sm:w-12 sm:h-12 bg-[#12281C] border-2 border-[#1E432F] rounded-md flex items-center justify-center shadow-lg">
                <div className="w-4 h-6 sm:w-5 sm:h-7 rounded-full bg-[#030805] border border-white/20" />
              </div>
              {/* Bottom Right */}
              <div className="absolute -bottom-2 -right-2 w-9 h-9 sm:w-12 sm:h-12 bg-[#12281C] border-2 border-[#1E432F] rounded-md flex items-center justify-center shadow-lg">
                <div className="w-4 h-6 sm:w-5 sm:h-7 rounded-full bg-[#030805] border border-white/20" />
              </div>

              {/* Header Hazard Caution Strip */}
              <div
                className="absolute top-0 inset-x-9 sm:inset-x-12 h-3 sm:h-4 opacity-75"
                style={{
                  background:
                    "repeating-linear-gradient(-45deg, #E5A823 0 10px, #181E24 10px 20px)",
                }}
              />
            </div>

            {/* ── 3D DOORS CONTAINER (Hinged left & right) ── */}
            <div
              className="absolute inset-0 z-10 flex w-full h-full"
              style={{ perspective: "1200px" }}
            >
              {/* ══════════════ LEFT DOOR ══════════════ */}
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isOpen ? -108 : 0 }}
                transition={{ duration: 1.15, ease: [0.35, 0.05, 0, 1] }}
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                }}
                className="relative w-1/2 h-full bg-[#0E281A] border-r border-[#040C07] overflow-hidden shadow-2xl"
              >
                {/* Corrugated Vertical Ribs (Realistic 3D Metal Gradients) */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg, #091A11 0px, #0F2C1D 10px, #19462E 22px, #266343 28px, #133623 34px, #091A11 44px)",
                  }}
                />

                {/* Industrial Weathering & Rust Shadow Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30 pointer-events-none" />

                {/* Outer EPDM Rubber Gasket Frame with Rivets */}
                <div className="absolute inset-y-0 left-0 w-3 bg-[#0A0F0D] border-r border-white/10" />

                {/* 4 Heavy Industrial Steel Hinges */}
                {[12, 38, 64, 88].map((pct, idx) => (
                  <div
                    key={idx}
                    className="absolute left-0 w-5 h-8 bg-[#2A3731] border border-white/20 rounded-r-md shadow-md z-30"
                    style={{ top: `${pct}%`, transform: "translateY(-50%)" }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white/40 mx-auto mt-1" />
                    <div className="w-2 h-2 rounded-full bg-white/40 mx-auto mt-2" />
                  </div>
                ))}

                {/* Dual Vertical Steel Locking Rods (Left Door) */}
                <div className="absolute inset-y-0 left-[28%] w-3 bg-gradient-to-r from-[#596561] via-[#D3DDD9] to-[#2B3532] shadow-[2px_0_6px_rgba(0,0,0,0.7)] z-20">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#3B4642] border border-white/20 rounded-sm" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#3B4642] border border-white/20 rounded-sm" />
                </div>
                <div className="absolute inset-y-0 left-[72%] w-3 bg-gradient-to-r from-[#596561] via-[#D3DDD9] to-[#2B3532] shadow-[2px_0_6px_rgba(0,0,0,0.7)] z-20">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#3B4642] border border-white/20 rounded-sm" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#3B4642] border border-white/20 rounded-sm" />
                </div>

                {/* Left Door Cam Lock Handle */}
                <motion.div
                  initial={{ rotateZ: 0 }}
                  animate={{ rotateZ: isUnlocked ? -40 : 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{ transformOrigin: "right center" }}
                  className="absolute top-[60%] left-[36%] sm:left-[48%] w-16 sm:w-22 h-3 sm:h-4 bg-gradient-to-r from-[#E5A823] to-[#8F6612] rounded-full border border-black/40 shadow-xl z-30 flex items-center px-1.5 sm:px-2"
                >
                  <span className="text-[7px] sm:text-[8px] font-mono font-bold text-black tracking-widest">LATCH</span>
                </motion.div>

                {/* Stenciled Left Door Brand Markings */}
                <div className="relative z-10 p-3 xs:p-4 sm:p-6 flex flex-col justify-between h-full font-mono text-white/70 select-none">
                  <div>
                    <div className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-1 bg-black/40 border border-white/20 rounded text-[8px] sm:text-xs font-bold tracking-widest text-[#E5A823] mb-2 sm:mb-3">
                      VE-CARGO-IN
                    </div>
                    <h3 className="text-sm xs:text-base sm:text-xl md:text-2xl font-black text-white/90 tracking-tighter uppercase leading-tight">
                      VENUS EXPORT
                    </h3>
                    <p className="text-[8px] sm:text-[11px] text-[#A3C7B6] tracking-wider uppercase mt-0.5 sm:mt-1">
                      Agro Commodities Logistics
                    </p>
                  </div>

                  {/* Stenciled Quality Stamp Badge */}
                  <div className="my-auto py-2 sm:py-4">
                    <div className="w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 rounded-full border-2 border-dashed border-[#D7A03F]/50 flex flex-col items-center justify-center text-center p-1 sm:p-2 rotate-[-8deg] bg-black/20">
                      <span className="text-[7px] sm:text-[9px] font-bold text-[#D7A03F] uppercase tracking-wider">
                        APEDA / FSSAI
                      </span>
                      <span className="text-[9px] sm:text-xs font-extrabold text-white">
                        EXPORT
                      </span>
                      <span className="text-[6px] sm:text-[7px] text-[#D7A03F] uppercase tracking-widest mt-0.5">
                        INSPECTED
                      </span>
                    </div>
                  </div>

                  {/* Cold Chain Specs */}
                  <div className="space-y-0.5 sm:space-y-1 text-[7px] sm:text-[10px] text-white/50 border-t border-white/10 pt-2 sm:pt-3">
                    <p>REEFER / TEMP: +4°C</p>
                    <p>ORIGIN: REPUBLIC OF INDIA</p>
                  </div>
                </div>
              </motion.div>

              {/* ══════════════ RIGHT DOOR ══════════════ */}
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isOpen ? 108 : 0 }}
                transition={{ duration: 1.15, ease: [0.35, 0.05, 0, 1] }}
                style={{
                  transformOrigin: "right center",
                  transformStyle: "preserve-3d",
                }}
                className="relative w-1/2 h-full bg-[#0E281A] border-l border-[#19462E] overflow-hidden shadow-2xl"
              >
                {/* Corrugated Vertical Ribs (Matching) */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "repeating-linear-gradient(90deg, #091A11 0px, #0F2C1D 10px, #19462E 22px, #266343 28px, #133623 34px, #091A11 44px)",
                  }}
                />

                {/* Overlap Weather Sealing Flange (Center seam cover) */}
                <div className="absolute inset-y-0 left-0 w-3 bg-[#08150E] border-r border-[#2C6E4A] shadow-md z-20" />

                {/* Weathering & Shadow Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-black/30 pointer-events-none" />

                {/* 4 Heavy Hinges (Right Edge) */}
                {[12, 38, 64, 88].map((pct, idx) => (
                  <div
                    key={idx}
                    className="absolute right-0 w-5 h-8 bg-[#2A3731] border border-white/20 rounded-l-md shadow-md z-30"
                    style={{ top: `${pct}%`, transform: "translateY(-50%)" }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white/40 mx-auto mt-1" />
                    <div className="w-2 h-2 rounded-full bg-white/40 mx-auto mt-2" />
                  </div>
                ))}

                {/* Dual Vertical Steel Locking Rods (Right Door) */}
                <div className="absolute inset-y-0 left-[28%] w-3 bg-gradient-to-r from-[#596561] via-[#D3DDD9] to-[#2B3532] shadow-[2px_0_6px_rgba(0,0,0,0.7)] z-20">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#3B4642] border border-white/20 rounded-sm" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#3B4642] border border-white/20 rounded-sm" />
                </div>
                <div className="absolute inset-y-0 left-[72%] w-3 bg-gradient-to-r from-[#596561] via-[#D3DDD9] to-[#2B3532] shadow-[2px_0_6px_rgba(0,0,0,0.7)] z-20">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#3B4642] border border-white/20 rounded-sm" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#3B4642] border border-white/20 rounded-sm" />
                </div>

                {/* Right Door Cam Lock Handle */}
                <motion.div
                  initial={{ rotateZ: 0 }}
                  animate={{ rotateZ: isUnlocked ? 40 : 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{ transformOrigin: "left center" }}
                  className="absolute top-[60%] left-[24%] sm:left-[30%] w-16 sm:w-22 h-3 sm:h-4 bg-gradient-to-r from-[#8F6612] to-[#E5A823] rounded-full border border-black/40 shadow-xl z-30 flex items-center justify-end px-1.5 sm:px-2"
                >
                  <span className="text-[7px] sm:text-[8px] font-mono font-bold text-black tracking-widest">LOCK</span>
                </motion.div>

                {/* Yellow Customs Bolt Tamper-Evident Seal Tag */}
                <motion.div
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{
                    opacity: isUnlocked ? 0 : 1,
                    scale: isUnlocked ? 1.4 : 1,
                  }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-[57%] left-[12%] sm:left-[16%] z-40 bg-[#FFE500] text-[#0A0D0B] font-mono font-extrabold text-[6px] sm:text-[8px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg border border-black/40 flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                  <span>SEAL: VE-2026</span>
                </motion.div>

                {/* Stenciled Right Door Specifications Table */}
                <div className="relative z-10 p-3 xs:p-4 sm:p-6 flex flex-col justify-between h-full font-mono text-white/80 select-none">
                  {/* Container Identification Code Box */}
                  <div className="bg-black/50 border border-white/20 p-1.5 sm:p-2.5 rounded">
                    <div className="flex items-center justify-between text-[10px] sm:text-sm font-bold text-white tracking-widest">
                      <span>VEU</span>
                      <span className="text-[#E5A823]">784291 4</span>
                    </div>
                    <div className="flex items-center justify-between text-[7px] sm:text-[10px] text-white/50 tracking-wider mt-0.5">
                      <span>45G1</span>
                      <span>HIGH CUBE</span>
                    </div>
                  </div>

                  {/* Standard Maritime Weight Rating Stencil */}
                  <div className="space-y-0.5 sm:space-y-1 text-[7px] sm:text-[10px] bg-black/30 p-2 sm:p-2.5 rounded border border-white/10 text-white/70">
                    <div className="flex justify-between">
                      <span className="text-white/40">MAX GROSS</span>
                      <span className="font-semibold text-white">32,500 KG</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">TARE WT</span>
                      <span className="font-semibold text-white">3,800 KG</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">NET PAYLOAD</span>
                      <span className="font-semibold text-white">28,700 KG</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-1">
                      <span className="text-white/40">CUBE CAP.</span>
                      <span className="font-semibold text-[#E5A823]">76.4 CU.M</span>
                    </div>
                  </div>

                  {/* Certification Pills */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 text-[6px] sm:text-[9px] text-[#A3C7B6]">
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">FSSAI GRADE A</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">ISO 22000</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

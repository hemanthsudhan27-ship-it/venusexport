"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Venus Export — Minimalist White Shutter Splash Screen
 * 
 * - Pure, pristine white background (#FFFFFF)
 * - Zero decorative lines, grids, or borders
 * - Crisp centered brand logo
 * - Smooth typewriter reveal of "VENUS EXPORT" with a sleek cursor
 * - Clean subtitle: "PREMIUM FOOD EXPORTS • INDIA"
 * - Seamless white dual-shutter opening unveiling the landing page
 */

const BRAND_NAME = "VENUS EXPORT";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState<"enter" | "active" | "exit">("enter");
  const [typedText, setTypedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Trigger shutter opening
  const finishSplash = useCallback(() => {
    setPhase("exit");

    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem("venus_splash_seen", "true");
      } catch {
        // Safe fallback
      }
    }

    // Wait for the shutter animation (0.75s) to complete before unmounting
    setTimeout(() => {
      setIsVisible(false);
    }, 750);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    const forceSplash = urlParams.get("splash") === "1";
    const hasSeen = sessionStorage.getItem("venus_splash_seen");

    if (hasSeen && !forceSplash) {
      return;
    }

    setIsVisible(true);
    setPhase("active");

    // Prevent body scroll during splash
    document.body.style.overflow = "hidden";

    // Start typewriter at 250ms
    let charIndex = 0;
    const typeStartTimer = setTimeout(() => {
      const typeInterval = setInterval(() => {
        charIndex++;
        setTypedText(BRAND_NAME.slice(0, charIndex));

        if (charIndex >= BRAND_NAME.length) {
          clearInterval(typeInterval);
          setIsTypingDone(true);
        }
      }, 65); // 65ms per char: 12 chars = 780ms

      timerRef.current = typeInterval;
    }, 250);

    // Auto-dismiss at ~1.85s (snappy, professional)
    const autoDismissTimer = setTimeout(() => {
      finishSplash();
    }, 1850);

    // Instant bypass on keypress
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        finishSplash();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(typeStartTimer);
      clearTimeout(autoDismissTimer);
      if (timerRef.current) clearInterval(timerRef.current);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [finishSplash]);

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const isExiting = phase === "exit";
  const shutterEase = [0.76, 0, 0.24, 1] as const;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Venus Export Loading Screen — Tap or press Escape to skip"
      onClick={finishSplash}
      className="fixed inset-0 z-[99999] overflow-hidden select-none cursor-pointer"
    >
      {/* ══════════════════════════════════════════════════════════════
          TOP SHUTTER PANEL (Pure White, Slides UP)
          No lines, no borders, no patterns
      ══════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isExiting ? "-100%" : 0 }}
        transition={{ duration: 0.75, ease: shutterEase }}
        className="absolute top-0 inset-x-0 h-1/2 bg-white z-20 shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
      />

      {/* ══════════════════════════════════════════════════════════════
          BOTTOM SHUTTER PANEL (Pure White, Slides DOWN)
          No lines, no borders, no patterns
      ══════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isExiting ? "100%" : 0 }}
        transition={{ duration: 0.75, ease: shutterEase }}
        className="absolute bottom-0 inset-x-0 h-1/2 bg-white z-20 shadow-[0_-15px_40px_rgba(0,0,0,0.06)]"
      >
        {/* Subtle skip text at the bottom */}
        <div className="absolute bottom-7 inset-x-0 flex justify-center pointer-events-none">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ delay: 0.5 }}
            className="text-[11px] font-sans tracking-widest uppercase text-gray-400"
          >
            Click or press Esc to skip
          </motion.p>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════════
          CENTERPIECE: LOGO + TYPEWRITER + SUBTITLE
          Clean, minimal, luxury typography on pure white
      ══════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            key="white-splash-content"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.04,
              filter: "blur(4px)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none px-6 text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-6"
            >
              <Image
                src="/logo/logo.svg"
                alt="Venus Export Logo"
                fill
                priority
                unoptimized
                className="object-contain"
              />
            </motion.div>

            {/* Typewriter "VENUS EXPORT" */}
            <div className="flex items-center justify-center min-h-[40px] sm:min-h-[48px]">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-[0.22em] text-[#06265C]">
                {typedText}
              </h1>

              {/* Minimalist caret in brand crimson/navy */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.65,
                  ease: "linear",
                }}
                className="inline-block w-[3px] sm:w-[3.5px] h-6 sm:h-8 md:h-9 bg-[#C8102E] ml-1.5 sm:ml-2 rounded-full"
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isTypingDone ? 0.75 : 0.4 }}
              transition={{ duration: 0.35 }}
              className="mt-3 text-[11px] sm:text-xs font-medium tracking-[0.28em] text-[#4B5563] uppercase"
            >
              Premium Food Exports • India
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

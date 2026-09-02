"use client";

import { motion, type Variants } from "framer-motion";
import { viewportOptions } from "@/lib/animations";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className={`flex flex-col gap-3 ${alignClass} ${className}`}
    >
      {eyebrow && (
        <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${light ? "text-[#7DD3FC]" : "text-[#0B65B2]"}`}>
          {eyebrow}
        </p>
      )}
      {align === "center" && (
        <div className={`section-divider ${align === "center" ? "mx-auto" : ""}`} aria-hidden="true" />
      )}
      <h2 className={`font-bold text-balance leading-tight ${light ? "text-white" : "text-[#0A1628]"} text-3xl md:text-4xl lg:text-[2.75rem]`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base leading-relaxed max-w-2xl ${light ? "text-slate-300" : "text-[#64748B]"} ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import DottedWorldMap from "@/components/ui/DottedWorldMap";

const DESTINATIONS = [
  { name: "Middle East", regions: "UAE, Saudi Arabia, Oman", flag: "🇦🇪 🇸🇦" },
  { name: "Europe", regions: "UK, Netherlands, Germany", flag: "🇬🇧 🇳🇱" },
  { name: "Southeast Asia", regions: "Malaysia, Singapore", flag: "🇸🇬 🇲🇾" },
  { name: "North America", regions: "USA, Canada", flag: "🇺🇸 🇨🇦" },
  { name: "Africa", regions: "East & West Africa", flag: "🇰🇪 🇿🇦" },
];

export default function WorldwideReachPreview() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#060D15] relative overflow-hidden"
      aria-labelledby="worldwide-reach-preview-heading"
    >
      {/* Background glow and subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #D7A03F 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Luxury ambient radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#1E3A2B]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[400px] bg-[#D7A03F]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7A03F] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D7A03F]">
              International Logistics
            </span>
          </div>
          <h2
            id="worldwide-reach-preview-heading"
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            From India To The World
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Venus Export bridges Indian harvest excellence with international consumer markets through seamless multi-modal logistics and strict quality compliance.
          </p>
        </div>

        {/* World Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.8 }}
          className="relative rounded-[28px] border border-white/10 bg-white/[0.02] backdrop-blur-md p-6 lg:p-12 mb-12 shadow-2xl overflow-hidden"
        >
          {/* Subtle top edge gold highlight */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#D7A03F]/40 to-transparent" />

          {/* Dotted World Map */}
          <DottedWorldMap />

          {/* Map Legend */}
          <div className="mt-8 flex flex-wrap items-center gap-6 justify-center" aria-label="Map legend">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-3 h-3 rounded-full bg-[#D7A03F] shadow-[0_0_8px_#D7A03F]" aria-hidden="true" />
              <span className="text-xs font-semibold text-slate-200">Origin: India (Export Hub)</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" aria-hidden="true" />
              <span className="text-xs font-semibold text-slate-200">Active Export Destinations</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="w-2.5 h-0.5 bg-[#D7A03F]" />
              <span className="text-xs font-semibold text-slate-400">Sea & Air Corridors</span>
            </div>
          </div>
        </motion.div>

        {/* Destination Region Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-14"
          role="list"
          aria-label="Export destination regions"
        >
          {DESTINATIONS.map((dest) => (
            <motion.div
              key={dest.name}
              variants={fadeInUp}
              role="listitem"
              className="group flex flex-col justify-between bg-white/[0.04] border border-white/10 hover:border-[#D7A03F]/50 hover:bg-white/[0.07] transition-all duration-300 rounded-2xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">{dest.flag}</span>
                <span className="w-2 h-2 rounded-full bg-[#10B981] group-hover:shadow-[0_0_6px_#10B981] transition-shadow" />
              </div>
              <div>
                <p className="text-sm font-bold text-white group-hover:text-[#D7A03F] transition-colors">{dest.name}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{dest.regions}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Button */}
        <div className="text-center">
          <Link
            href="/worldwide-reach"
            id="worldwide-reach-preview-cta"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D7A03F] to-[#E5C06E] text-[#0A100D] font-bold text-sm hover:brightness-110 shadow-lg shadow-[#D7A03F]/20 hover:shadow-[#D7A03F]/35 transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A03F]"
          >
            Explore Worldwide Corridors & Port Hubs
            <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

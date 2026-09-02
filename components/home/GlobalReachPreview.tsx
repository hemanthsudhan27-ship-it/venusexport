"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import DottedWorldMap from "@/components/ui/DottedWorldMap";

const DESTINATIONS = [
  { name: "Middle East", regions: "UAE, Saudi Arabia, Oman" },
  { name: "Europe", regions: "UK, Netherlands, Germany" },
  { name: "Southeast Asia", regions: "Malaysia, Singapore" },
  { name: "North America", regions: "USA, Canada" },
  { name: "Africa", regions: "East & West Africa" },
];

export default function GlobalReachPreview() {
  return (
    <section
      className="py-20 lg:py-28 bg-[#040B16] relative overflow-hidden"
      aria-labelledby="global-reach-preview-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blue Ambient Glow (like the reference image) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#0B65B2]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-site relative z-10">
        <SectionHeading
          eyebrow="Global Reach"
          title="From India To The World"
          subtitle="Venus Global Exports connects India's finest produce with international markets. Our export network is growing to reach importers and buyers globally."
          light
          className="mb-14 lg:mb-18"
        />

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-6 lg:p-10 mb-12"
        >
          {/* Dotted World Map Component */}
          <DottedWorldMap />

          {/* Map Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-4 justify-center" aria-label="Map legend">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#0B65B2]" aria-hidden="true" />
              <span className="text-xs text-slate-400">Origin: India</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#3D9148]" aria-hidden="true" />
              <span className="text-xs text-slate-400">Export Destinations</span>
            </div>
          </div>
        </motion.div>

        {/* Destination Regions */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12"
          role="list"
          aria-label="Export destination regions"
        >
          {DESTINATIONS.map((dest) => (
            <motion.div
              key={dest.name}
              variants={fadeInUp}
              role="listitem"
              className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#3D9148] flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-white">{dest.name}</p>
                <p className="text-[10px] text-slate-400">{dest.regions}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href="/global-reach"
            id="global-reach-preview-cta"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B65B2] text-white font-semibold text-sm hover:bg-[#1a7dd4] transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1628]"
          >
            Explore Our Global Reach
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

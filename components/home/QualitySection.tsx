"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, viewportOptions } from "@/lib/animations";

const CERTIFICATIONS = [
  {
    id: 1,
    title: "FSSAI Certified",
    subtitle: "Food Safety & Standards Authority",
    body: "Fully compliant with rigorous Indian and international food safety benchmarks for export commodities.",
    badge: "Government of India",
  },
  {
    id: 2,
    title: "APEDA Registered",
    subtitle: "Agricultural Export Authority",
    body: "Officially registered and recognized exporter of scheduled premium agro-produce to worldwide markets.",
    badge: "Official Exporter",
  },
  {
    id: 3,
    title: "ISO 22000 Compliant",
    subtitle: "Food Safety Management System",
    body: "Adhering to world-class food safety protocols across processing, handling, storage, and dispatch.",
    badge: "International Standard",
  },
];

const PILLARS = [
  { label: "Origin Verification", desc: "Traceable single-origin crops directly from verified farms", icon: "🌱" },
  { label: "Moisture & Purity Testing", desc: "Laboratory-tested for purity, moisture & aroma parameters", icon: "🔬" },
  { label: "Hygienic Sorting", desc: "Automated cleaning, grading and vacuum sealing protocols", icon: "✨" },
  { label: "Tamper-Evident Packing", desc: "High-barrier packaging certified for oceanic & air transit", icon: "📦" },
];

export default function QualitySection() {
  return (
    <section className="py-24 lg:py-32 bg-[#091017] relative overflow-hidden" aria-labelledby="quality-heading">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D7A03F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-4 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7A03F]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D7A03F]">
              Quality Assurance
            </span>
          </div>
          <h2
            id="quality-heading"
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            International Quality Standards
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Quality is not an inspection checkpoint at Venus Global Exports — it is the cornerstone of our entire supply chain.
          </p>
        </div>

        {/* Certifications 3-Card Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14"
          role="list"
          aria-label="Quality certifications"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              role="listitem"
              className="group relative rounded-3xl p-8 bg-white/[0.03] border border-white/10 hover:border-[#D7A03F]/60 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D7A03F] group-hover:scale-105 group-hover:border-[#D7A03F]/40 transition-all duration-300 shadow-lg">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D7A03F] bg-[#D7A03F]/10 px-3 py-1 rounded-full border border-[#D7A03F]/20">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D7A03F] transition-colors">{cert.title}</h3>
                <p className="text-xs text-slate-400 font-medium mb-3">{cert.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed">{cert.body}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#10B981] font-semibold">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022z"/>
                </svg>
                Verified & Validated Batch Testing
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quality Pillars Bento */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 lg:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {PILLARS.map((item, i) => (
            <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="text-3xl mb-1" aria-hidden="true">{item.icon}</span>
              <p className="text-base font-bold text-white">{item.label}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Button */}
        <div className="text-center">
          <Link
            href="/quality"
            id="quality-preview-cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[#D7A03F] text-[#D7A03F] font-bold text-sm hover:bg-[#D7A03F] hover:text-[#091017] transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A03F]"
          >
            Review Detailed Quality Protocols
            <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

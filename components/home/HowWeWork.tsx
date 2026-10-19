"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOptions } from "@/lib/animations";

const STEPS = [
  {
    number: "01",
    title: "Direct Farm Sourcing",
    description: "Partnering with certified farming cooperatives across India's most fertile agricultural belts for peak freshness.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Quality Lab Inspection",
    description: "Every shipment undergoes multi-point inspection to meet APEDA, FSSAI, and international food safety thresholds.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m9 12 2 2 4-4"/>
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Export-Grade Packaging",
    description: "Processed and sealed in moisture-controlled, food-safe packaging customized to international shelf-life standards.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m7.5 4.27 9 5.15"/>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
        <path d="m3.3 7 8.7 5 8.7-5"/>
        <path d="M12 22V12"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Multi-Modal Freight",
    description: "Full container loads (FCL), consolidated shipments, and air cargo with complete phytosanitary documentation.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Port Delivery & Support",
    description: "Seamless customs clearance and on-time arrival at the designated international destination port with live status tracking.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
        <path d="M16.24 7.76A6 6 0 0 1 18 12a6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 1.76-4.24"/>
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 lg:py-32 bg-[#F7F9FB] relative overflow-hidden" aria-labelledby="how-we-work-heading">
      <div className="container-site">
        <div className="text-center mb-16 lg:mb-22">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/10 border border-[#1E3A2B]/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E3A2B]">
              Execution Framework
            </span>
          </div>
          <h2
            id="how-we-work-heading"
            className="text-3xl md:text-5xl font-extrabold text-[#0D1821] tracking-tight leading-tight"
          >
            How We Export
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#5A6A7D] max-w-2xl mx-auto leading-relaxed">
            From India&apos;s fertile harvest grounds to international ports — a streamlined, transparent 5-stage export pipeline.
          </p>
        </div>

        {/* Desktop Pipeline */}
        <div className="hidden lg:block relative" role="list" aria-label="Export process steps">
          {/* Connecting line */}
          <div
            className="absolute top-12 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D7A03F]/20 via-[#D7A03F] to-[#D7A03F]/20 z-0"
            aria-hidden="true"
            style={{ left: "10%", right: "10%" }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-5 gap-5 relative z-10"
          >
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                role="listitem"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="group flex flex-col items-center text-center bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#D7A03F]/50 transition-all duration-300"
              >
                {/* Step badge & icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#0D1821] text-[#D7A03F] flex items-center justify-center mb-5 shadow-md group-hover:scale-105 group-hover:bg-[#C8102E] group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>

                <span className="text-xs font-bold tracking-[0.2em] text-[#D7A03F] mb-1">STEP {step.number}</span>
                <h3 className="text-base font-extrabold text-[#0D1821] mb-2 leading-snug">{step.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile / Tablet Pipeline */}
        <div className="lg:hidden" role="list" aria-label="Export process steps">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-4"
          >
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                role="listitem"
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="flex gap-4 items-start bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0D1821] text-[#D7A03F] flex items-center justify-center flex-shrink-0 shadow-sm">
                  {step.icon}
                </div>

                <div className="pt-0.5">
                  <span className="text-[11px] font-bold tracking-[0.15em] text-[#D7A03F]">STEP {step.number}</span>
                  <h3 className="text-base font-bold text-[#0D1821] mb-1">{step.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOptions } from "@/lib/animations";

const STEPS = [
  {
    number: "01",
    title: "Source",
    description: "We work directly with trusted farmers and agricultural cooperatives across India to source premium food products.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10A10 10 0 0 1 2 12 10 10 0 0 1 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Quality Check",
    description: "Each product batch is carefully inspected and assessed to meet international food quality standards before processing.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="m9 12 2 2 4-4"/>
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Process & Pack",
    description: "Products are processed, cleaned, and packed in export-standard packaging under hygienic controlled conditions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="m7.5 4.27 9 5.15"/>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
        <path d="m3.3 7 8.7 5 8.7-5"/>
        <path d="M12 22V12"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Export (Sea & Air)",
    description: "We handle all export documentation, customs clearance, and international shipping logistics (both sea freight and air cargo) to ensure smooth delivery.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Deliver",
    description: "Your order arrives at the destination port safely, on schedule, and with full transparency throughout the journey.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
        <path d="M16.24 7.76A6 6 0 0 1 18 12a6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 1.76-4.24"/>
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F8FC]" aria-labelledby="how-we-work-heading">
      <div className="container-site">
        <div className="text-center mb-14 lg:mb-20">
          <div className="section-divider mx-auto mb-4" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0B65B2] mb-3">Our Process</p>
          <h2
            id="how-we-work-heading"
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0A1628] leading-tight"
          >
            How We Work
          </h2>
          <p className="mt-4 text-base text-[#64748B] max-w-xl mx-auto leading-relaxed">
            From farm to your doorstep — a simple, transparent, and reliable process.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative" role="list" aria-label="Export process steps">
          {/* Connecting line */}
          <div
            className="absolute top-10 left-0 right-0 h-px bg-[#E2EBF5] z-0"
            aria-hidden="true"
            style={{ left: "10%", right: "10%" }}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-5 gap-4 relative z-10"
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
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="w-20 h-20 rounded-2xl bg-white border border-[#E2EBF5] flex items-center justify-center text-[#0B65B2] mb-4 shadow-sm group-hover:bg-[#0B65B2] group-hover:text-white group-hover:border-[#0B65B2] transition-all duration-300">
                  {step.icon}
                </div>

                <span className="text-xs font-semibold text-[#0B65B2] mb-1">{step.number}</span>
                <h3 className="text-base font-bold text-[#0A1628] mb-2">{step.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden" role="list" aria-label="Export process steps">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-[#E2EBF5]" aria-hidden="true" />

            <div className="space-y-8">
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
                  className="flex gap-5 items-start relative z-10"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-white border border-[#E2EBF5] flex items-center justify-center text-[#0B65B2] flex-shrink-0 shadow-sm">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-[#0B65B2]">{step.number}</span>
                    <h3 className="text-base font-bold text-[#0A1628] mb-1">{step.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

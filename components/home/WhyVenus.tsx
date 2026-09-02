"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, viewportOptions } from "@/lib/animations";

const PRINCIPLES = [
  {
    number: "01",
    title: "Quality",
    description:
      "Every product that carries the Venus Global Exports name undergoes rigorous quality assessment — from farm selection to final packaging.",
  },
  {
    number: "02",
    title: "Trusted Sourcing",
    description:
      "We work directly with responsible farmers and processors across India's most productive agricultural regions.",
  },
  {
    number: "03",
    title: "Global Reach (Sea & Air)",
    description:
      "With established logistics partnerships and expertise in both sea freight and air cargo, we ensure your products reach international destinations safely and on time.",
  },
  {
    number: "04",
    title: "Reliable Service",
    description:
      "We understand that global trade demands consistency. We are committed to delivering the same standard of excellence with every order.",
  },
];

export default function WhyVenus() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="why-venus-heading">
      <div className="container-site">
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="section-divider mb-4" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0B65B2] mb-3">
            Why Venus Global
          </p>
          <h2
            id="why-venus-heading"
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0A1628] leading-tight"
          >
            Built on Four
            <br />
            Core Principles
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          role="list"
        >
          {PRINCIPLES.map((p) => (
            <motion.div
              key={p.number}
              variants={fadeInUp}
              role="listitem"
              className="group flex gap-6 items-start"
            >
              {/* Number */}
              <div className="flex-shrink-0 pt-1">
                <span
                  className="block text-5xl font-extrabold leading-none tracking-tighter text-[#E2EBF5] group-hover:text-[#0B65B2] transition-colors duration-300"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                  aria-hidden="true"
                >
                  {p.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <div className="w-8 h-px bg-[#0B65B2] mb-3 group-hover:w-12 transition-all duration-300" aria-hidden="true" />
                <h3 className="text-xl font-bold text-[#0A1628] mb-2">{p.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

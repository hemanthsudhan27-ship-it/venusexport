"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, viewportOptions } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";

const CERTIFICATIONS = [
  {
    id: 1,
    title: "FSSAI Certified",
    body: "Fully compliant with the Food Safety and Standards Authority of India.",
  },
  {
    id: 2,
    title: "APEDA Registered",
    body: "Registered exporter of scheduled agricultural products under Govt. of India.",
  },
  {
    id: 3,
    title: "ISO 22000",
    body: "Internationally certified for comprehensive Food Safety Management Systems.",
  },
];

export default function QualitySection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="quality-heading">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Quality"
          title="Quality You Can Trust"
          subtitle="At Venus Global Exports, quality is not an afterthought — it is the foundation of everything we do. From farm selection to export packaging, every step meets the highest international standards."
          className="mb-14 lg:mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          role="list"
          aria-label="Quality certifications"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              role="listitem"
              className="relative border border-[#E2EBF5] hover:border-[#0B65B2] transition-colors duration-200 rounded-2xl p-6 bg-white"
            >

              {/* Cert Icon placeholder */}
              <div className="w-14 h-14 rounded-xl bg-white border border-[#E2EBF5] flex items-center justify-center mb-4" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B0C8E8" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>

              <h3 className="text-base font-bold text-[#0A1628] mb-2">{cert.title}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{cert.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quality pillars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6 }}
          className="bg-[#F5F8FC] rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mb-10"
        >
          {[
            { label: "Farm Selection", icon: "🌱" },
            { label: "Quality Inspection", icon: "🔍" },
            { label: "Hygenic Processing", icon: "✨" },
            { label: "Export Packaging", icon: "📦" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <span className="text-2xl" aria-hidden="true">{item.icon}</span>
              <p className="text-sm font-semibold text-[#0A1628]">{item.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href="/quality"
            id="quality-preview-cta"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#0B65B2] text-[#0B65B2] font-semibold text-sm hover:bg-[#0B65B2] hover:text-white transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B65B2] focus-visible:ring-offset-2"
          >
            Our Quality
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

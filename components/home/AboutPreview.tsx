"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, viewportOptions } from "@/lib/animations";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F8FC]" aria-labelledby="about-preview-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image Side */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-200">
              <Image
                src="/images/product-coconut.jpg"
                alt="Premium fresh Indian coconuts representing Venus Global Exports' high-quality agricultural sourcing and export standards"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(11,101,178,0.12) 0%, transparent 60%)" }}
                aria-hidden="true"
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              viewport={viewportOptions}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-4 -bottom-4 lg:-right-8 lg:-bottom-8 bg-white rounded-2xl p-5 shadow-xl border border-[#E2EBF5] max-w-[200px]"
              aria-hidden="true"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EBF3FC] flex items-center justify-center mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B65B2" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <p className="text-xs font-semibold text-[#0A1628] leading-snug">Export-Ready Products</p>
              <p className="text-xs text-[#64748B] mt-1 leading-relaxed">Sourced, packed, and shipped to global standards.</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="section-divider mb-4" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0B65B2] mb-3">
              About Us
            </p>

            <h2
              id="about-preview-heading"
              className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-5"
            >
              Connecting Quality
              <br />
              With The World
            </h2>

            <p className="text-base text-[#64748B] leading-relaxed mb-4">
              Venus Global Exports is an India-based food export company dedicated to bringing the finest agricultural products from Indian farms to international markets.
            </p>
            <p className="text-base text-[#64748B] leading-relaxed mb-8">
              We specialise in premium rice, coconut, vegetables, fruits, and spices — working directly with farmers and processors to ensure quality at every step of the supply chain.
            </p>

            {/* Values Preview */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Quality First", desc: "Every product is inspected to meet global standards." },
                { label: "Reliable Partner", desc: "Consistent supply chains built on trust." },
                { label: "Natural Origin", desc: "Sourced directly from Indian agricultural regions." },
                { label: "Global Reach", desc: "Connecting India's produce with the world." },
              ].map((v, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#EBF3FC] flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="#0B65B2">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A1628]">{v.label}</p>
                    <p className="text-xs text-[#64748B] leading-relaxed mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              id="about-preview-cta"
              className="inline-flex items-center gap-2 text-[#0B65B2] font-semibold text-sm hover:gap-3 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B65B2] rounded-lg"
              aria-label="Learn more about our story"
            >
              Our Story
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
              </svg>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

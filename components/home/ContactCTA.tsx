"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG, getWhatsAppUrl, getMailtoUrl } from "@/lib/config";
import { fadeInUp, viewportOptions } from "@/lib/animations";

export default function ContactCTA() {
  return (
    <section className="py-24 lg:py-32 bg-[#060D09] relative overflow-hidden" aria-labelledby="contact-cta-heading">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #D7A03F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#1E3A2B]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-site relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="relative max-w-4xl mx-auto rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 sm:p-12 lg:p-16 text-center shadow-2xl"
        >
          {/* Gold highlight accent line */}
          <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#D7A03F]/60 to-transparent" />

          {/* SLA Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D7A03F]">
              Direct Worldwide Procurement • 24h Turnaround
            </span>
          </motion.div>

          <motion.h2
            id="contact-cta-heading"
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6"
          >
            Looking For A Reliable <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D7A03F] via-[#F4E0A5] to-[#D7A03F]">
              Food Export Partner?
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-base md:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Connect with our trade desk today. We provide immediate FOB/CIF container quotations, product specifications, and custom packaging support.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={getWhatsAppUrl(
                "Hello Venus Export, I am interested in your export commodities and would like to request a quotation."
              )}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-cta-whatsapp"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1faa52] transition-all duration-300 shadow-lg shadow-[#25D366]/20 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Chat with us on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
              </svg>
              Direct WhatsApp Trade Desk
            </a>

            <a
              href={getMailtoUrl(
                "Export RFQ Inquiry — Venus Export",
                "Hello Venus Export Trade Desk,\n\nI am requesting a quotation for export commodities:\n\nProduct(s) of interest: \nEstimated Volume (MT / Containers): \nDestination Port (CIF / FOB): \nTarget Shipment Date: \n\nCompany Name: \nContact Person: \nCountry: "
              )}
              id="contact-cta-email"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/[0.08] border border-white/20 text-white font-bold text-sm hover:bg-white/[0.15] hover:border-[#D7A03F] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A03F]"
              aria-label="Send us an export RFQ email enquiry"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741z"/>
              </svg>
              Send Formal RFQ
            </a>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-8 text-xs text-slate-400">
            Or visit our{" "}
            <a href="/contact" className="text-[#D7A03F] underline underline-offset-4 hover:text-[#E5C06E]">
              Online Contact & Specification Form
            </a>{" "}
            for customized packing requests.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

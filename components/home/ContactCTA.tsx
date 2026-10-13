"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG, getWhatsAppUrl, getMailtoUrl } from "@/lib/config";
import { fadeInUp, viewportOptions } from "@/lib/animations";

export default function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#2E6B28] relative overflow-hidden" aria-labelledby="contact-cta-heading">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #fff 0%, transparent 50%), radial-gradient(circle at 80% 50%, #fff 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-site relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-green-200 mb-4"
          >
            Get In Touch
          </motion.p>

          <motion.h2
            id="contact-cta-heading"
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5"
          >
            Looking for a Reliable
            <br />
            Food Export Partner?
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-green-100 leading-relaxed mb-10">
            Let&apos;s connect and explore how we can bring quality products to your market.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={getWhatsAppUrl(
                "Hello Venus Global Exports, I am interested in your export products and would like to discuss."
              )}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-cta-whatsapp"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ab955] transition-all duration-200 group shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2E6B28]"
              aria-label="Chat with us on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
              </svg>
              WhatsApp Us
            </a>

            <a
              href={getMailtoUrl(
                "Export Enquiry — Venus Global Exports",
                "Hello,\n\nI am interested in your export products and would like to get more information.\n\nProduct(s) of interest: \nQuantity: \nDestination country: \n\nRegards,"
              )}
              id="contact-cta-email"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2E6B28]"
              aria-label="Send us an email enquiry"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741z"/>
              </svg>
              Send an Enquiry
            </a>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-6 text-sm text-green-200">
            Or visit our{" "}
            <a href="/contact" className="text-white underline underline-offset-4 hover:no-underline">
              Contact Page
            </a>{" "}
            to send a detailed enquiry form.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

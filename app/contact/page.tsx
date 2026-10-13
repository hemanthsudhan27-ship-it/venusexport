"use client";

import { useState } from "react";
import { SITE_CONFIG, getWhatsAppUrl, getMailtoUrl } from "@/lib/config";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOptions } from "@/lib/animations";

import PageHeader from "@/components/ui/PageHeader";

const PRODUCT_OPTIONS = [
  "Rice",
  "Coconut",
  "Vegetables",
  "Fruits",
  "Spices",
  "Multiple Products",
  "Other",
];

interface FormState {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  product: "",
  quantity: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // ⚠️ PLACEHOLDER — Connect this form to your backend or email service
    // For now, opens mailto as fallback
    const body = Object.entries(form)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    window.location.href = getMailtoUrl("Export Enquiry — Venus Global Exports", body);

    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <PageHeader
        title="Let's Start A Conversation"
        subtitle="Contact Us"
        description="We'd love to hear from you. Whether you're a buyer, importer, or want to learn more about our products — reach out."
        imageSrc="/images/hero-new.jpg"
      />

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Contact form and details">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#E8F4E6] flex items-center justify-center mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2E6B28" strokeWidth="2" aria-hidden="true">
                      <path d="m9 12 2 2 4-4"/>
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1A2E0A] mb-3">Enquiry Sent!</h2>
                  <p className="text-[#5A6B52] leading-relaxed max-w-sm">
                    Thank you for reaching out. We&apos;ll review your enquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setForm(INITIAL_STATE); setSubmitted(false); }}
                    className="mt-6 px-6 py-3 rounded-xl bg-[#2E6B28] text-white text-sm font-semibold hover:bg-[#1E4A1A] transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <form
                  id="enquiry-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  aria-label="Product enquiry form"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-[#1A2E0A] mb-1.5">
                        Full Name <span aria-hidden="true" className="text-[#2E6B28]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-[#D4E0CC] text-sm text-[#1A2E0A] placeholder-[#A8BEA0] focus:outline-none focus:border-[#2E6B28] focus:ring-2 focus:ring-[#2E6B28]/20 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-semibold text-[#1A2E0A] mb-1.5">
                        Company / Organisation
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="w-full px-4 py-3 rounded-xl border border-[#D4E0CC] text-sm text-[#1A2E0A] placeholder-[#A8BEA0] focus:outline-none focus:border-[#2E6B28] focus:ring-2 focus:ring-[#2E6B28]/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-country" className="block text-sm font-semibold text-[#1A2E0A] mb-1.5">
                        Country <span aria-hidden="true" className="text-[#2E6B28]">*</span>
                      </label>
                      <input
                        id="contact-country"
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        required
                        placeholder="Your country"
                        className="w-full px-4 py-3 rounded-xl border border-[#D4E0CC] text-sm text-[#1A2E0A] placeholder-[#A8BEA0] focus:outline-none focus:border-[#2E6B28] focus:ring-2 focus:ring-[#2E6B28]/20 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-[#1A2E0A] mb-1.5">
                        Email Address <span aria-hidden="true" className="text-[#2E6B28]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#D4E0CC] text-sm text-[#1A2E0A] placeholder-[#A8BEA0] focus:outline-none focus:border-[#2E6B28] focus:ring-2 focus:ring-[#2E6B28]/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-semibold text-[#1A2E0A] mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="w-full px-4 py-3 rounded-xl border border-[#D4E0CC] text-sm text-[#1A2E0A] placeholder-[#A8BEA0] focus:outline-none focus:border-[#2E6B28] focus:ring-2 focus:ring-[#2E6B28]/20 transition-all duration-200"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-product" className="block text-sm font-semibold text-[#1A2E0A] mb-1.5">
                        Product Interested In
                      </label>
                      <select
                        id="contact-product"
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#D4E0CC] text-sm text-[#1A2E0A] focus:outline-none focus:border-[#2E6B28] focus:ring-2 focus:ring-[#2E6B28]/20 transition-all duration-200 bg-white"
                      >
                        <option value="">Select a product</option>
                        {PRODUCT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-quantity" className="block text-sm font-semibold text-[#1A2E0A] mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        id="contact-quantity"
                        type="text"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 5 MT, 1 container"
                        className="w-full px-4 py-3 rounded-xl border border-[#D4E0CC] text-sm text-[#1A2E0A] placeholder-[#A8BEA0] focus:outline-none focus:border-[#2E6B28] focus:ring-2 focus:ring-[#2E6B28]/20 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-[#1A2E0A] mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your requirements, destination, or any questions you have..."
                      className="w-full px-4 py-3 rounded-xl border border-[#D4E0CC] text-sm text-[#1A2E0A] placeholder-[#A8BEA0] focus:outline-none focus:border-[#2E6B28] focus:ring-2 focus:ring-[#2E6B28]/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#2E6B28] text-white font-semibold text-sm hover:bg-[#1E4A1A] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E6B28] focus-visible:ring-offset-2"
                  >
                    {submitting ? "Sending Enquiry…" : "Send Enquiry"}
                  </button>

                  <p className="text-xs text-[#64748B]">
                    ⚠ This form currently opens your email client. To enable backend form submission, connect to your preferred email service.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#F3F7F0] rounded-2xl p-6 border border-[#D4E0CC]">
                <h2 className="text-base font-bold text-[#1A2E0A] mb-5">Contact Information</h2>
                <address className="not-italic space-y-4">
                  <div className="flex items-center gap-3 text-sm text-[#5A6B52]">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#D4E0CC] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="#2E6B28">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
                      </svg>
                    </div>
                    <span className="italic text-[#8FAB87]">Phone: To be updated</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#5A6B52]">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#D4E0CC] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="#2E6B28">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2z"/>
                      </svg>
                    </div>
                    <span className="italic text-[#8FAB87]">Email: To be updated</span>
                  </div>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-[#5A6B52] hover:text-[#25D366] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#D4E0CC] flex items-center justify-center flex-shrink-0 group-hover:border-[#25D366] transition-colors" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="#25D366">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326z"/>
                      </svg>
                    </div>
                    <span>WhatsApp</span>
                  </a>

                  <div className="flex items-start gap-3 text-sm text-[#5A6B52]">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#D4E0CC] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <svg width="12" height="14" viewBox="0 0 12 16" fill="#2E6B28">
                        <path d="M6 0C3.243 0 1 2.243 1 5c0 4.17 4.42 10.492 4.61 10.76a.5.5 0 0 0 .78 0C6.58 15.492 11 9.17 11 5c0-2.757-2.243-5-5-5m0 7.5A2.5 2.5 0 0 1 6 2.5a2.5 2.5 0 0 1 0 5"/>
                      </svg>
                    </div>
                    <span className="italic text-[#8FAB87]">Address: To be updated</span>
                  </div>
                </address>
              </div>

              {/* Quick WhatsApp */}
              <a
                href={getWhatsAppUrl("Hello, I would like to enquire about Venus Global Exports products.")}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-quick-whatsapp"
                className="flex items-center gap-3 w-full px-5 py-4 rounded-2xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ab955] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                aria-label="Chat on WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
                </svg>
                Chat on WhatsApp
              </a>

              <div className="bg-[#E8F4E6] rounded-2xl p-5 border border-[#B8D8B4]">
                <p className="text-xs font-semibold text-[#2E6B28] mb-2 uppercase tracking-wide">Response Time</p>
                <p className="text-sm text-[#5A6B52] leading-relaxed">
                  We aim to respond to all enquiries within 24 business hours. For urgent enquiries, please contact us directly via WhatsApp.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

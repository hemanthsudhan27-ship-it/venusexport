import type { Metadata } from "next";
import ContactCTA from "@/components/home/ContactCTA";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Learn about Venus Global Exports' quality commitment — from sourcing to packaging, we ensure every product meets international food safety standards.",
  alternates: { canonical: "/quality" },
};

const CERTIFICATIONS = [
  { id: 1, name: "FSSAI Certified", body: "Food Safety and Standards Authority of India", desc: "Ensures all our food products are safe, hygienic, and adhere to strict Indian quality standards." },
  { id: 2, name: "APEDA Registered", body: "Govt. of India", desc: "Registered for the export of scheduled agricultural products, ensuring global compliance." },
  { id: 3, name: "ISO 22000", body: "International Organization for Standardization", desc: "Certified for Food Safety Management Systems, guaranteeing safe handling across our supply chain." },
];

const QUALITY_PILLARS = [
  {
    title: "Farm Selection",
    description: "We partner exclusively with certified, sustainable farms. Each supplier undergoes a rigorous audit of their agricultural practices, soil health, and water quality before onboarding.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 22c-4.97 0-9-4.03-9-9V5l9-3 9 3v8c0 4.97-4.03 9-9 9z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: "Quality Inspection",
    description: "Our dedicated QA teams conduct multi-stage inspections. Products are graded for size, color, moisture content, and nutritional value directly at the procurement stage.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
        <path d="m8 11 2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: "Hygienic Processing",
    description: "All sorting, cleaning, and processing takes place in modern, climate-controlled facilities adhering to the highest international hygiene and sanitation protocols.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: "Export Packaging",
    description: "We use food-grade, export-compliant packaging designed to preserve freshness, prevent contamination, and withstand the rigors of international shipping.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="m7.5 4.27 9 5.15"/>
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
        <path d="m3.3 7 8.7 5 8.7-5"/>
        <path d="M12 22V12"/>
      </svg>
    ),
  },
  {
    title: "Food Safety",
    description: "Our operations strictly adhere to HACCP and ISO 22000 standards. We conduct regular microbial and chemical testing to ensure zero contamination.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 22c4.97 0 9-4.03 9-9S16.97 4 12 4 3 8.03 3 13s4.03 9 9 9z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: "Certifications",
    description: "Venus Global Exports holds major industry certifications including FSSAI, APEDA, and ISO, giving our global buyers complete confidence in our products.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
    ),
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHeader
        title="Uncompromising Standards"
        subtitle="Quality Assurance"
        description="At Venus Global Exports, quality is non-negotiable. Every shipment is a promise of freshness, safety, and excellence."
        imageSrc="/images/product-rice.jpg"
      />

      {/* Quality Promise */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="quality-promise-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="section-divider mb-4" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0B65B2] mb-3">Our Promise</p>
              <h2 id="quality-promise-heading" className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-5">
                The Venus Quality Promise
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-4">
                At Venus Global Exports, we believe that the foundation of a successful global food business is built on uncompromising trust. Our quality promise is simple: we never export a product that we wouldn't proudly serve to our own families. Every grain, fruit, vegetable, and spice that carries the Venus name represents the absolute pinnacle of Indian agriculture.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                We enforce a zero-compromise policy on food safety. From regular soil testing at our partner farms to stringent residue checks before dispatch, we maintain complete traceability. If a batch does not meet our exact physical, chemical, and biological specifications, it is unconditionally rejected. That is our commitment to our international buyers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Farm Quality", "Process Control", "Safety Standards", "Export Ready"].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#F5F8FC] border border-[#E2EBF5]">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF3FC] flex items-center justify-center mb-3" aria-hidden="true">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0B65B2]" />
                  </div>
                  <p className="text-sm font-semibold text-[#0A1628]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-20 lg:py-28 bg-[#F5F8FC]" aria-labelledby="quality-pillars-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <h2 id="quality-pillars-heading" className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight">
              Our Quality Framework
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {QUALITY_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                role="listitem"
                className="bg-white rounded-2xl p-6 border border-[#E2EBF5] hover:border-[#0B65B2] hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EBF3FC] flex items-center justify-center text-[#0B65B2] mb-4 group-hover:bg-[#0B65B2] group-hover:text-white transition-all duration-200">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-[#0A1628] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="certifications-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-4" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0B65B2] mb-3">Credentials</p>
            <h2 id="certifications-heading" className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight">
              Certifications & Compliance
            </h2>
            <p className="mt-3 text-sm text-[#64748B]">
              ⚠ This section will display real certifications once they are provided by the client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                role="listitem"
                className="relative rounded-2xl border border-dashed border-[#B0C8E8] p-8 text-center"
              >
                {/* Cert logo placeholder */}
                <div
                  className="w-20 h-20 rounded-2xl bg-[#F5F8FC] border border-[#E2EBF5] flex items-center justify-center mx-auto mb-5"
                  aria-label="Certification logo placeholder"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B0C8E8" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#0A1628] mb-1">{cert.name}</h3>
                <p className="text-xs text-[#0B65B2] font-medium mb-3">{cert.body}</p>
                <p className="text-sm text-[#64748B] leading-relaxed">{cert.desc}</p>
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-[#EBF3FC] text-[10px] font-semibold text-[#0B65B2]">
                  Awaiting Data
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

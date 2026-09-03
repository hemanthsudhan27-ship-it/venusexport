import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "@/components/home/ContactCTA";

import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Venus Global Exports — our story, mission, vision, and the values that guide our food export business from India to the world.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { title: "Integrity", description: "Honest and transparent in every interaction — with farmers, partners, and clients." },
  { title: "Quality", description: "Uncompromising standards at every stage — from sourcing to delivery." },
  { title: "Reliability", description: "Consistent service that our clients can depend on, every order, every season." },
  { title: "Sustainability", description: "Responsible sourcing that respects farmers, communities, and the environment." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Who We Are"
        subtitle="About Us"
        description="Venus Global Exports is a new-generation food export company, committed to connecting the finest Indian agricultural produce with international markets."
        imageSrc="/images/product-rice.jpg"
      />

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="our-story-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="section-divider mb-4" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0B65B2] mb-3">Our Story</p>
              <h2 id="our-story-heading" className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-6">
                A Vision Rooted in Quality
              </h2>
              <div className="space-y-4 text-[#64748B] text-base leading-relaxed">
                <p>
                  Venus Global Exports was founded with a singular, resolute vision: to bridge the gap between India's rich, diverse agricultural heritage and the rigorous demands of global food markets. Established to elevate the standards of Indian food exports, we recognized early on that international trade required more than just logistics—it demanded absolute integrity, consistent quality, and an unyielding commitment to food safety.
                </p>
                <p>
                  Our leadership team brings decades of combined expertise in agronomy, supply chain management, and international commodities trading. We have spent years building deep-rooted relationships directly with farming communities across India's most fertile regions, ensuring that our sourcing is not only premium but also sustainable and ethical.
                </p>
                <p>
                  Today, Venus Global Exports stands as a trusted partner for importers, distributors, and wholesalers worldwide. From our meticulous farm-level quality checks to our robust sea and air freight logistics, we ensure that the very best of India's harvest reaches your destination port exactly as promised.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-slate-100">
              <Image
                src="/images/product-rice.jpg"
                alt="Premium agricultural products sourced by Venus Global Exports"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-[#F5F8FC]" aria-labelledby="mission-vision-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-[#E2EBF5]">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF3FC] flex items-center justify-center mb-6" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B65B2" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h2 id="mission-vision-heading" className="text-2xl font-bold text-[#0A1628] mb-4">Our Mission</h2>
              <p className="text-[#64748B] leading-relaxed">
                To responsibly source and deliver the highest quality Indian agricultural products to the global market, creating enduring value for our international partners while empowering the farming communities we work with.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#0A1628] rounded-3xl p-8 lg:p-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7DD3FC" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed">
                To be recognized globally as the premier hallmark of trust, safety, and excellence in the Indian food export industry, continuously innovating our supply chain to meet tomorrow's global food security and quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="values-heading">
        <div className="container-site">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-4" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0B65B2] mb-3">Our Foundation</p>
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
            {VALUES.map((v, i) => (
              <div
                key={i}
                role="listitem"
                className="group p-6 rounded-2xl border border-[#E2EBF5] hover:border-[#0B65B2] hover:bg-[#F5F8FC] transition-all duration-200"
              >
                <div className="text-3xl font-extrabold text-[#E2EBF5] group-hover:text-[#0B65B2] transition-colors duration-200 mb-3" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base font-bold text-[#0A1628] mb-2">{v.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Venus */}
      <section className="py-20 lg:py-28 bg-[#F5F8FC]" aria-labelledby="why-choose-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100">
              <Image
                src="/images/product-coconut.jpg"
                alt="Venus Global Exports product quality and freshness"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(61,145,72,0.2) 0%, transparent 60%)" }}
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="section-divider mb-4" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0B65B2] mb-3">Why Venus</p>
              <h2 id="why-choose-heading" className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-6">
                Why Choose Venus Global Exports
              </h2>
              <div className="space-y-4 text-[#64748B] text-base leading-relaxed mb-8">
                <p>
                  In a complex global supply chain, reliability is everything. Venus Global Exports differentiates itself through a vertically integrated approach. By bypassing unnecessary middlemen and working directly with certified growers, we maintain total control over product quality, traceability, and competitive pricing.
                </p>
                <p>
                  Our international buyers choose us because we mitigate the risks of cross-border trade. We offer highly flexible, tailored logistics solutions—including both sea and air freight—and handle all complex export documentation, customs clearance, and phytosanitary certifications in-house. When you partner with Venus Global Exports, you are guaranteed a seamless, transparent, and strictly compliant procurement experience.
                </p>
              </div>
              <Link
                href="/contact"
                id="about-contact-cta"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B65B2] text-white font-semibold text-sm hover:bg-[#084d88] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B65B2] focus-visible:ring-offset-2"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="future-heading">
        <div className="container-site text-center max-w-3xl mx-auto">
          <div className="section-divider mx-auto mb-4" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0B65B2] mb-3">Looking Ahead</p>
          <h2 id="future-heading" className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight mb-6">
            Our Future
          </h2>
          <p className="text-[#64748B] leading-relaxed mb-4">
            As we look to the horizon, Venus Global Exports is strategically expanding our global footprint. We are actively diversifying our product portfolio to include organic-certified spices, premium millets, and value-added coconut products, catering to the rising international demand for health-conscious and sustainable foods. Simultaneously, we are pursuing advanced international quality certifications to deepen our presence in stringent markets across Europe and North America.
          </p>
          <p className="text-[#64748B] leading-relaxed">
            Our long-term ambition is to transcend traditional export models by establishing a transparent, tech-enabled supply chain that tracks produce from Indian farms directly to international retail shelves. We envision Venus Global Exports not just as a trading partner, but as a global hallmark of Indian agricultural excellence—driving sustainable growth, uplifting local farming communities, and redefining the standards of trust and quality in the international food export industry.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

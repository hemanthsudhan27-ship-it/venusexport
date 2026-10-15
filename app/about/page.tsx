import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactCTA from "@/components/home/ContactCTA";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About Us — Venus Global Exports",
  description:
    "Learn about Venus Global Exports — our story, mission, vision, and the values that guide our food export business from India to the world.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { title: "Integrity", description: "Honest and transparent in every interaction — with farmers, logistics partners, and international clients." },
  { title: "Quality", description: "Uncompromising standards at every stage — from farm-gate harvest to container discharge." },
  { title: "Reliability", description: "Consistent fulfillment and delivery that international buyers depend on, every season." },
  { title: "Sustainability", description: "Responsible sourcing that respects growers, agricultural communities, and the environment." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Who We Are"
        subtitle="About Venus Global Exports"
        description="A premier international food export enterprise connecting India's rich agricultural heritage with global food markets through trust, transparency, and unyielding quality."
        imageSrc="/images/product-rice.jpg"
      />

      {/* Our Story */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="our-story-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/10 border border-[#1E3A2B]/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E3A2B]">
                  Our Heritage & Mission
                </span>
              </div>
              <h2 id="our-story-heading" className="text-3xl md:text-5xl font-extrabold text-[#0D1821] leading-tight mb-6">
                A Vision Rooted in Quality
              </h2>
              <div className="space-y-4 text-[#5A6A7D] text-base md:text-lg leading-relaxed">
                <p>
                  Venus Global Exports was founded with a singular, resolute vision: to bridge the gap between India&apos;s rich, diverse agricultural heritage and the rigorous demands of global food markets. Established to elevate the standards of Indian food exports, we recognized early on that international trade required more than just logistics—it demanded absolute integrity, consistent quality, and an unyielding commitment to food safety.
                </p>
                <p>
                  Our leadership team brings decades of combined expertise in agronomy, supply chain management, and international commodities trading. We have spent years building deep-rooted relationships directly with farming communities across India&apos;s most fertile regions, ensuring that our sourcing is not only premium but also sustainable and ethical.
                </p>
                <p>
                  Today, Venus Global Exports stands as a trusted partner for importers, distributors, and wholesalers worldwide. From our meticulous farm-level quality checks to our robust sea and air freight logistics, we ensure that the very best of India&apos;s harvest reaches your destination port exactly as promised.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/product-rice.jpg"
                alt="Premium agricultural products sourced by Venus Global Exports"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1821]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-[#081018] text-white relative overflow-hidden" aria-labelledby="mission-vision-heading">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D7A03F]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-site relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-4 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7A03F]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D7A03F]">
                Strategic Pillars
              </span>
            </div>
            <h2 id="mission-vision-heading" className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="rounded-[28px] p-8 lg:p-12 bg-white/[0.03] border border-white/10 hover:border-[#D7A03F]/50 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D7A03F] mb-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                To responsibly source and deliver the highest quality Indian agricultural products to the global market, creating enduring value for our international partners while empowering the farming communities we work with.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-[28px] p-8 lg:p-12 bg-white/[0.03] border border-white/10 hover:border-[#D7A03F]/50 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D7A03F] mb-6">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 leading-relaxed text-base">
                To be recognized globally as the premier hallmark of trust, safety, and excellence in the Indian food export industry, continuously innovating our supply chain to meet tomorrow&apos;s global food security and quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-[#F8FAFC]" aria-labelledby="values-heading">
        <div className="container-site">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/10 border border-[#1E3A2B]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E3A2B]">
                Core Principles
              </span>
            </div>
            <h2 id="values-heading" className="text-3xl md:text-5xl font-extrabold text-[#0D1821] tracking-tight leading-tight">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
            {VALUES.map((v, i) => (
              <div
                key={i}
                role="listitem"
                className="group p-8 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#D7A03F] hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-extrabold text-[#D7A03F] mb-4" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-bold text-[#0D1821] mb-2">{v.title}</h3>
                <p className="text-sm text-[#5A6A7D] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Venus */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="why-choose-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border border-slate-200">
              <Image
                src="/images/product-coconut.jpg"
                alt="Venus Global Exports product quality and freshness"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-[#0D1821]/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/10 border border-[#1E3A2B]/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7A03F]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E3A2B]">
                  Competitive Advantage
                </span>
              </div>
              <h2 id="why-choose-heading" className="text-3xl md:text-5xl font-extrabold text-[#0D1821] leading-tight mb-6">
                Why International Buyers Choose Venus
              </h2>
              <div className="space-y-4 text-[#5A6A7D] text-base md:text-lg leading-relaxed mb-8">
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#D7A03F] to-[#E5C06E] text-[#0A100D] font-bold text-sm hover:brightness-110 shadow-lg shadow-[#D7A03F]/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7A03F]"
              >
                Inquire For Export Supply
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-24 lg:py-32 bg-[#F8FAFC]" aria-labelledby="future-heading">
        <div className="container-site text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/10 border border-[#1E3A2B]/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1E3A2B]">
              Long-Term Outlook
            </span>
          </div>
          <h2 id="future-heading" className="text-3xl md:text-5xl font-extrabold text-[#0D1821] leading-tight mb-6">
            Our Future Horizon
          </h2>
          <p className="text-[#5A6A7D] text-base md:text-lg leading-relaxed mb-6">
            As we look to the horizon, Venus Global Exports is strategically expanding our global footprint. We are actively diversifying our product portfolio to include organic-certified spices, premium millets, and value-added coconut products, catering to the rising international demand for health-conscious and sustainable foods. Simultaneously, we are pursuing advanced international quality certifications to deepen our presence in stringent markets across Europe and North America.
          </p>
          <p className="text-[#5A6A7D] text-base md:text-lg leading-relaxed">
            Our long-term ambition is to transcend traditional export models by establishing a transparent, tech-enabled supply chain that tracks produce from Indian farms directly to international retail shelves. We envision Venus Global Exports not just as a trading partner, but as a global hallmark of Indian agricultural excellence—driving sustainable growth, uplifting local farming communities, and redefining the standards of trust and quality in the international food export industry.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

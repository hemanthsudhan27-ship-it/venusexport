import type { Metadata } from "next";
import ContactCTA from "@/components/home/ContactCTA";
import PageHeader from "@/components/ui/PageHeader";
import DottedWorldMap from "@/components/ui/DottedWorldMap";

export const metadata: Metadata = {
  title: "Global Reach",
  description:
    "Venus Global Exports connects India with international food markets. Explore our export destinations and global logistics capabilities.",
  alternates: { canonical: "/global-reach" },
};

const REGIONS = [
  {
    region: "Middle East",
    description: "A primary destination for our premium non-basmati and basmati rice, as well as fresh vegetables. We maintain strong supply channels to the UAE, Saudi Arabia, and Oman.",
  },
  {
    region: "Europe",
    description: "Exporting high-grade Indian spices and organic coconuts to the UK, Netherlands, and Germany, strictly adhering to stringent EU food safety regulations.",
  },
  {
    region: "Southeast Asia",
    description: "A growing market for our rice and fresh fruits. We leverage rapid maritime logistics to ensure maximum freshness upon arrival in Malaysia and Singapore.",
  },
  {
    region: "North America",
    description: "Supplying premium spices and specialty rice varieties to distributors across the USA and Canada, backed by complete farm-to-table traceability.",
  },
  {
    region: "Africa",
    description: "Expanding our footprint in East and West Africa by providing bulk shipments of high-quality Indian rice and essential agricultural commodities.",
  },
];

const EXPORT_STEPS = [
  { step: "01", title: "Order Confirmation", desc: "Buyer places order with specifications, quantity, and destination details." },
  { step: "02", title: "Sourcing & Processing", desc: "Products are sourced, inspected, processed, and packed to export standards." },
  { step: "03", title: "Documentation", desc: "All required export documentation is prepared: certificates, invoices, packing lists." },
  { step: "04", title: "Shipping", desc: "Goods are loaded and shipped via sea or air freight depending on requirements." },
  { step: "05", title: "Delivery", desc: "Products arrive at the destination port and are available for customs clearance." },
];

export default function GlobalReachPage() {
  return (
    <>
      <PageHeader
        title="Connecting Markets Worldwide"
        subtitle="Global Reach"
        description="Venus Global Exports utilizes extensive sea and air freight networks to ensure timely and reliable delivery of premium food products anywhere in the world."
        imageSrc="/images/hero-new.jpg"
      />

      {/* Map Section */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="map-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" aria-hidden="true" />
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#0B65B2] mb-3">Our Network</p>
            <h2 id="map-heading" className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight">
              From India To The World
            </h2>
          </div>

          {/* Map */}
          <div className="bg-[#040B16] rounded-3xl p-6 lg:p-10 mb-12 overflow-hidden relative">
            <DottedWorldMap />
          </div>
        </div>
      </section>

      {/* Export Regions */}
      <section className="py-20 lg:py-28 bg-[#F5F8FC]" aria-labelledby="regions-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 id="regions-heading" className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight">
              Export Regions
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {REGIONS.map((r) => (
              <div
                key={r.region}
                role="listitem"
                className="bg-white rounded-2xl p-6 border border-[#E2EBF5] hover:border-[#0B65B2] transition-colors duration-200"
              >
                <h3 className="text-lg font-bold text-[#0A1628] mb-3">{r.region}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="export-process-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" aria-hidden="true" />
            <h2 id="export-process-heading" className="text-3xl md:text-4xl font-bold text-[#0A1628] leading-tight">
              Our Export Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6" role="list">
            {EXPORT_STEPS.map((s) => (
              <div key={s.step} role="listitem" className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#EBF3FC] flex items-center justify-center mx-auto mb-3">
                  <span className="text-sm font-extrabold text-[#0B65B2]">{s.step}</span>
                </div>
                <h3 className="text-sm font-bold text-[#0A1628] mb-2">{s.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

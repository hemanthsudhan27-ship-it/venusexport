import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getAllSlugs } from "@/lib/products";
import { getWhatsAppUrl, getMailtoUrl } from "@/lib/config";
import ContactCTA from "@/components/home/ContactCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} Export from India`,
    description: `Venus Global Exports offers premium ${product.name.toLowerCase()} for international markets. Sourced from India with quality assurance at every step.`,
    alternates: { canonical: `/products/${slug}` },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 pb-0 bg-white">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex items-center gap-2 text-sm text-[#64748B]" role="list">
              <li><Link href="/" className="hover:text-[#0B65B2] transition-colors">Home</Link></li>
              <li aria-hidden="true"><span className="mx-1">/</span></li>
              <li><Link href="/products" className="hover:text-[#0B65B2] transition-colors">Products</Link></li>
              <li aria-hidden="true"><span className="mx-1">/</span></li>
              <li className="text-[#0A1628] font-medium" aria-current="page">{product.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 bg-white" aria-labelledby={`product-${slug}-heading`}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100">
                <Image
                  src={product.heroImage}
                  alt={`Premium ${product.name} for export from India`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 mb-3">
                <Link
                  href="/products"
                  className="text-xs text-[#64748B] hover:text-[#0B65B2] transition-colors"
                >
                  ← All Products
                </Link>
              </div>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#3D9148] mb-3">
                {product.category}
              </span>

              <h1 id={`product-${slug}-heading`} className="text-4xl md:text-5xl font-extrabold text-[#0A1628] mb-3">
                {product.name}
              </h1>
              <p className="text-xl text-[#0B65B2] font-medium mb-5">{product.tagline}</p>

              <div className="flex items-center gap-2 mb-6 text-sm text-[#64748B]">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#3D9148" aria-hidden="true">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
                <span>Origin: <strong className="text-[#0A1628]">{product.origin}</strong></span>
                <span className="ml-2">|</span>
                <span>Availability: <strong className="text-[#0A1628]">{product.availability}</strong></span>
              </div>

              <p className="text-[#64748B] leading-relaxed mb-8">{product.description}</p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/contact"
                  id={`product-${slug}-enquire-cta`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B65B2] text-white font-semibold text-sm hover:bg-[#084d88] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B65B2] focus-visible:ring-offset-2"
                >
                  Enquire Now
                </Link>
                <a
                  href={getWhatsAppUrl(
                    `Hello, I am interested in ordering ${product.name} from Venus Global Exports. Please provide more details.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`product-${slug}-whatsapp-cta`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#1ab955] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
                  aria-label={`Enquire about ${product.name} on WhatsApp`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326z"/>
                  </svg>
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Grid */}
      <section className="py-16 bg-[#F5F8FC]" aria-label="Product details">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Varieties */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2EBF5]">
              <h2 className="text-sm font-bold text-[#0A1628] uppercase tracking-wide mb-4">Available Varieties</h2>
              <ul className="space-y-3" role="list">
                {product.variants.map((v) => (
                  <li key={v.name} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-[#EBF3FC] flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="#0B65B2">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#0A1628]">{v.name}</p>
                      <p className="text-xs text-[#64748B]">{v.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packaging */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2EBF5]">
              <h2 className="text-sm font-bold text-[#0A1628] uppercase tracking-wide mb-4">Packaging Options</h2>
              <ul className="space-y-3" role="list">
                {product.packaging.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#64748B]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3D9148] flex-shrink-0 mt-1.5" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-2xl p-6 border border-[#E2EBF5]">
              <h2 className="text-sm font-bold text-[#0A1628] uppercase tracking-wide mb-4">Specifications</h2>
              <dl className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex items-start justify-between gap-4">
                    <dt className="text-xs text-[#64748B]">{key}</dt>
                    <dd className="text-xs font-semibold text-[#0A1628] text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Shipping */}
      <section className="py-16 bg-white" aria-label="Quality and shipping information">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-[#E2EBF5] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3FC] flex items-center justify-center mb-4" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B65B2" strokeWidth="2">
                  <path d="m9 12 2 2 4-4"/>
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"/>
                </svg>
              </div>
              <h2 className="text-base font-bold text-[#0A1628] mb-3">Quality Assurance</h2>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Each batch of {product.name.toLowerCase()} undergoes strict quality control prior to dispatch. We implement multi-stage inspections for grading, sizing, and impurity checks. Every shipment is accompanied by comprehensive phytosanitary certificates and lab reports confirming adherence to global food safety standards.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E2EBF5] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#EBF3FC] flex items-center justify-center mb-4" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0B65B2" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h2 className="text-base font-bold text-[#0A1628] mb-3">Export & Shipping</h2>
              <p className="text-sm text-[#64748B] leading-relaxed">
                We offer highly flexible logistics solutions tailored to {product.name.toLowerCase()}, utilizing both extensive sea freight networks for volume and rapid air cargo for time-sensitive perishables. Our dedicated team handles all customs clearance, documentation, and compliance to ensure seamless, on-time delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-[#F5F8FC]" aria-labelledby="related-heading">
        <div className="container-site">
          <h2 id="related-heading" className="text-lg font-bold text-[#0A1628] mb-6">Other Products</h2>
          <div className="flex flex-wrap gap-3">
            {["rice", "coconut", "vegetables", "fruits", "spices"]
              .filter((s) => s !== slug)
              .map((s) => (
                <Link
                  key={s}
                  href={`/products/${s}`}
                  id={`related-product-${s}`}
                  className="px-5 py-2.5 rounded-xl bg-white border border-[#E2EBF5] text-sm font-medium text-[#64748B] capitalize hover:border-[#0B65B2] hover:text-[#0B65B2] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B65B2] focus-visible:ring-offset-2"
                >
                  {s}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

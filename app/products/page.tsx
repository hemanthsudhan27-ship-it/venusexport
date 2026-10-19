import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import ContactCTA from "@/components/home/ContactCTA";

import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Venus Export's premium product catalogue: rice, coconut, vegetables, fruits, and spices — sourced from India for international markets.",
  alternates: { canonical: "/products" },
};

const CATEGORY_COLORS: Record<string, string> = {
  rice: "#D97706",
  coconut: "#92400E",
  vegetables: "#166534",
  fruits: "#B45309",
  spices: "#991B1B",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Quality From Every Origin"
        subtitle="Our Products"
        description="We export premium food products sourced directly from India's finest agricultural regions to international markets worldwide."
        imageSrc="/images/product-coconut.jpg"
      />

      {/* Products Grid */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="products-catalogue-heading">
        <div className="container-site">
          <h2 id="products-catalogue-heading" className="sr-only">Product Catalogue</h2>
          <div className="space-y-16" role="list">
            {PRODUCTS.map((product, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={product.slug}
                  role="listitem"
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? "" : "lg:direction-rtl"}`}
                >
                  {/* Image */}
                  <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 ${!isEven ? "lg:order-2" : ""}`}>
                    <Image
                      src={product.image}
                      alt={`${product.name} export products from India`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(135deg, rgba(10,22,40,0.15) 0%, transparent 60%)" }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <div className={!isEven ? "lg:order-1" : ""}>
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: CATEGORY_COLORS[product.slug] }}
                        aria-hidden="true"
                      />
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                        {product.category}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-3">{product.name}</h2>
                    <p className="text-lg font-medium text-[#0B65B2] mb-4">{product.tagline}</p>

                    <p className="text-[#64748B] leading-relaxed mb-6 text-sm">
                      {product.description}
                    </p>

                    {/* Variants preview */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0A1628] mb-3">Available Varieties</p>
                      <div className="flex flex-wrap gap-2">
                        {product.variants.slice(0, 4).map((v) => (
                          <span
                            key={v.name}
                            className="px-3 py-1 rounded-full bg-[#F5F8FC] border border-[#E2EBF5] text-xs font-medium text-[#64748B]"
                          >
                            {v.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Origin */}
                    <div className="flex items-center gap-2 mb-8 text-sm text-[#64748B]">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="#3D9148" aria-hidden="true">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                      </svg>
                      <span>Origin: <strong className="text-[#0A1628]">{product.origin}</strong></span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/products/${product.slug}`}
                        id={`product-catalogue-${product.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B65B2] text-white font-semibold text-sm hover:bg-[#084d88] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B65B2] focus-visible:ring-offset-2"
                      >
                        View Details
                      </Link>
                      <Link
                        href="/contact"
                        id={`product-enquire-${product.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#E2EBF5] text-[#64748B] font-semibold text-sm hover:border-[#0B65B2] hover:text-[#0B65B2] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B65B2] focus-visible:ring-offset-2"
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

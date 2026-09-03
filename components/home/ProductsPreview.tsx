"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, scaleIn, viewportOptions } from "@/lib/animations";

const PRODUCTS = [
  {
    slug: "rice",
    name: "Rice",
    tagline: "Premium grains, naturally grown",
    image: "/images/product-rice.jpg",
    color: "#D97706",
  },
  {
    slug: "coconut",
    name: "Coconut",
    tagline: "Nature's finest, fresh from the source",
    image: "/images/product-coconut-v2.jpg",
    color: "#92400E",
  },
  {
    slug: "vegetables",
    name: "Vegetables",
    tagline: "Farm-fresh, carefully harvested",
    image: "/images/product-vegetables-v2.jpg",
    color: "#166534",
  },
  {
    slug: "fruits",
    name: "Fruits",
    tagline: "Tropical freshness, exported with care",
    image: "/images/product-fruits-v3.jpg",
    color: "#B45309",
  },
  {
    slug: "spices",
    name: "Spices",
    tagline: "Authentic Indian flavours, globally loved",
    image: "/images/product-spices-v2.jpg",
    color: "#991B1B",
  },
];

export default function ProductsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="products-preview-heading">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Products"
          title="Quality From Every Origin"
          subtitle="Venus Global Exports connects carefully sourced food products with international markets — from India's fields to tables around the world."
          className="mb-12 lg:mb-16"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4"
          role="list"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.slug}
              variants={scaleIn}
              role="listitem"
            >
              <Link
                href={`/products/${product.slug}`}
                id={`product-preview-${product.slug}`}
                className="group relative block aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B65B2] focus-visible:ring-offset-2"
                aria-label={`View ${product.name} products`}
              >
                <Image
                  src={product.image}
                  alt={`Premium export quality ${product.name.toLowerCase()} sourced from India by Venus Global Exports`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Base overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to top, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.2) 50%, rgba(10,22,40,0.05) 100%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to top, ${product.color}CC 0%, rgba(10,22,40,0.4) 60%, rgba(10,22,40,0.1) 100%)`,
                  }}
                  aria-hidden="true"
                />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-bold text-white mb-0.5 transition-transform duration-300 group-hover:-translate-y-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-white/60 group-hover:text-white/80 transition-all duration-300 max-h-0 overflow-hidden group-hover:max-h-10">
                    {product.tagline}
                  </p>

                  {/* Arrow */}
                  <div className="mt-3 flex items-center gap-1.5 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="text-xs font-semibold tracking-wide">View Details</span>
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/products"
            id="products-preview-cta"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-[#0B65B2] text-[#0B65B2] font-semibold text-sm hover:bg-[#0B65B2] hover:text-white transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B65B2] focus-visible:ring-offset-2"
          >
            Explore All Products
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

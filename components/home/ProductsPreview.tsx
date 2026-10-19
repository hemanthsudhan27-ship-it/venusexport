"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const PRODUCTS = [
  {
    slug: "rice",
    name: "Rices",
    tagline: "Carefully sourced from trusted growers, processed to maintain purity and freshness.",
    image: "/images/product-rice.jpg",
  },
  {
    slug: "coconut",
    name: "Coconut Products",
    tagline: "Sourced from trusted farms, processed under strict quality standards for export-grade excellence.",
    image: "/images/product-coconut-v2.jpg",
  },
  {
    slug: "vegetables",
    name: "Vegetables",
    tagline: "Farm-fresh vegetables exported with care to maintain nutritional value and freshness.",
    image: "/images/product-vegetables-v2.jpg",
  },
  {
    slug: "fruits",
    name: "Fruits",
    tagline: "Tropical freshness — premium fruits sourced directly from farms and exported with care.",
    image: "/images/product-fruits-v3.jpg",
  },
  {
    slug: "spices",
    name: "Spices & Herbs",
    tagline: "Authentic Indian spices selected to deliver rich aroma and superior quality worldwide.",
    image: "/images/product-spices-v2.jpg",
  },
];

export default function ProductsPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-reveal
  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    if (!reveals) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products-section"
      className="section-pad bg-[#F4F6F8]"
      aria-labelledby="products-heading"
    >
      <div className="container-site">

        {/* ── Section Header ── */}
        <div className="text-center mb-14 lg:mb-18">
          <div className="reveal flex justify-center mb-4">
            <span className="eyebrow">What We Export</span>
          </div>
          <h2
            id="products-heading"
            className="section-title reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            Quality From Every Origin
          </h2>
          <p
            className="mt-4 text-base text-[#4B5563] max-w-2xl mx-auto leading-relaxed reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            Venus Export connects carefully sourced premium food products with international markets — from India&apos;s fields to tables around the world.
          </p>
        </div>

        {/* ── Sticky-Stack Product Cards ── */}
        <div className="sticky-card-container flex flex-col gap-6">
          {PRODUCTS.map((product, index) => (
            <div
              key={product.slug}
              className="sticky-card-item reveal"
              style={{ transitionDelay: `${index * 0.08}s`, zIndex: index + 1 }}
            >
              <Link
                href={`/products/${product.slug}`}
                id={`product-card-${product.slug}`}
                className="group relative block w-full overflow-hidden rounded-[24px] bg-[#0F1723]"
                style={{ minHeight: "280px" }}
                aria-label={`View ${product.name} products`}
              >
                {/* Background image */}
                <Image
                  src={product.image}
                  alt={`Premium export quality ${product.name.toLowerCase()} from Venus Export`}
                  fill
                  sizes="(max-width: 640px) 100vw, 80vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="services-card-overlay" aria-hidden="true" />

                {/* Content */}
                <div className="relative z-10 flex items-end p-7 lg:p-10 h-full" style={{ minHeight: "280px" }}>
                  <div className="flex-1">
                    {/* Index tag */}
                    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#D7A03F] mb-3">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-2 group-hover:text-[#D7A03F] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-white/65 max-w-md leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                      {product.tagline}
                    </p>
                  </div>
                  {/* Arrow CTA */}
                  <div className="ml-6 flex-shrink-0 w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white group-hover:bg-[#C8102E] group-hover:border-[#C8102E] transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* ── View All CTA ── */}
        <div className="mt-10 text-center reveal">
          <Link
            href="/products"
            id="products-view-all-cta"
            className="btn-ghost-dark inline-flex"
          >
            Explore All Products
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    if (!reveals) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-section"
      className="section-pad bg-white"
      aria-labelledby="about-preview-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image Side ── */}
          <div className="relative reveal-left">
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(6,38,92,0.15)]">
              <Image
                src="/images/product-coconut.jpg"
                alt="Premium Indian agricultural products sourced by Venus Export"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(6,38,92,0.1) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -right-4 -bottom-5 lg:-right-8 lg:-bottom-8 bg-white rounded-2xl p-5 shadow-xl border border-[#E8EDF2] max-w-[190px]"
              aria-hidden="true"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "#FEF2F2" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-[#08063A] leading-snug">Export-Ready Products</p>
              <p className="text-[11px] text-[#6B7280] mt-1 leading-relaxed">Sourced, packed & shipped to international standards.</p>
            </div>
          </div>

          {/* ── Content Side ── */}
          <div className="reveal-right">
            {/* Subtitle Badge */}
            <div className="mb-6">
              <span className="subtitle-badge">
                <span className="badge-line" />
                About Us
                <span className="badge-line" />
              </span>
            </div>

            <h2
              id="about-preview-heading"
              className="section-title mb-6"
            >
              WELCOME TO<br />
              <span className="gradient-text">VENUS EXPORT</span>
            </h2>

            <p className="text-base text-[#374151] leading-relaxed mb-4">
              Venus Export is an India-based food export company dedicated to bringing the finest agricultural products from Indian farms to international markets. Our mission is to be the most trusted bridge between quality Indian produce and the world&apos;s growing demand for premium food products.
            </p>

            <p className="text-base text-[#374151] leading-relaxed mb-8">
              We specialise in premium rice, coconut, vegetables, fruits, and spices — working directly with farmers and processors to ensure quality at every step of the supply chain. Every product that carries the Venus name is inspected, processed, and packed to meet the highest international standards.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: "Integrity", desc: "Honest and transparent in every interaction." },
                { label: "Quality", desc: "Uncompromising standards at every stage." },
                { label: "Reliability", desc: "Consistent service our clients can depend on." },
                { label: "Sustainability", desc: "Responsible sourcing that respects communities." },
              ].map((v, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#FEF2F2" }}
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="#C8102E">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#08063A]">{v.label}</p>
                    <p className="text-xs text-[#6B7280] leading-relaxed mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              id="about-preview-cta"
              className="btn-primary inline-flex"
            >
              Our Story
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

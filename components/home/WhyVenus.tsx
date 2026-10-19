"use client";

import { useRef, useEffect, useState } from "react";

const STATS = [
  { value: 500, suffix: "+", label: "Metric Tons Exported", description: "Of premium food products" },
  { value: 15, suffix: "+", label: "Countries Served", description: "Across 5 continents" },
  { value: 100, suffix: "%", label: "Quality Assured", description: "International standards" },
  { value: 5, suffix: "+", label: "Product Categories", description: "Rice, coconut, spices & more" },
];

function Counter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function WhyVenus() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    if (!reveals) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }),
      { threshold: 0.1 }
    );
    reveals.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-venus-section"
      className="stats-section section-pad"
      aria-labelledby="why-venus-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="container-site relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <div className="reveal flex justify-center mb-4">
            <span className="subtitle-badge subtitle-badge-light">
              <span className="badge-line" />
              Our Strengths
              <span className="badge-line" />
            </span>
          </div>
          <h2
            id="why-venus-heading"
            className="reveal section-title text-white"
            style={{ transitionDelay: "0.1s" }}
          >
            EXPORTING FRESHNESS
            <br />
            <span style={{ color: "#D7A03F" }}>ACROSS THE GLOBE</span>
          </h2>
        </div>

        {/* ── Animated Counters ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="reveal text-center lg:text-left"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-2"
                style={{ color: "#D7A03F", fontVariantNumeric: "tabular-nums" }}
              >
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-bold text-white mb-1">{stat.label}</p>
              <p className="text-xs text-white/50">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* ── Core Principles Cards (International Excellence) ── */}
        <div className="reveal mb-4">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-10 text-center">
            International Excellence in Every Shipment
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "Assured Premium Quality",
              desc: "Every product inspected to meet international food safety standards before export.",
              icon: "🛡️",
              tag: "Quality First",
            },
            {
              title: "Export Excellence Worldwide",
              desc: "Established logistics partnerships ensuring smooth international delivery.",
              icon: "🚢",
              tag: "25+ Countries",
            },
            {
              title: "Integrated Supply Chain",
              desc: "Farm-to-port transparency with end-to-end documentation and customs support.",
              icon: "🌐",
              tag: "End-to-End",
            },
            {
              title: "On-Time Secure Delivery",
              desc: "Consistent on-schedule delivery — every order, every season.",
              icon: "✅",
              tag: "Reliable",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="reveal bg-white/6 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#C8102E]/40 transition-all duration-300"
              style={{ transitionDelay: `${0.2 + i * 0.08}s` }}
            >
              <div className="text-3xl mb-4" aria-hidden="true">{card.icon}</div>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#C8102E] mb-2 block">
                {card.tag}
              </span>
              <h4 className="text-base font-bold text-white mb-2">{card.title}</h4>
              <p className="text-xs text-white/55 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

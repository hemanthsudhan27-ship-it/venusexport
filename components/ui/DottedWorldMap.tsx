"use client";

import { motion } from "framer-motion";
import { viewportOptions } from "@/lib/animations";

export const MAP_DOTS = [
  // India (origin)
  { cx: 1420, cy: 410, r: 12, origin: true, label: "India" },
  // Export Destinations
  { cx: 1250, cy: 370, r: 8, label: "Middle East" },
  { cx: 1050, cy: 220, r: 8, label: "Europe" },
  { cx: 1600, cy: 450, r: 8, label: "SE Asia" },
  { cx: 400, cy: 250, r: 8, label: "North America" },
  { cx: 1100, cy: 500, r: 8, label: "Africa" },
];

export default function DottedWorldMap() {
  return (
    <div className="relative w-full max-w-5xl mx-auto" style={{ aspectRatio: "2000/857" }}>
      {/* The Dot Grid Masked by the SVG Map */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          WebkitMaskImage: "url(/images/world-map.svg)",
          WebkitMaskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskImage: "url(/images/world-map.svg)",
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
        }}
      >
        {/* Dot Pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #38bdf8 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
        />
        {/* Glowing Highlights embedded inside the dots */}
        <div className="absolute top-[40%] left-[20%] w-64 h-64 bg-cyan-300/40 rounded-full blur-[60px]" />
        <div className="absolute top-[50%] right-[30%] w-80 h-80 bg-[#0B65B2]/50 rounded-full blur-[80px]" />
        <div className="absolute bottom-[20%] left-[50%] w-48 h-48 bg-blue-400/30 rounded-full blur-[50px]" />
      </div>

      {/* SVG overlay for animations (Routes and Destinations) */}
      <svg
        viewBox="0 0 2000 857"
        className="w-full h-full absolute inset-0 z-10 overflow-visible"
        aria-label="World map showing Venus Export origin in India and international destinations"
      >
        {/* Route arcs from India */}
        {MAP_DOTS.filter(d => !d.origin).map((dest, i) => {
          const origin = MAP_DOTS.find(d => d.origin)!;
          return (
            <motion.path
              key={`route-${i}`}
              d={`M ${origin.cx} ${origin.cy} Q ${(origin.cx + dest.cx) / 2} ${Math.min(dest.cy, origin.cy) - 200} ${dest.cx} ${dest.cy}`}
              fill="none"
              stroke="#D7A03F"
              strokeWidth="3.5"
              strokeDasharray="8 12"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.85 }}
              viewport={viewportOptions}
              transition={{ duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
            />
          );
        })}

        {/* Destination dots */}
        {MAP_DOTS.filter(d => !d.origin).map((dest, i) => (
          <motion.g key={`dest-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOptions}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
          >
            <circle cx={dest.cx} cy={dest.cy} r={dest.r} fill="#10B981" opacity="0.9" />
            <circle cx={dest.cx} cy={dest.cy} r={dest.r + 6} fill="none" stroke="#10B981" strokeWidth="2" opacity="0.4" />
          </motion.g>
        ))}

        {/* India (Origin) */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOptions}
          transition={{ duration: 0.5 }}
        >
          <circle cx={1420} cy={410} r={16} fill="#D7A03F" opacity="0.95" />
          <circle cx={1420} cy={410} r={24} fill="none" stroke="#D7A03F" strokeWidth="4" opacity="0.6" />
          <circle cx={1420} cy={410} r={32} fill="none" stroke="#D7A03F" strokeWidth="2" opacity="0.3" />
          <text x={1450} y={395} fill="#D7A03F" fontSize="24" fontWeight="bold" fontFamily="sans-serif">
            India (Origin)
          </text>
        </motion.g>
      </svg>
    </div>
  );
}

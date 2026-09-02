"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp, viewportOptions } from "@/lib/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id,
}: AnimatedSectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      variants={
        prefersReduced
          ? {}
          : {
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  delay,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }
      }
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className={className}
    >
      {children}
    </motion.section>
  );
}

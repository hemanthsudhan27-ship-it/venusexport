"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 2 seconds total for the entire sequence
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const textLine1 = "venus";
  const textLine2 = "export";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white overflow-hidden origin-top"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center z-10 w-full"
          >
            {/* Logo Image clipped to hide the original text at the bottom */}
            <div 
              className="relative w-64 h-48 md:w-80 md:h-60 overflow-hidden" 
              style={{ clipPath: "inset(0 0 25% 0)" }}
            >
              <Image
                src="/logo/logo.png"
                alt="Venus Export Logo"
                fill
                className="object-contain drop-shadow-lg object-top"
                priority
              />
            </div>
            
            {/* Animated Typing Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.4,
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="flex flex-col items-center mt-2"
            >
              <div className={`text-4xl md:text-5xl font-bold text-[#EBAE2F] tracking-widest h-12 flex uppercase mb-1 ${playfair.className}`}>
                {textLine1.split("").map((char, index) => (
                  <motion.span
                    key={`l1-${index}`}
                    variants={{
                      hidden: { opacity: 0, display: "none" },
                      visible: { opacity: 1, display: "inline-block" },
                    }}
                    className={char === " " ? "w-3 md:w-4" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="text-2xl md:text-3xl font-semibold text-slate-800 tracking-widest h-10 flex uppercase">
                {textLine2.split("").map((char, index) => (
                  <motion.span
                    key={`l2-${index}`}
                    variants={{
                      hidden: { opacity: 0, display: "none" },
                      visible: { opacity: 1, display: "inline-block" },
                    }}
                    className={char === " " ? "w-2 md:w-3" : ""}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


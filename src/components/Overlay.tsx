"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1 (0% scroll): center
  const y1 = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);

  // Section 2 (30% scroll): left
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5], ["50%", "0%", "-50%"]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);

  // Section 3 (60% scroll): right
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8], ["50%", "0%", "-50%"]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 md:px-24">

        {/* Section 1 — center, all screens */}
        <motion.div
          style={{ y: y1, opacity: opacity1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-[0.1em] md:tracking-[0.12em] uppercase text-white mb-4 md:mb-6 drop-shadow-[0_2px_32px_rgba(255,255,255,0.18)]">
            Dhruv Kundu
          </h1>
          <p className="font-serif text-xs sm:text-sm md:text-xl text-zinc-300 tracking-[0.25em] md:tracking-[0.35em] uppercase font-normal drop-shadow-md">
            Creative Developer
          </p>
        </motion.div>

        {/* Section 2 — left on md+, centered on mobile */}
        <motion.div
          style={{ y: y2, opacity: opacity2 }}
          className="absolute left-0 right-0 md:right-auto md:left-24 top-1/2 -translate-y-1/2 px-6 md:px-0 text-center md:text-left"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-6xl font-bold tracking-[0.06em] md:tracking-[0.08em] uppercase text-white max-w-xs sm:max-w-sm mx-auto md:mx-0 drop-shadow-lg leading-snug">
            I build digital<br /><span className="text-zinc-400 tracking-widest">Experiences.</span>
          </h2>
        </motion.div>

        {/* Section 3 — right on md+, centered on mobile */}
        <motion.div
          style={{ y: y3, opacity: opacity3 }}
          className="absolute left-0 right-0 md:left-auto md:right-24 top-1/2 -translate-y-1/2 px-6 md:px-0 text-center md:text-right"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-6xl font-bold tracking-[0.06em] md:tracking-[0.08em] uppercase text-white max-w-xs sm:max-w-lg mx-auto md:mx-0 drop-shadow-lg leading-snug">
            Bridging <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">
              Design
            </span><br />&amp; Engineering.
          </h2>
        </motion.div>

      </div>
    </div>
  );
}

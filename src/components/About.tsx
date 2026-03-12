"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black border-t border-white/10 py-20 md:py-32 px-6 md:px-24 overflow-hidden"
    >
      {/* Decorative large letter — hidden on small screens to prevent overflow */}
      <span className="pointer-events-none select-none hidden md:block absolute -top-8 right-8 text-[18vw] font-serif text-white/[0.025] leading-none tracking-tight">
        I
      </span>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left: Label + Quote */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-600 text-xs tracking-[0.4em] uppercase mb-4 md:mb-6">
            § &nbsp; The Man Behind the Code
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white leading-tight mb-6 md:mb-8">
            An offer you<br />
            <em className="not-italic text-zinc-400">can&apos;t refuse.</em>
          </h2>
          <div className="w-16 h-px bg-white/40 mb-6 md:mb-8" />
          <blockquote className="font-serif text-zinc-400 text-base md:text-lg italic leading-relaxed border-l-2 border-zinc-700 pl-5 md:pl-6">
            &quot;Leave the bugs. Take the cannoli.&quot;
          </blockquote>
        </motion.div>

        {/* Right: Bio paragraphs */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="space-y-6 text-zinc-400 text-base leading-relaxed"
        >
          <p>
            I am a full-stack creative developer who operates in the space between raw engineering and refined design — where most others fear to tread.
          </p>
          <p>
            With years of building digital products for clients who demand only the finest, I have developed a reputation for precision, discipline, and craft. Every line of code, every pixel, placed with intent.
          </p>
          <p>
            Whether it's a scalable web application, an immersive interactive experience, or a brand presence that commands respect — I deliver. Quietly. Decisively.
          </p>
          <div className="pt-4 flex flex-wrap gap-6 text-xs tracking-[0.3em] uppercase text-zinc-600">
            <span>React.js</span>
            <span>Next.js</span>
            <span>Framer Motion</span>
            <span>Three.js</span>
            <span>Node.js</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

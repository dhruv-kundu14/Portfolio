"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React / Next.js", "TypeScript", "Framer Motion", "Three.js / WebGL", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js / Express", "MongoDB", "SQL", "REST & GraphQL", "Redis"],
  },
  {
    category: "Craft",
    items: ["UI / UX Design", "Motion Design", "Creative Coding", "Performance Optimization", "Accessibility"],
  },
  {
    category: "Observatality",
    items: ["SeviceNow", "ITSM", "Development", "SSCM", "ITOM"],
  },
];

// cols-span map for Tailwind (static class names so Tailwind picks them up)
const colSpanClass: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
};

export default function Skills() {
  const COLS = 3;
  const remainder = skills.length % COLS;
  const emptySlots = remainder === 0 ? 0 : COLS - remainder;

  return (
    <section
      id="skills"
      className="relative bg-[#090909] border-t border-white/10 py-20 md:py-32 px-6 md:px-24 overflow-hidden"
    >
      <span className="pointer-events-none select-none absolute bottom-0 left-0 text-[18vw] font-serif text-white/[0.025] leading-none">
        II
      </span>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-zinc-600 text-xs tracking-[0.4em] uppercase mb-4">
            § &nbsp; The Arsenal
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white leading-tight">
            Tools of the trade.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-[#090909] p-10 group hover:bg-white/[0.03] transition-colors duration-500"
            >
              <p className="text-zinc-600 text-xs tracking-[0.4em] uppercase mb-8">
                {String(i + 1).padStart(2, "0")}. {group.category}
              </p>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="w-4 h-px bg-zinc-700 group-hover:bg-white/40 transition-colors duration-500" />
                    <span className="text-zinc-300 font-light tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Decorative filler — spans leftover columns, auto-hides when grid is full */}
          {emptySlots > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className={`relative bg-[#090909] overflow-hidden hidden md:block ${colSpanClass[emptySlots] ?? ""}`}
            >
              {/* Crosshatch line pattern */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.06]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="hatch" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="24" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hatch)" />
              </svg>

              {/* Concentric circle decoration */}
              <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-white/[0.04]" />
              <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-white/[0.06]" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full border border-white/[0.08]" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[240px] gap-6 p-10 text-center">
                <span className="font-display text-6xl font-black text-white/[0.06] tracking-widest select-none">
                  DK
                </span>
                <div className="w-8 h-px bg-white/10" />
                <p className="font-serif text-[10px] tracking-[0.5em] uppercase text-zinc-700 leading-loose">
                  Craft &nbsp;·&nbsp; Code &nbsp;·&nbsp; Command
                </p>
                <p className="font-serif text-xs italic text-zinc-800 mt-2">
                  "Omnis ars naturae imitatio est."
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

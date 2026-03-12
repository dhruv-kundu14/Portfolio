"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Associate Systems Engineer",
    company: "Hexaware Technologies Ltd.",
    period: "2025 — Present",
    description:
      "ServiceNow ITSM, ELK Stack, Development, Patch Management",
  },
  {
    role: "Trainee Developer",
    company: "Drona Learning Solutions",
    period: "2024 - 2025",
    description:
      "Delivered interactive experience for students through website for there online courses. Specialized in React.js, MongoDB, Express.js, HTML, CSS, JavaScript.",
  },
  // {
  //   role: "Full-Stack Developer",
  //   company: "Freelance",
  //   period: "2019 — 2021",
  //   description:
  //     "Built and deployed over 20 client projects across e-commerce, SaaS, and media. Operated with complete discretion. Made problems disappear.",
  // },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-black border-t border-white/10 py-20 md:py-32 px-6 md:px-24 overflow-hidden"
    >
      <span className="pointer-events-none select-none hidden md:block absolute -top-4 right-8 text-[18vw] font-serif text-white/[0.025] leading-none">
        III
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
            § &nbsp; The Record
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white leading-tight">
            A storied career.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-6 border-t border-white/10 py-8 md:py-10 hover:border-white/30 transition-colors duration-500"
            >
              <div>
                <p className="text-zinc-600 text-xs tracking-[0.3em] uppercase mb-2">{exp.period}</p>
                <p className="text-zinc-500 text-sm tracking-wide">{exp.company}</p>
              </div>
              <div>
                <h3 className="text-white font-serif text-xl md:text-2xl mb-2 md:mb-3 group-hover:text-zinc-200 transition-colors">
                {exp.role}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}

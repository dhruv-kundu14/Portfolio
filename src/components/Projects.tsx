"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "Manhwa Tracker",
    description: "A web application that allows users to track their manhwa reading progress.",
    tags: ["React", "Node.js", "Express.js", "Local Storage", "Custom API"],
    link: "https://manhwa-tracker-five.vercel.app",
    image: "/project1.png", // User to provide or I use placeholder
  },
  // {
  //   id: "02",
  //   title: "Project Beta",
  //   description: "Secure communication interface for sensitive operations.",
  //   tags: ["TypeScript", "Framer Motion"],
  //   link: "https://vercel.com",
  //   image: "/project2.jpg",
  // },
  // {
  //   id: "03",
  //   title: "Project Gamma",
  //   description: "Data visualization for global logistics tracking.",
  //   tags: ["WebGL", "Three.js"],
  //   link: "https://vercel.com",
  //   image: "/project3.jpg",
  // },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative bg-black border-t border-white/10 py-20 md:py-32 px-6 md:px-24 overflow-hidden"
    >
      {/* Decorative numeral */}
      <span className="pointer-events-none select-none hidden md:block absolute bottom-0 right-12 text-[18vw] font-serif text-white/[0.025] leading-none">
        IV
      </span>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <p className="text-zinc-600 text-xs tracking-[0.4em] uppercase mb-4">
            § &nbsp; The Dossier
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-white leading-tight">
            Selected operations.
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:20px_20px]" />
                </div>

                {/* Project Image */}
                <div className="w-full h-full relative grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Hover Overlay Link */}
                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-black px-6 py-3 text-xs tracking-[0.3em] uppercase font-bold hover:bg-zinc-200 transition-colors"
                  >
                    View Operation <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Info below image */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-zinc-600 text-[10px] tracking-[0.4em] uppercase">{project.id}</span>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] tracking-[0.2em] uppercase text-zinc-700">{tag}</span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-white group-hover:text-zinc-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

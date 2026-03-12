"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#090909] border-t border-white/10 py-20 md:py-32 px-6 md:px-24 overflow-hidden"
    >
      {/* Decorative diagonal lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.03]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px w-[200%] bg-white -rotate-12"
            style={{ top: `${i * 14}%`, left: "-50%" }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <p className="text-zinc-600 text-xs tracking-[0.4em] uppercase mb-6">
            § &nbsp; The Commission
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-serif text-white leading-tight mb-4 md:mb-6">
            Make me an offer.
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light px-2 md:px-0">
            I accept only the most worthy commissions. If your project demands craftsmanship, precision, and a developer who delivers — reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto space-y-4"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-white/10 focus:border-white/40 text-white placeholder:text-zinc-700 px-6 py-4 text-sm tracking-wide outline-none transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-white/10 focus:border-white/40 text-white placeholder:text-zinc-700 px-6 py-4 text-sm tracking-wide outline-none transition-colors duration-300"
            />
            <textarea
              rows={5}
              placeholder="Your Proposition..."
              className="w-full bg-transparent border border-white/10 focus:border-white/40 text-white placeholder:text-zinc-700 px-6 py-4 text-sm tracking-wide outline-none transition-colors duration-300 resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-black text-xs tracking-[0.4em] uppercase py-5 hover:bg-zinc-200 transition-colors duration-300 font-medium"
            >
              Send the Message
            </motion.button>
          </div>

          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-xs tracking-[0.3em] uppercase text-zinc-600">
            <a href="mailto:dhruv5kun@gmail.com" className="hover:text-white transition-colors duration-300">
              dhruv5kun@gmail.com
            </a>
            <span className="hidden sm:block w-px h-4 bg-zinc-800" />
            <a href="https://github.com/dhruv-kundu14" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">
              GitHub
            </a>
            <span className="hidden sm:block w-px h-4 bg-zinc-800" />
            <a href="https://www.linkedin.com/in/dhruv-kundu-323a01196/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-300">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

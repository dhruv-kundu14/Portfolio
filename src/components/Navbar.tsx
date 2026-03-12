"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const isAtTop = currentY < 50;
      setScrolled(!isAtTop);
      setHidden(!isAtTop && currentY > lastY); // Hide when scrolling down
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: hidden ? 0 : 1, y: hidden ? -80 : 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 transition-colors duration-500 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        {/* Logo / Moniker */}
        <a href="#" className="group flex items-center gap-3">
          <span className="text-white font-display text-xl tracking-[0.25em] uppercase select-none font-bold">
            D<span className="text-zinc-400">.</span>K
          </span>
          <span className="hidden md:block w-px h-5 bg-white/30" />
          <span className="hidden md:block text-zinc-500 text-[10px] tracking-[0.4em] uppercase font-sans font-light">
            Creative Developer
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-zinc-400 hover:text-white text-xs tracking-[0.3em] uppercase transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 text-xs tracking-[0.3em] uppercase px-5 py-3 transition-all duration-300 group"
          >
            Resume
            <span className="opacity-40 group-hover:opacity-100 transition-opacity">↓</span>
          </a>
          {/* Hire Me */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white hover:text-black text-xs tracking-[0.3em] uppercase px-6 py-3 transition-all duration-300 group"
          >
            Hire Me
            <span className="opacity-50 group-hover:opacity-100 transition-opacity">↗</span>
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-4 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white font-serif text-4xl tracking-[0.2em] uppercase"
              >
                {link.label}
              </a>
            ))}
            {/* Resume in mobile menu */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-400 font-serif text-3xl tracking-[0.2em] uppercase"
            >
              Resume ↓
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 border border-white/40 text-white text-xs tracking-[0.3em] uppercase px-8 py-4"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

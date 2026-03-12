import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white relative flex flex-col">
      {/* Fixed navigation */}
      <Navbar />

      {/* Scrolly Hero: canvas + overlay text (leave untouched) */}
      <div className="relative">
        <Overlay />
        <ScrollyCanvas totalFrames={75} />
      </div>

      {/* Portfolio sections */}
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />

      {/* Ambient music player */}
      <MusicPlayer />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 md:py-10 bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <span className="font-display text-lg text-white tracking-[0.25em] uppercase font-bold">D.K</span>
          <p className="text-zinc-700 text-[10px] tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} — Omertà applies to all source code.
          </p>
          <div className="flex gap-6 text-xs tracking-[0.3em] uppercase text-zinc-600">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

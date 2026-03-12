"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const audio = new Audio("/gta4.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audio.addEventListener("canplaythrough", () => setLoaded(true));
    audioRef.current = audio;

    // Hide the hint after 5 seconds
    const timer = setTimeout(() => setShowHint(false), 5000);

    return () => {
      audio.pause();
      audio.src = "";
      clearTimeout(timer);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => { });
    }
    setPlaying(!playing);
    setShowHint(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 6, x: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.4 }}
            className="bg-zinc-900/90 backdrop-blur border border-white/10 text-zinc-400 text-[10px] tracking-[0.3em] uppercase px-4 py-2 whitespace-nowrap"
          >
            Play ambient score
          </motion.div>
        )}
      </AnimatePresence>

      {/* Player button */}
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-12 h-12 rounded-full bg-black border border-white/20 hover:border-white/50 flex items-center justify-center transition-colors duration-300 group"
        aria-label={playing ? "Pause music" : "Play music"}
        title={playing ? "Pause music" : "Play music"}
      >
        {/* Spinning ring while playing */}
        {playing && (
          <motion.span
            className="absolute inset-0 rounded-full border border-white/20"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
        )}

        {/* Pulsing outer ring while playing */}
        {playing && (
          <motion.span
            className="absolute inset-[-6px] rounded-full border border-white/10"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
        )}

        {/* Icon */}
        {playing ? (
          // Pause — two vertical bars
          <span className="flex items-center gap-[3px]">
            <span className="w-[3px] h-4 bg-white rounded-sm" />
            <span className="w-[3px] h-4 bg-white rounded-sm" />
          </span>
        ) : (
          // Play — triangle
          <span
            className="ml-0.5"
            style={{
              width: 0,
              height: 0,
              borderTop: "7px solid transparent",
              borderBottom: "7px solid transparent",
              borderLeft: "12px solid white",
              display: "inline-block",
            }}
          />
        )}
      </motion.button>

      {/* Waveform bars when playing */}
      {playing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-end gap-[3px] h-4 mr-1"
        >
          {[0.6, 1, 0.7, 0.9, 0.5, 0.8, 0.4].map((h, i) => (
            <motion.span
              key={i}
              className="w-[2px] bg-white/40 rounded-full"
              animate={{ scaleY: [h, h * 0.4, h, h * 0.6, h] }}
              transition={{
                repeat: Infinity,
                duration: 0.8 + i * 0.1,
                ease: "easeInOut",
                delay: i * 0.08,
              }}
              style={{ height: `${h * 100}%`, transformOrigin: "bottom" }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ferrari-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative">
            <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
              <rect width="32" height="32" fill="#FF2800" />
              <path d="M16 6L20 14H12L16 6Z" fill="white" />
              <path d="M16 26L12 18H20L16 26Z" fill="white" />
            </svg>
          </div>
          <span className="font-[family-name:var(--font-orbitron)] text-white text-sm font-700 tracking-[0.2em] uppercase">
            Ferrari
          </span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {["Models", "Heritage", "Racing", "Atelier"].map((item) => (
            <a
              key={item}
              href="#"
              className="font-[family-name:var(--font-rajdhani)] text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative font-[family-name:var(--font-orbitron)] text-xs tracking-[0.25em] uppercase px-6 py-2.5 text-white border border-ferrari-red overflow-hidden group"
        >
          <span className="relative z-10">Inquire</span>
          <div className="absolute inset-0 bg-ferrari-red translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-[family-name:var(--font-orbitron)] text-xs tracking-[0.25em] uppercase">
            Inquire
          </span>
        </motion.button>
      </div>
    </motion.nav>
  );
}

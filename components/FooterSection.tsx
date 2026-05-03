"use client";

import { motion } from "framer-motion";
import { carData } from "@/data/carData";

export default function FooterSection() {
  return (
    <>
      {/* CTA Banner */}
      <section className="relative py-32 px-10 md:px-20 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ferrari-red/10 to-transparent pointer-events-none" />
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <p className="font-[family-name:var(--font-rajdhani)] text-ferrari-red text-xs tracking-[0.4em] uppercase mb-4">Ownership</p>
            <h2 className="font-[family-name:var(--font-orbitron)] text-white font-black leading-none mb-4" style={{ fontSize: "clamp(2rem,4vw,4rem)" }}>
              CONFIGURE<br />YOUR SF90 XX
            </h2>
            <p className="font-[family-name:var(--font-rajdhani)] text-white/50 text-lg max-w-md">
              Work with Ferrari Atelier to craft a specification that is uniquely yours. Every detail considered. No compromises.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 font-[family-name:var(--font-orbitron)] text-sm tracking-[0.2em] uppercase px-12 py-5 border border-ferrari-red text-ferrari-red hover:bg-ferrari-red hover:text-white transition-all duration-300"
          >
            Begin Configuration
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-10 md:px-20 py-12">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6">
              <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
                <rect width="32" height="32" fill="#FF2800" />
                <path d="M16 6L20 14H12L16 6Z" fill="white" />
                <path d="M16 26L12 18H20L16 26Z" fill="white" />
              </svg>
            </div>
            <span className="font-[family-name:var(--font-orbitron)] text-white text-xs tracking-[0.3em] uppercase">Ferrari S.p.A.</span>
          </div>
          <p className="font-[family-name:var(--font-rajdhani)] text-white/20 text-sm tracking-wider text-center">
            © {new Date().getFullYear()} Ferrari S.p.A. All rights reserved. Maranello, Italy.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Legal", "Contact"].map((l) => (
              <a key={l} href="#" className="font-[family-name:var(--font-rajdhani)] text-white/30 hover:text-white text-xs tracking-widest uppercase transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

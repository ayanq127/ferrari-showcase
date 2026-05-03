"use client";

import { motion } from "framer-motion";
import { features } from "@/data/carData";

export default function Features() {
  return (
    <section className="py-32 px-10 md:px-20 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-16">
          <p className="font-[family-name:var(--font-rajdhani)] text-ferrari-red text-xs tracking-[0.4em] uppercase mb-3">Engineering</p>
          <h2 className="font-[family-name:var(--font-orbitron)] text-white font-black leading-none" style={{ fontSize: "clamp(2rem,5vw,5rem)" }}>
            INNOVATIONS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ferrari-black p-10 group hover:bg-carbon-gray transition-colors duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="mb-6 text-ferrari-red text-2xl font-mono">{f.icon}</div>

              {/* Red line */}
              <div className="w-8 h-px bg-ferrari-red mb-6 group-hover:w-16 transition-all duration-300" />

              <h3 className="font-[family-name:var(--font-orbitron)] text-white text-sm font-bold tracking-widest uppercase mb-4">
                {f.title}
              </h3>
              <p className="font-[family-name:var(--font-rajdhani)] text-white/50 text-base leading-relaxed font-light">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

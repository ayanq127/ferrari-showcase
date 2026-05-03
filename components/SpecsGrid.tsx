"use client";

import { motion } from "framer-motion";
import { carData } from "@/data/carData";

export default function SpecsGrid() {
  const allSpecs = [
    ...carData.engine.specs,
    ...carData.design.points,
  ];

  return (
    <section className="py-32 px-10 md:px-20 border-t border-white/5">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="font-[family-name:var(--font-rajdhani)] text-ferrari-red text-xs tracking-[0.4em] uppercase mb-3">Technical Data</p>
            <h2 className="font-[family-name:var(--font-orbitron)] text-white font-black leading-none" style={{ fontSize: "clamp(2rem,5vw,5rem)" }}>
              FULL SPECS
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="w-8 h-px bg-ferrari-red" />
            <span className="font-[family-name:var(--font-rajdhani)] text-white/30 text-xs tracking-widest uppercase">{carData.name}</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {allSpecs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="bg-ferrari-black p-8"
            >
              <p className="font-[family-name:var(--font-rajdhani)] text-white/30 text-[10px] tracking-widest uppercase mb-3">{spec.label}</p>
              <p className="font-[family-name:var(--font-orbitron)] text-white font-bold text-base tracking-wide leading-tight">{spec.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

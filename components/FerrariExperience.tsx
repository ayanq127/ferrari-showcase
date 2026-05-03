"use client";

import { useState, useEffect } from "react";
import { MotionValue, useTransform, motion, AnimatePresence } from "framer-motion";
import { carData } from "@/data/carData";

interface Props {
  scrollYProgress: MotionValue<number>;
}

const FADE = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

function HudLine({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`h-px bg-ferrari-red origin-left ${className ?? ""}`}
    />
  );
}

function PhaseHero() {
  return (
    <motion.div
      key="hero"
      initial={FADE.initial}
      animate={FADE.animate}
      exit={FADE.exit}
      transition={FADE.transition}
      className="absolute inset-0 flex flex-col justify-end pb-24 px-10 md:px-20"
    >
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-6 inline-flex items-center gap-3 self-start"
      >
        <div className="w-6 h-px bg-ferrari-red" />
        <span className="font-[family-name:var(--font-rajdhani)] text-ferrari-red text-xs tracking-[0.35em] uppercase font-semibold">
          {carData.hero.badge}
        </span>
        <div className="w-6 h-px bg-ferrari-red" />
      </motion.div>

      {/* Headline */}
      <div className="overflow-hidden">
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-orbitron)] text-white font-black leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
        >
          {carData.hero.headline}
        </motion.h1>
      </div>
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-[family-name:var(--font-orbitron)] text-ferrari-red font-black leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
        >
          {carData.hero.subheadline}
        </motion.div>
      </div>

      <HudLine className="my-6 w-40" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex items-center gap-8 pointer-events-auto"
      >
        <div>
          <p className="font-[family-name:var(--font-rajdhani)] text-white/40 text-xs tracking-widest uppercase mb-1">Starting From</p>
          <p className="font-[family-name:var(--font-orbitron)] text-white text-2xl font-bold">{carData.price}</p>
        </div>
        <button className="font-[family-name:var(--font-orbitron)] text-xs tracking-[0.25em] uppercase px-8 py-3 bg-ferrari-red text-white hover:bg-accent-red transition-colors duration-200">
          Inquire Now
        </button>
      </motion.div>

      {/* Right side — car name */}
      <div className="absolute right-10 md:right-20 bottom-24 text-right">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="font-[family-name:var(--font-orbitron)] text-white text-xl font-bold tracking-wider">{carData.name}</p>
          <p className="font-[family-name:var(--font-rajdhani)] text-white/50 text-sm tracking-[0.2em] uppercase">{carData.subtitle}</p>
        </motion.div>
      </div>

      {/* Top-right HUD badge */}
      <div className="absolute top-24 right-10 md:right-20 text-right">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="border border-white/10 px-4 py-3"
        >
          <p className="font-[family-name:var(--font-rajdhani)] text-white/30 text-[10px] tracking-widest uppercase mb-1">Performance Ethos</p>
          <p className="font-[family-name:var(--font-rajdhani)] text-ferrari-red text-xs tracking-[0.15em] uppercase font-semibold">{carData.tagline}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function PhaseDesign() {
  return (
    <motion.div
      key="design"
      initial={FADE.initial}
      animate={FADE.animate}
      exit={FADE.exit}
      transition={FADE.transition}
      className="absolute inset-0 flex flex-col justify-center px-10 md:px-20"
    >
      <div className="max-w-sm">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-[family-name:var(--font-rajdhani)] text-ferrari-red text-xs tracking-[0.4em] uppercase mb-4"
        >
          02 — Design
        </motion.p>
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-orbitron)] text-white font-black leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            {carData.design.title}
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-orbitron)] text-ferrari-red font-black leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            {carData.design.subtitle}
          </motion.div>
        </div>

        <HudLine className="w-24 mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-4"
        >
          {carData.design.points.map((p, i) => (
            <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="font-[family-name:var(--font-rajdhani)] text-white/40 text-xs tracking-widest uppercase">{p.label}</span>
              <span className="font-[family-name:var(--font-rajdhani)] text-white text-sm font-semibold tracking-wider">{p.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Geometric accent */}
      <div className="absolute top-1/2 -translate-y-1/2 right-10 md:right-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-32 h-32 border border-ferrari-red/30 flex items-center justify-center"
        >
          <div className="w-16 h-16 border border-ferrari-red/60 flex items-center justify-center">
            <div className="w-2 h-2 bg-ferrari-red" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function PhaseEngine() {
  return (
    <motion.div
      key="engine"
      initial={FADE.initial}
      animate={FADE.animate}
      exit={FADE.exit}
      transition={FADE.transition}
      className="absolute inset-0 flex flex-col justify-center items-end px-10 md:px-20"
    >
      <div className="text-right max-w-md">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="font-[family-name:var(--font-rajdhani)] text-ferrari-red text-xs tracking-[0.4em] uppercase mb-4"
        >
          03 — Engine
        </motion.p>
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-orbitron)] text-white font-black leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            {carData.engine.title}
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-orbitron)] text-ferrari-red font-black leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            {carData.engine.subtitle}
          </motion.div>
        </div>

        <HudLine className="w-24 mb-8 ml-auto" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-4"
        >
          {carData.engine.specs.map((s, i) => (
            <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3 gap-8">
              <span className="font-[family-name:var(--font-rajdhani)] text-white/40 text-xs tracking-widest uppercase">{s.label}</span>
              <span className="font-[family-name:var(--font-orbitron)] text-white text-sm font-bold tracking-wider">{s.value}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 flex items-center justify-end gap-3"
        >
          <div className="w-10 h-px bg-ferrari-red" />
          <span className="font-[family-name:var(--font-orbitron)] text-ferrari-red font-black" style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)" }}>1,030 CV</span>
          <div className="w-10 h-px bg-ferrari-red" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function FerrariExperience({ scrollYProgress }: Props) {
  const phase = useTransform(scrollYProgress, (v: number) => {
    if (v < 0.33) return "hero";
    if (v < 0.66) return "design";
    return "engine";
  });

  const [activePhase, setActivePhase] = useState("hero");

  useEffect(() => {
    const unsub = phase.on("change", setActivePhase);
    return unsub;
  }, [phase]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-ferrari-red" />
          <div className="w-1 h-1 bg-ferrari-red rotate-45" />
        </motion.div>
        <span className="font-[family-name:var(--font-rajdhani)] text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
      </div>

      <AnimatePresence mode="wait">
        {activePhase === "hero" && <PhaseHero />}
        {activePhase === "design" && <PhaseDesign />}
        {activePhase === "engine" && <PhaseEngine />}
      </AnimatePresence>
    </div>
  );
}

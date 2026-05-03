"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function CinematicReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: video moves up slightly as user scrolls past
  const videoY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isInView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-ferrari-black border-t border-white/5 overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Full-bleed video */}
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-[-8%] z-0"
      >
        <video
          ref={videoRef}
          src="/ferrari-360.mp4"
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay — heavier at edges, lighter at center */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,26,26,0.15) 0%, rgba(26,26,26,0.65) 100%)",
        }}
      />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ferrari-black to-transparent z-10 pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ferrari-black to-transparent z-10 pointer-events-none" />

      {/* Content overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-10 text-center py-32">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-12 h-px bg-ferrari-red" />
          <span className="font-[family-name:var(--font-rajdhani)] text-ferrari-red text-xs tracking-[0.4em] uppercase">
            360° View
          </span>
          <div className="w-12 h-px bg-ferrari-red" />
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-3">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-orbitron)] text-white font-black leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
          >
            EVERY ANGLE
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-[family-name:var(--font-orbitron)] text-ferrari-red font-black leading-none"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
          >
            PERFECTED
          </motion.div>
        </div>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-[family-name:var(--font-rajdhani)] text-white/50 text-xl max-w-lg leading-relaxed mb-14"
        >
          Aerodynamic surfaces carved from a single design intent. No detail left unconsidered. No line without purpose.
        </motion.p>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { label: "Length", value: "4,702 mm" },
            { label: "Width", value: "2,014 mm" },
            { label: "Height", value: "1,186 mm" },
          ].map((s) => (
            <div
              key={s.label}
              className="border border-white/10 backdrop-blur-sm bg-black/20 px-6 py-3 flex flex-col items-center gap-1"
            >
              <span className="font-[family-name:var(--font-rajdhani)] text-white/30 text-[10px] tracking-widest uppercase">
                {s.label}
              </span>
              <span className="font-[family-name:var(--font-orbitron)] text-white text-sm font-bold tracking-wider">
                {s.value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Rotating ring decoration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: "min(80vw, 80vh)", height: "min(80vw, 80vh)" }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full opacity-[0.06]">
            <circle
              cx="200" cy="200" r="195"
              fill="none"
              stroke="#FF2800"
              strokeWidth="0.5"
              strokeDasharray="4 8"
            />
          </svg>
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: "min(65vw, 65vh)", height: "min(65vw, 65vh)" }}
        >
          <svg viewBox="0 0 400 400" className="w-full h-full opacity-[0.04]">
            <circle
              cx="200" cy="200" r="195"
              fill="none"
              stroke="#FF2800"
              strokeWidth="0.5"
              strokeDasharray="1 12"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

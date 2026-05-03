"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function StudioVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-15%" });
  const [muted, setMuted] = useState(true);

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
    >
      {/* Section header */}
      <div className="max-w-screen-xl mx-auto px-10 md:px-20 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="font-[family-name:var(--font-rajdhani)] text-ferrari-red text-xs tracking-[0.4em] uppercase mb-3">
              Studio Film
            </p>
            <h2
              className="font-[family-name:var(--font-orbitron)] text-white font-black leading-none"
              style={{ fontSize: "clamp(2rem,5vw,5rem)" }}
            >
              IN THE STUDIO
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-ferrari-red" />
            <span className="font-[family-name:var(--font-rajdhani)] text-white/30 text-xs tracking-widest uppercase">
              Maranello, Italy
            </span>
          </div>
        </motion.div>
      </div>

      {/* Video container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-4 md:mx-10 lg:mx-20 mb-24 overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        {/* Red corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-ferrari-red z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-ferrari-red z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-ferrari-red z-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-ferrari-red z-20 pointer-events-none" />

        {/* Subtle gradient overlay — bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ferrari-black/60 to-transparent z-10 pointer-events-none" />

        <video
          ref={videoRef}
          src="/ferrari-360.mp4"
          muted={muted}
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />

        {/* Controls overlay */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          {/* Mute toggle */}
          <button
            onClick={() => {
              setMuted((m) => !m);
              if (videoRef.current) videoRef.current.muted = !muted;
            }}
            className="flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/10 px-4 py-2 hover:border-ferrari-red transition-colors duration-200 group"
          >
            {muted ? (
              <>
                <svg className="w-4 h-4 text-white/50 group-hover:text-ferrari-red transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.531l-4.72-4.719H4.5a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h3z" />
                </svg>
                <span className="font-[family-name:var(--font-rajdhani)] text-white/50 group-hover:text-ferrari-red text-[10px] tracking-widest uppercase transition-colors">Sound Off</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 text-ferrari-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.531L6.75 15.75H4.5a.75.75 0 01-.75-.75V9a.75.75 0 01.75-.75h2.25z" />
                </svg>
                <span className="font-[family-name:var(--font-rajdhani)] text-ferrari-red text-[10px] tracking-widest uppercase">Sound On</span>
              </>
            )}
          </button>
        </div>

        {/* HUD tag — top left */}
        <div className="absolute top-6 left-6 z-20">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-ferrari-red rounded-full animate-pulse" />
            <span className="font-[family-name:var(--font-rajdhani)] text-white/40 text-[10px] tracking-[0.3em] uppercase">Live Preview</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom caption */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-screen-xl mx-auto px-10 md:px-20 pb-24 -mt-12"
      >
        <div className="flex items-start gap-6 border-l-2 border-ferrari-red pl-6">
          <p className="font-[family-name:var(--font-rajdhani)] text-white/40 text-base leading-relaxed max-w-xl">
            Every curve engineered with purpose. Shot under controlled studio conditions to reveal the SF90 XX in its truest form — light catching carbon, shadow defining aero geometry.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

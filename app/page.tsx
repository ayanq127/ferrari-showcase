"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import FerrariScrollCanvas from "@/components/FerrariScrollCanvas";
import FerrariExperience from "@/components/FerrariExperience";
import CinematicReveal from "@/components/CinematicReveal";
import SpecsGrid from "@/components/SpecsGrid";
import Features from "@/components/Features";
import StudioVideo from "@/components/StudioVideo";
import FooterSection from "@/components/FooterSection";

const TOTAL_FRAMES = 240;
const IMAGE_PATH = "/images/ferrari-sequence";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-ferrari-black">
      <Navbar />

      {/* SCROLL SEQUENCE ZONE — 600vh keeps car locked while user scrolls */}
      <section ref={containerRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 z-0">
            <FerrariScrollCanvas
              scrollYProgress={scrollYProgress}
              totalFrames={TOTAL_FRAMES}
              imageFolderPath={IMAGE_PATH}
            />
          </div>
          <div className="absolute inset-0 z-10">
            <FerrariExperience scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </section>

      {/* BELOW FOLD */}
      <div className="relative z-20 bg-ferrari-black">
        <CinematicReveal />
        <SpecsGrid />
        <Features />
        <StudioVideo />
        <FooterSection />
      </div>
    </main>
  );
}

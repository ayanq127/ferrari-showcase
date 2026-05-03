"use client";

import { useEffect, useRef } from "react";
import { MotionValue, useTransform, useMotionValueEvent } from "framer-motion";

interface Props {
  scrollYProgress: MotionValue<number>;
  totalFrames: number;
  imageFolderPath: string;
}

export default function FerrariScrollCanvas({
  scrollYProgress,
  totalFrames,
  imageFolderPath,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const loadedCountRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const frameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, totalFrames - 1]
  );

  // Load all images upfront
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      drawFrame(currentFrameRef.current);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    imagesRef.current = new Array(totalFrames);
    loadedCountRef.current = 0;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = `${imageFolderPath}/${i + 1}.jpg`;
      img.onload = () => {
        loadedCountRef.current++;
        // Draw first frame once first image loads
        if (i === 0) drawFrame(0);
      };
      imagesRef.current[i] = img;
    }
  }, [totalFrames, imageFolderPath]);

  function drawFrame(index: number) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[Math.round(index)];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.width;
    const ch = canvas.height;

    ctx.clearRect(0, 0, cw, ch);

    // object-fit: contain logic
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = cw / ch;

    let drawW: number, drawH: number, offsetX: number, offsetY: number;

    if (imgAspect > canvasAspect) {
      drawW = cw;
      drawH = cw / imgAspect;
    } else {
      drawH = ch;
      drawW = ch * imgAspect;
    }

    offsetX = (cw - drawW) / 2;
    offsetY = (ch - drawH) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);

    // Subtle dark vignette
    const gradient = ctx.createRadialGradient(
      cw / 2, ch / 2, ch * 0.25,
      cw / 2, ch / 2, ch * 0.85
    );
    gradient.addColorStop(0, "rgba(26,26,26,0)");
    gradient.addColorStop(1, "rgba(26,26,26,0.7)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, cw, ch);
  }

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const idx = Math.round(latest);
    if (idx === currentFrameRef.current) return;
    currentFrameRef.current = idx;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => drawFrame(idx));
  });

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}

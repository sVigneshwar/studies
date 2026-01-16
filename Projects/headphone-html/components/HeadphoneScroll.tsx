'use client';

import { useScroll, useTransform, useMotionValueEvent, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function HeadphoneScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll progress (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Total frames available
  const frameCount = 40;

  // Map scroll (0-1) to frame index (0-39)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    const loadImages = async () => {
      const promises = [];
      const tempImages: HTMLImageElement[] = [];

      for (let i = 1; i <= frameCount; i++) {
        const paddedIndex = i.toString().padStart(3, '0');
        const img = new Image();
        img.src = `/frames/ezgif-frame-${paddedIndex}.jpg`;

        // Create a promise for each image
        const p = new Promise<void>((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => {
            console.error(`Failed to load frame ${i}`);
            resolve();
          };
        });
        promises.push(p);
        tempImages.push(img);
      }

      await Promise.all(promises);
      setImages(tempImages);
      setIsLoaded(true);
    };

    loadImages();
  }, []);

  // Draw function
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const idx = Math.round(index);
    // Ensure index is within bounds
    const safeIdx = Math.max(0, Math.min(idx, images.length - 1));
    const img = images[safeIdx];

    // Safety check: if image is missing or not loaded, DO NOT clear canvas. 
    if (!img || !img.complete || img.naturalHeight === 0) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate "contain" fit
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.min(hRatio, vRatio); // Contain

    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;

    ctx.drawImage(
      img,
      0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
    );
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (isLoaded) renderFrame(latest);
  });

  useEffect(() => {
    if (isLoaded && images.length > 0) renderFrame(0);
  }, [isLoaded, images]);

  useEffect(() => {
    const handleResize = () => {
      if (isLoaded) renderFrame(frameIndex.get());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded, frameIndex]);

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-black">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50 z-50 bg-black">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
              <p className="text-sm tracking-widest uppercase">Loading Assets...</p>
            </div>
          </div>
        )}

        <canvas ref={canvasRef} className="block w-full h-full mix-blend-screen object-contain" />

        <OverlayText scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

function OverlayText({ scrollYProgress }: { scrollYProgress: any }) {
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]); // Parallax effect (unused in local scopes but useful if needed)

  // Reusable styles for centering
  const centerStyle = "absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 text-center";
  const leftStyle = "absolute inset-0 flex flex-col items-start justify-center pointer-events-none p-8 md:pl-32 max-w-2xl";
  const rightStyle = "absolute inset-0 flex flex-col items-end justify-center pointer-events-none p-8 md:pr-32 max-w-2xl ml-auto text-right";

  return (
    <div className="absolute inset-0 w-full h-full z-10">
      {/* Title */}
      <motion.div style={{ opacity: opacity1 }} className={centerStyle}>
        <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter mb-4 shadow-black drop-shadow-lg">Zenith X</h1>
        <p className="text-xl md:text-2xl text-white/60 font-medium tracking-[0.2em] uppercase">Pure Sound</p>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 text-white/30 text-sm tracking-widest uppercase"
        >
          Scroll to Explore
        </motion.div>
      </motion.div>

      {/* Section 2 - Left */}
      <motion.div style={{ opacity: opacity2 }} className={leftStyle}>
        <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none mb-6">Precision<br />Engineering.</h2>
        <p className="text-white/70 text-lg md:text-xl leading-relaxed border-l-2 border-white/20 pl-6">
          Meticulously crafted components working in perfect harmony.
        </p>
      </motion.div>

      {/* Section 3 - Right */}
      <motion.div style={{ opacity: opacity3 }} className={rightStyle}>
        <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none mb-6">Titanium<br />Drivers.</h2>
        <p className="text-white/70 text-lg md:text-xl leading-relaxed border-r-2 border-white/20 pr-6">
          Custom-tuned 40mm drivers for crystal clear highs and deep, resonant bass.
        </p>
      </motion.div>

      {/* Section 4 - Center CTA */}
      <motion.div style={{ opacity: opacity4 }} className={centerStyle}>
        <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-12">Hear Everything.</h2>
        <button className="pointer-events-auto px-12 py-5 bg-white text-black text-lg font-bold tracking-widest uppercase rounded-full hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Pre-order Now
        </button>
      </motion.div>
    </div>
  )
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function ScrollyCanvas({ totalFrames = 75 }: { totalFrames?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Load images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];

      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(3, "0");
        const src = `/ezgif-frame-${frameIndex}.png`;

        await new Promise((resolve) => {
          img.onload = () => {
            loadedImages.push(img);
            resolve(img);
          };
          img.onerror = (err) => {
            console.warn(`Failed to load frame ${i}`, err);
            resolve(img); // Continue even if one fails
          };
          img.src = src;
        });
      }

      imagesRef.current = loadedImages;
      setImagesLoaded(true);
    };

    loadImages();
  }, [totalFrames]);

  // Handle scroll logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, Math.max(0, totalFrames - 1)]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      const currentFrame = Math.round(frameIndex.get());
      const image = imagesRef.current[currentFrame];

      if (image && image.complete) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const canvasAspectRatio = canvas.width / canvas.height;
        const imageAspectRatio = image.width / image.height;

        // Scale < 1 = zoomed out / smaller image. Tweak this value to taste.
        const SCALE = 0.95;

        let renderWidth, renderHeight;

        if (canvasAspectRatio > imageAspectRatio) {
          renderWidth = canvas.width * SCALE;
          renderHeight = renderWidth / imageAspectRatio;
        } else {
          renderHeight = canvas.height * SCALE;
          renderWidth = renderHeight * imageAspectRatio;
        }

        const xOffset = (canvas.width - renderWidth) / 2;
        const yOffset = (canvas.height - renderHeight) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, xOffset, yOffset, renderWidth, renderHeight);
      }
    };

    // Initial render
    render();

    // Subscribe to scroll updates
    const unsubscribe = frameIndex.on("change", render);

    // Re-render on resize
    window.addEventListener("resize", render);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", render);
    };
  }, [imagesLoaded, frameIndex]);

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

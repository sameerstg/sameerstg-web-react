"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ModernCarousel } from "../Components/ui/modern-carousel";

function ImageSlider({ title, link, contents, index = 0 }) {
  const ref = useRef(null);

  // Track if user is on a small/mobile viewport so we can reduce aggressive scaling
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Get scroll position relative to this component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"], // triggers around center
  });

  // Smooth spring scale with optimized speed and easing.
  // On mobile, avoid shrinking too small — use a subtle scale range.
  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isMobile ? [0.95, 1, 0.98] : [0.6, 1, 0.8]
  );
  const scale = useSpring(rawScale, { stiffness: 150, damping: 25, mass: 0.5 });

  // Slide-in direction
  const isEven = index % 2 === 0;
  const initialX = isEven ? 100 : -100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }}
      viewport={{ once: true }}
      style={{
        scale,
      }}
      className="flex flex-col justify-center items-center tablet:gap-2 min-text-sm max-text-5xl w-full"
    >
      <button>
        <a href={link} target="_blank" rel="noreferrer noopener">
          {title}
          {link != null ? " 🔗" : ""}
        </a>
      </button>

      <ModernCarousel
        className="w-full px-2 tablet:px-4 min-h-[300px] tablet:min-h-[500px] laptop:min-h-[700px]"
      >
        {contents.map((item, index) => (
          <div
            key={index}
            className="w-full h-full flex flex-col justify-center items-center px-2 py-4 overflow-hidden"
          >
            {item.type === "Image" ? (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full h-full flex flex-col justify-center items-center"
              >
                <img
                  src={item.content}
                  alt="portfolio"
                  className="mx-auto w-full h-auto max-h-[60vh] tablet:max-h-[70vh] object-contain shadow-2xl rounded-lg"
                />
              </a>
            ) : item.type === "Website" ? (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                className="relative w-full h-full"
              >
                <div className="w-full h-full">
                  <iframe
                    className="mx-auto w-full h-full rounded-lg shadow-2xl"
                    allowFullScreen={false}
                    src={item.content}
                    title="Embedded Website"
                    scrolling="no"
                  ></iframe>
                </div>
              </a>
            ) : item.type === "Video" ? (
              <div className="w-full h-full flex items-center justify-center">
                <div style={{ aspectRatio: "16 / 9" }} className="w-full h-auto max-h-full">
                  <iframe
                    className="w-full h-full rounded-lg shadow-2xl"
                    title="Youtube player"
                    src={`https://youtube.com/embed/${item.content}?rel=0&controls=1&showinfo=0&modestbranding=0`}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ) : item.type === "3D Model" ? (
              <div className="w-full h-full">
                <iframe
                  className="mx-auto w-full h-full rounded-lg shadow-2xl"
                  allowFullScreen
                  mozAllowFullScreen
                  webkitAllowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  src={item.content}
                ></iframe>
              </div>
            ) : item.type === "Github" ? (
              <iframe
                src={`https://github-readme-stats.vercel.app/api/pin/?username=${"sameerstg"}&repo=${
                  item.content
                }`}
                className="w-full h-[160px] mx-auto rounded-lg shadow-2xl"
              />
            ) : (
              <div />
            )}
          </div>
        ))}
      </ModernCarousel>
    </motion.div>
  );
}

export default ImageSlider;
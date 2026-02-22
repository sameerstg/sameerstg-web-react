"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "../Components/ui/carousel";

function ImageSlider({ title, link, contents }) {
  const ref = useRef(null);

  // Track if user is on a small/mobile viewport
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.onchange = update;
    return () => (mq.onchange = null);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle opacity and scale transitions for a premium feel without being jarring
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
      }}
      className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto my-12 tablet:my-24 px-4 overflow-hidden"
    >
      <div className="w-full flex justify-between items-center mb-6">
        <h2 className="text-2xl tablet:text-4xl font-bold text-primary group">
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:underline flex items-center gap-2"
          >
            {title}
            {link && <span className="text-xl opacity-0 group-hover:opacity-100 transition-opacity">🔗</span>}
          </a>
        </h2>
      </div>

      <Carousel className="w-full group">
        <CarouselContent>
          {contents.map((item, idx) => (
            <CarouselItem key={idx} className="flex justify-center items-center">
              <div className="w-full overflow-hidden rounded-2xl h-[400px] tablet:h-[600px] flex items-center justify-center relative">
                {item.type === "Image" ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full h-full flex items-center justify-center p-2"
                  >
                    <img
                      src={item.content}
                      alt={title}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </a>
                ) : item.type === "Video" ? (
                  <VideoItem videoId={item.content} />
                ) : item.type === "Website" ? (
                  <InteractiveIframe src={item.content} title="Website" />
                ) : item.type === "3D Model" ? (
                  <InteractiveIframe src={item.content} title="3D Model" />
                ) : item.type === "Github" ? (
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <iframe
                      src={`https://github-readme-stats.vercel.app/api/pin/?username=sameerstg&repo=${item.content}&theme=dark`}
                      className="w-full max-w-md h-[180px]"
                    />
                  </div>
                ) : (
                  <div className="text-muted-foreground p-10 text-center">Unsupported content type</div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {contents.length > 1 && (
          <>
            <div className="hidden tablet:block">
              <CarouselPrevious className="left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CarouselNext className="right-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <CarouselDots />
          </>
        )}
      </Carousel>
    </motion.div>
  );
}

function VideoItem({ videoId }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isPlaying) {
    return (
      <div
        className="relative w-full h-full cursor-pointer group flex items-center justify-center bg-black overflow-hidden"
        onClick={() => setIsPlaying(true)}
      >
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt="Video thumbnail"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Centered play button + label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-16 h-16 tablet:w-20 tablet:h-20 bg-secondary text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.6)] group-hover:scale-110 active:scale-95 transition-transform duration-300">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 tablet:w-10 tablet:h-10 ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-white font-semibold text-base tablet:text-lg drop-shadow-lg">
            Tap to play
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-black flex items-center justify-center">
      <iframe
        className="w-full h-full"
        src={`https://youtube.com/embed/${videoId}?autoplay=1&rel=0&controls=1`}
        title="Youtube player"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}

function InteractiveIframe({ src, title }) {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div className="relative w-full h-full group overflow-hidden">
      <iframe
        className={`w-full h-full transition-all duration-700 ${isInteracting ? "opacity-100 scale-100" : "opacity-40 scale-105 blur-[2px]"
          }`}
        src={src}
        title={title}
        style={{ pointerEvents: isInteracting ? "auto" : "none" }}
      />

      {!isInteracting && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer bg-black/40 hover:bg-black/20 transition-colors group"
          onClick={() => setIsInteracting(true)}
        >
          <div className="bg-secondary text-black px-8 py-4 rounded-full shadow-[0_0_40px_rgba(0,255,255,0.3)] flex items-center gap-3 transition-all duration-300 transform group-hover:scale-110 group-active:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M15 18l-2 2-2-2" />
              <path d="M10 10l2 2 2-2" />
              <path d="M12 2v10" />
            </svg>
            <span className="font-bold text-lg uppercase tracking-wider">Interact with {title}</span>
          </div>
          <p className="text-white/60 mt-4 text-sm font-medium tablet:block hidden">
            Clicking will enable interaction and lock swiping
          </p>
        </div>
      )}

      {isInteracting && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsInteracting(false);
          }}
          className="absolute top-4 right-4 z-20 bg-red-500 text-white flex items-center gap-2 px-4 py-2 rounded-full shadow-2xl hover:bg-red-600 transition-all transform hover:scale-105 active:scale-95"
          title="Disable interaction to swipe"
        >
          <span className="font-bold text-xs">EXIT INTERACTION</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default ImageSlider;

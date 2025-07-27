"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Components/ui/carousel";

function ImageSlider({ title, link, contents, index = 0 }) {
  const ref = useRef(null);

  // Get scroll position relative to this component
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"], // triggers around center
  });

  // Smooth spring scale
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 0.8]);
  const scale = useSpring(rawScale, { stiffness: 100, damping: 20 });

  // Slide in direction
  const isEven = index % 2 === 0;
  const initialX = isEven ? 100 : -100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      style={{
        scale,
      }}
      className="flex flex-col justify-center items-center tablet:gap-2 min-text-sm max-text-5xl"
    >
      <button>
        <a href={link} target="_blank" rel="noreferrer noopener">
          {title}
          {link != null ? " 🔗" : ""}
        </a>
      </button>

      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="w-[65vw] h-[65vw] tablet:w-[60vw] tablet:h-[40vw] p-2">
          {contents.map((_, index) => (
            <CarouselItem
              key={index}
              className="p-2 flex flex-col justify-center"
            >
              {_.type === "Image" ? (
                <a
                  href={_.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-full h-full flex flex-col justify-center items-center"
                >
                  <img
                    src={_.content}
                    alt=""
                    className="box mx-auto max-h-[100%] max-w-[100%]"
                  />
                </a>
              ) : _.type === "Website" ? (
                <a
                  href={_.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="relative w-full h-full"
                >
                  <iframe
                    className="box mx-auto w-full h-full pointer-events-none"
                    allowFullScreen={false}
                    src={_.content}
                    title="Embedded Website"
                    scrolling="no"
                  ></iframe>
                </a>
              ) : _.type === "Video" ? (
                <iframe
                  className="box mx-auto w-full my-auto h-[80%]"
                  title="Youtube player"
                  src={`https://youtube.com/embed/${_.content}?rel=0&controls=1&showinfo=0&modestbranding=0`}
                ></iframe>
              ) : _.type === "3D Model" ? (
                <div className="sketchfab-embed-wrapper tablet:h-[30vw] h-full">
                  <iframe
                    className="box mx-auto w-full h-full my-auto"
                    allowFullScreen
                    mozAllowFullScreen
                    webkitAllowFullScreen
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    src={_.content}
                  ></iframe>
                </div>
              ) : _.type === "Github" ? (
                <iframe
                  src={`https://github-readme-stats.vercel.app/api/pin/?username=${"sameerstg"}&repo=${
                    _.content
                  }`}
                  className="w-full h-[160px] box mx-auto rounded-lg shadow"
                />
              ) : (
                <div />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
}

export default ImageSlider;

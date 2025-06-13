"use client";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Components/ui/carousel";
function ImageSlider({ title, link, contents }) {
  return (
    <div className="flex flex-col justify-center items-center  tablet:gap-2 min-text-sm max-text-5xl">
      <button>
        <a href={link} target="_blank" rel="noreferrer noopener">
          {title}
          {link != null ? "🔗" : ""}
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
              className="p-2 flex flex-col justify-center "
            >
              {_.type == "Image" ? (
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
              ) : _.type == "Video" ? (
                <iframe
                  className="box mx-auto w-full my-auto h-[80%]"
                  title="Youtube player"
                  src={`https://youtube.com/embed/${_.content}?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=0"`}
                ></iframe>
              ) : _.type == "3D Model" ? (
                <div className="sketchfab-embed-wrapper tablet:h-[30vw] h-full">
                  <iframe
                    className="box mx-auto w-full h-full my-auto"
                    allowFullScreen
                    mozAllowFullScreen={true}
                    webkitAllowFullScreen={true}
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
                <div></div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default ImageSlider;

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Components/ui/carousel";
function ImageSlider({ title, link, contents }) {
  return (
    <div className="flex flex-col justify-center items-center  gap-10">
      <button>
        <a href={link} target="_blank" rel="noreferrer noopener">
          {title}🔗
        </a>
      </button>

      <Carousel>
        <CarouselContent className="w-[60vw] h-[40vw]">

          {contents.map((_, index) => (
            <CarouselItem key={index} className="w-full h-full my-auto">
              <img
                src={_.image}
                alt=""
                className="box "
              />
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

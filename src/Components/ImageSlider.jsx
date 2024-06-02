"use client";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../Components/ui/carousel";
import Image from "next/image";
function ImageSlider({ title, link, contents, type }) {
  return (
    <div className="flex flex-col justify-center items-center  tablet:gap-2 min-text-sm max-text-5xl">
      <button>
        <a href={link} target="_blank" rel="noreferrer noopener">
          {title}🔗
        </a>
      </button>

      <Carousel>
        <CarouselContent className="w-[75vw] h-[65vw] tablet:w-[60vw] tablet:h-[40vw] p-2">

          {contents.map((_, index) => (
            <CarouselItem key={index} className="p-2 flex flex-col justify-center ">
              {type == 'image' ?

                <a href={_.link} target="_blank" rel="noreferrer noopener" className="w-full h-full flex flex-col justify-center items-center">
                  <img
                    src={_.image}
                    alt=""
                    className="box mx-auto max-h-[100%] max-w-[100%]"
                  />
                </a>
                // <Image src={_.image} height={2000} width={2000} alt="image" className="box mx-auto max-h-[100%] max-w-[100%]"/>
                : type == 'video' ?


                  <iframe className='box mx-auto w-full my-auto h-[80%]'
                    title='Youtube player'
                    // sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation modestbranding=0 rel=0'
                    src={`https://youtube.com/embed/${_}?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=0"`}>
                  </iframe>
                  :
                  type == 'model' ?

                    <div className='h-[40vw] tablet:h-[30vw]' class="sketchfab-embed-wrapper ">
                      <iframe
                        className='box h-full mx-auto w-full  my-auto '
                        frameborder="0"
                        allowfullscreen mozallowfullscreen="true"
                        webkitallowfullscreen="true"
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        xr-spatial-tracking
                        execution-while-out-of-viewport
                        execution-while-not-rendered
                        web-share

                        src={_}>

                      </iframe>
                    </div>
                    :
                    <div></div>

              }
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

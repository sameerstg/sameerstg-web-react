'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useState } from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../Components/ui/carousel"
function ImageSlider({ title, link, contents }) {
   


    return (
        <div className='flex flex-col justify-center gap-10'>
            <button >
                <a href={link} target='_blank' rel='noreferrer noopener'>
                    {title}🔗
                </a>
            </button>

            <div className='flex items-center justify-center gap-2'>


                {/* <Link exact to={contents[index].link} target='_blank' rel="noreferrer noopener" > */}

                <Carousel className="w-full ">
                    <CarouselContent>
                        {contents.map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <img src={_.image} alt="" className='box mx-auto w-auto h-[30vh] laptop:h-[60vh]' />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                {/* <Image width={100}  height={100} src={contents[index].image} alt="" className='box mx-auto w-full h-[30vh] laptop:h-[60vh]' /> */}

                {/* </Link> */}

            </div>




        </div>
    )
}

export default ImageSlider
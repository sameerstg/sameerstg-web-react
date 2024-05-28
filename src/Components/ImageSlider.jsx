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
        <div className='flex flex-col justify-center items-center gap-10'>
            <button >
                <a href={link} target='_blank' rel='noreferrer noopener'>
                    {title}🔗
                </a>
            </button>

                <Carousel>
                    <CarouselContent >
                        {contents.map((_, index) => (
                            <CarouselItem key={index} >
                                {/* <img src={_.image} alt="" className='box mx-auto h-[30vh] laptop:h-[60vh]' /> */}
                                {/* <img src={_.image} alt="" className='box mx-auto  ' /> */}
                                <img src={_.image} alt="" className='box mx-auto  h-[30vh] laptop:h-[60vh]' />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <CarouselPrevious /> */}
                    {/* <CarouselNext /> */}
                </Carousel>







        </div>
    )
}

export default ImageSlider
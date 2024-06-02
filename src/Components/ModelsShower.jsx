'use client'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../Components/ui/carousel"
import SketchfabViewer from './SketchfabViewer';
function ModelsShower() {
    const ids = [

        'https://sketchfab.com/models/c8126f28638d4c6c9670e37f8a03231a/embed',
        "https://sketchfab.com/models/95dd9c5d733643289c40ea0cd121e539/embed",
        "https://sketchfab.com/models/5f2e511826954fe29e294ed1f0dca24c/embed",
        'https://sketchfab.com/models/c4d144d532f943a38072c0bf5912037c/embed',

    ];



    return (
        <div className='flex flex-col justify-center items-center'>
            <div> <button className='mx-auto   my-10'>
                <a href={'https://www.artstation.com/sameerstg5'} target='_blank' rel='noreferrer noopener'>
                    {'My 3D Art'}🔗
                </a>
            </button></div>

            <div className='flex items-center justify-center gap-2'>
                <Carousel className="w-[58vw] h-[35vw] flex flex-col justify-center items-center">
                    <CarouselContent>
                        {ids.map((_, index) => (
                            <CarouselItem key={index} className=''>
                                <SketchfabViewer link={_} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>




        </div >
    )
}

export default ModelsShower
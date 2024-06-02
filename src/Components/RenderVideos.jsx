'use client'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../Components/ui/carousel"
function RenderVideos() {
    const ids = [

        "5mHIdHsT7AE",

    ];



    return (
        <div className='flex flex-col justify-center items-center'>
            <div> <button className='mx-auto   my-10'>
                <a href={'https://www.artstation.com/sameerstg5'} target='_blank' rel='noreferrer noopener'>
                    {'Renders'}🔗
                </a>
            </button></div>
            <div>
                <Carousel>
                    <CarouselContent className="w-[60vw] h-[35vw]">
                        {ids.map((id, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <iframe className='box mx-auto w-full h-[600px]'
                                        title='Youtube player'
                                        // sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation modestbranding=0 rel=0'
                                        src={`https://youtube.com/embed/${ids[index]}?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=0"`}>
                                    </iframe>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            


        </div>
    )
}

export default RenderVideos
'use client'
import React from 'react'
import { useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

import SketchfabViewer from './SketchfabViewer';
function RenderVideos() {
    const ids = [

        "5mHIdHsT7AE",

    ];
    const [index, setIndex] = useState(0);
    const goto = (direction) => {
        if (index + direction > ids.length - 1) {
            setIndex(0);
        } else if (index + direction < 0) {
            setIndex(ids.length - 1);
        } else {
            setIndex(index + direction);
        }
    }


    return (
        <div className='flex flex-col justify-center items-center'>
            <div> <button className='mx-auto   my-10'>
                <a href={'https://www.artstation.com/sameerstg5'} target='_blank' rel='noreferrer noopener'>
                    {'Renders'}🔗
                </a>
            </button></div>
            <div className='flex items-center justify-center gap-2'>
                <button onClick={() => goto(-1)} className='blue-box'>
                    <BiLeftArrowAlt className='w-[15px] h-[15px] tablet:w-[20px] tablet:h-[20px] laptop:w-[40px] laptop:h-[40px]' color='black' />
                </button>
                
                <iframe className='box  mx-auto w-full laptop:w-[100vh] laptop:h-[50vh]'
                    title='Youtube player'
                    // sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation modestbranding=0 rel=0'
                    src={`https://youtube.com/embed/${ids[index]}?rel=0&amp;controls=1&amp&amp;showinfo=0&amp;modestbranding=0"`}>
                </iframe>
                <button onClick={() => goto(1)} className='blue-box'>
                    <BiRightArrowAlt className='w-[15px] h-[15px] tablet:w-[20px] tablet:h-[20px] laptop:w-[40px] laptop:h-[40px]' color='black' />
                </button>

            </div>



        </div>
    )
}

export default RenderVideos
import React from 'react'
import { useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

import SketchfabViewer from './SketchfabViewer';
function ModelsShower() {
    const ids = [
        
        "https://sketchfab.com/models/95dd9c5d733643289c40ea0cd121e539/embed",
        "https://sketchfab.com/models/5f2e511826954fe29e294ed1f0dca24c/embed",
        'https://sketchfab.com/models/c4d144d532f943a38072c0bf5912037c/embed',

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
                    {'My 3D Art'}🔗
                </a>
            </button></div>
            <div className='flex items-center justify-center gap-2'>
                <button onClick={() => goto(-1)} className='blue-box'>
                    <BiLeftArrowAlt className='w-[15px] h-[15px] tablet:w-[20px] tablet:h-[20px] laptop:w-[40px] laptop:h-[40px]' color='black' />
                </button>

                <SketchfabViewer link={ids[index]} />
                <button onClick={() => goto(1)} className='blue-box'>
                    <BiRightArrowAlt className='w-[15px] h-[15px] tablet:w-[20px] tablet:h-[20px] laptop:w-[40px] laptop:h-[40px]' color='black' />
                </button>

            </div>



        </div>
    )
}

export default ModelsShower
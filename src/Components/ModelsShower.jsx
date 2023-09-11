import React from 'react'
import { useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

import SketchfabViewer from './SketchfabViewer';
function ModelsShower() {
    const ids=[
        "https://sketchfab.com/models/5f2e511826954fe29e294ed1f0dca24c/embed",
      
        "https://sketchfab.com/models/95dd9c5d733643289c40ea0cd121e539/embed",
     'https://sketchfab.com/models/c4d144d532f943a38072c0bf5912037c/embed' 
      
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
        <div className='p-3 my-20 '>
            
            <div className='flex items-center justify-center gap-10'>
                <button onClick={() => goto(-1)} className='blue-box'>
                    <BiLeftArrowAlt className='w-[25px] h-[25px] laptop:w-[60px] laptop:h-[60px]' color='black' />
                </button>

                <SketchfabViewer link={ids[index]} />
                <button onClick={() => goto(1)} className='blue-box'>
                    <BiRightArrowAlt className='w-[25px] h-[25px] laptop:w-[60px] laptop:h-[60px]' color='black' />
                </button>

            </div>

           

        </div>
    )
}

export default ModelsShower
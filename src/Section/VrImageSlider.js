import React from 'react'
import { useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';
function VrImageSlider({ title, link, contents }) {
    const [index, setIndex] = useState(0);
    const goto = (direction) => {
        if (index + direction > contents.length - 1) {
            setIndex(0);
        } else if (index + direction < 0) {
            setIndex(contents.length - 1);
        } else {
            setIndex(index + direction);
        }
    }


    return (
         <div className='flex flex-col justify-center gap-10'>
            <button >
                <a href={link} target='_blank' rel='noreferrer noopener'>
                    {title}🔗
                </a>
            </button>

            <div className='flex items-center justify-center gap-2'>
                <button onClick={() => goto(-1)} className='blue-box'>
                    <BiLeftArrowAlt className='w-[15px] h-[15px] tablet:w-[20px] tablet:h-[20px] laptop:w-[40px] laptop:h-[40px]' color='black' />
                </button>

                <Link exact to={contents[index].link} target='_blank' rel="noreferrer noopener" >
                    <img src={contents[index].image} alt="" className='box mx-auto w-[45%] h-[30vh] laptop:h-[60vh]' />

                </Link>
                <button onClick={() => goto(1)} className='blue-box'>
                    <BiRightArrowAlt className='w-[15px] h-[15px] tablet:w-[20px] tablet:h-[20px] laptop:w-[40px] laptop:h-[40px]' color='black' />
                </button>

            </div>



        </div>
    )
}

export default VrImageSlider
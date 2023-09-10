import React from 'react'
import { useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';
function ImageSlider({ title, contents }) {
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
        <div className='p-3 my-20'>
            <div className='text-center text-primary text-4xl font-bold my-10'>
                {title}
            </div>
            <div className='flex items-center justify-center gap-10'>
                <button onClick={() => goto(-1)} className='blue-box'>
                    <BiLeftArrowAlt className='w-[25px] h-[25px] laptop:w-[60px] laptop:h-[60px]' color='black' />
                </button>

                <Link exact to={contents[index].link} target='_blank'rel="noreferrer noopener" >
                <img src={contents[index].image} alt="" className='box mx-auto laptop:h-[60vh]' />

                </Link>
                <button onClick={() => goto(1)} className='blue-box'>
                    <BiRightArrowAlt className='w-[25px] h-[25px] laptop:w-[60px] laptop:h-[60px]' color='black' />
                </button>

            </div>

            {/* <div>
                {contents.map((image,index)=>(
                    <img key={index} src={image}  alt="" className='w-16 h-32' />
                ))}
        </div> */}

        </div>
    )
}

export default ImageSlider
import React from 'react'
import unity from '../Assets/Images/unity.svg'
import blender from '../Assets/Images/blender.svg'
import react from '../Assets/Images/react.svg'
import flutter from '../Assets/Images/flutter.svg'
import ps from '../Assets/Images/photoshop.svg'
import aftereffect from '../Assets/Images/aftereffects.svg'
import figma from '../Assets/Images/figma.svg'
import Technology from '../Components/Technology'

function Technologies() {
  return (
    <div className='h-[50vh] flex flex-col justify-center items-center'>
        <div className='text-black  font-bold text-[40px] tablet:text-[80px] laptop:text-[100px] text-center'>

            Technologies
        </div>
        <ul className='flex justify-center gap-2 tablet:gap-10 laptop:gap-16 flex-wrap'>
      
      <Technology  image={unity} alt="" />
      <Technology  image={blender} alt="" />
      <Technology  image={react} alt="" />
      <Technology  image={flutter} alt="" />
      <Technology  image={figma} alt="" />
      <Technology  image={ps} alt="" />
      <Technology  image={aftereffect} alt="" />
    </ul>
    </div>
  )
}

export default Technologies
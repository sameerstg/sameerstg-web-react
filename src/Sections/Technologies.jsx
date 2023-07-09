import React from 'react'
import unity from '../Assets/Images/unity.svg'
import blender from '../Assets/Images/blender.svg'
import react from '../Assets/Images/react.svg'
import flutter from '../Assets/Images/flutter.svg'
import ps from '../Assets/Images/photoshop.svg'
import aftereffect from '../Assets/Images/aftereffects.svg'
import figma from '../Assets/Images/figma.svg'
import {motion} from 'framer-motion'

function Technologies() {
  return (
    <div>
        <div className='text-black font-bold text-[40px] tablet:text-[80px] laptop:text-[100px] text-center pb-9'>

            Technologies
        </div>
        <ul className='flex justify-center gap-2 tablet:gap-10 laptop:gap-16 flex-wrap'>
      <motion.img whileHover={{scale:1.2}}   initial={{x:-1000}}  animate={{x:0}} transition={{  ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={unity} alt="" />
      <motion.img whileHover={{scale:1.2}}  initial={{x:-1000}} animate={{x:0}} transition={{  ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={blender} alt="" />
      <motion.img whileHover={{scale:1.2}}  initial={{y:400}} animate={{y:0}}  transition={{  ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={react} alt="" />
      <motion.img whileHover={{scale:1.2}}  initial={{opacity:0}} animate={{opacity:1}}  transition={{  delay:0.18,ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={flutter} alt="" />
      <motion.img whileHover={{scale:1.2}}  initial={{y:-400}} animate={{y:0}}  transition={{  ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={figma} alt="" />
      <motion.img whileHover={{scale:1.2}}  initial={{x:1000}} animate={{x:0}}  transition={{  ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={ps} alt="" />
      <motion.img whileHover={{scale:1.2}}  initial={{x:1000}} animate={{x:0}}  transition={{  ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={aftereffect} alt="" />
    </ul>
    </div>
  )
}

export default Technologies
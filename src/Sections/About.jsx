
import React from 'react'
import {motion} from 'framer-motion'
import Typed from 'react-typed'
function About() {
  return (
    <div className='h-screen w-full flex flex-col  laptop:justify-center mt-8 laptop:my-0 '>
      
        <motion.h1 whileHover={{scale:1.1}} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
         className='text-center text-black font-bold laptop:text-[100px] mb-2'>
           Sameerstg
        </motion.h1>

        <motion.h1  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
         className='text-center text-black font-bold laptop:text-[70px] mb-2'>
          <Typed className='pr-2' strings={['Game','AR/VR','App','Web']} typeSpeed={100} loop={true} showCursor={false}/>
           Developer
        </motion.h1>
        
    </div>
  )
}

export default About
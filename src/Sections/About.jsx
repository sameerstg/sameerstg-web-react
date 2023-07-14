
import React from 'react'
import {motion} from 'framer-motion'
import Typed from 'react-typed'
import github from '../Assets/Images/github.svg'
import artstation from '../Assets/Images/artstation.png'
import linkedin from '../Assets/Images/linkedin.svg'
import youtube from '../Assets/Images/youtube.svg'
import facebook from '../Assets/Images/facebook.svg'
import instagram from '../Assets/Images/instagram.svg'
import discord from '../Assets/Images/discord.svg'
function About() {
  return (
    <div className='h-screen w-full flex flex-col laptop:justify-center gap-10'>
      <div 
        className='flex flex-col  laptop:justify-center mt-8 laptop:my-0 text-center text-black'>
      

      
        
      <motion.h1 initial={{  x: -500 }} animate={{  x: 0 }} exit={{  x: 400 }} transition={{ delay: 0.2, ease:[0.36,1,0.75,1]}}
         className='text-black font-bold text-[50px] tablet:text-[80px] laptop:text-[100px] mb-2'>
           Sameerstg
        </motion.h1>
        
      
        
      <div className='flex justify-center  items-center font-bold text-[20px] tablet:text-[40px] laptop:text-[60px] '>
      <div>
        &lt;<span className='text-yellow-200'>code</span>&gt;
        </div>
      <motion.h1 initial={{  x: 500 }} animate={{  x: 0 }} exit={{  x: 400 }} transition={{ delay: 0.2, ease:[0.36,1,0.75,1]}}>
          <Typed className='pr-2 text-[#ff6666]'  strings={['Game','AR/VR','App','Web']} typeSpeed={100} loop={true}  backSpeed={100}  showCursor={false} />
           Developer
        </motion.h1>
        <div>
        &lt;/<span className='text-yellow-200'>code</span>&gt;
        </div>
      </div>
       
        
    </div>
    <ul className='flex justify-center gap-1 tablet:gap-6 laptop:gap-6'>
      <a target='_blank' rel="noreferrer" href='https://github.com/sameerstg'><motion.img whileHover={{scale:1.2}}  initial={{x:-1000}} animate={{x:0}} transition={{  ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={github} alt="" /></a>
      <a target='_blank' rel="noreferrer" href='https://www.artstation.com/sameerstg5'><motion.img whileHover={{scale:1.2}}  initial={{x:-1000}} animate={{x:0}} transition={{  ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={artstation} alt="" /></a>
      <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/sameerstg/'><motion.img whileHover={{scale:1.2}}  initial={{y:400}} animate={{y:0}}  transition={{  ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={linkedin} alt="" /></a>
      <a target='_blank' rel="noreferrer" href='https://www.instagram.com/sameerstg/'><motion.img whileHover={{scale:1.2}}  initial={{opacity:0}} animate={{opacity:1}}  transition={{  delay:0.18,ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={instagram} alt="" /></a>
      <a target='_blank' rel="noreferrer" href='https://www.youtube.com/channel/UCt68mmpafwAmhsENbxr_5Lg'><motion.img whileHover={{scale:1.2}}  initial={{y:-400}} animate={{y:0}}  transition={{  ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={youtube} alt="" /></a>
      <a target='_blank' rel="noreferrer" href='https://www.facebook.com/people/Sameerstg/100069067089055/'><motion.img whileHover={{scale:1.2}}  initial={{x:1000}} animate={{x:0}}  transition={{  ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={facebook} alt="" /></a>
      <a target='_blank' rel="noreferrer" href='https://discord.gg/VBm3Vf5T'><motion.img whileHover={{scale:1.2}}  initial={{x:1000}} animate={{x:0}}  transition={{  ease:[0.36,1,0.26,1]}} className='h-12 tablet:h-16 laptop:h-24 ' src={discord} alt="" /></a>
    </ul>
    </div>
    
  )
}

export default About
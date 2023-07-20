
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
import SocialIcon from '../Components/SocialIcon'
function About() {
  return (
    <div className='py-10 laptop:py-0 laptop:h-screen laptop:justify-center w-full flex flex-col  gap-10'>
      <div 
        className='flex flex-col  laptop:justify-center mt-8 tablet:mt-0 laptop:my-0 text-center text-black'>
      

      
        
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
      <SocialIcon initial={{x:-1000}} link={'https://github.com/sameerstg'} image={github}/>
      <SocialIcon initial={{x:-1000}} link={'https://www.artstation.com/sameerstg5'} image={artstation}/>
      <SocialIcon initial={{y:-1000}} link={'https://www.instagram.com/sameerstg/'} image={instagram}/>
      <SocialIcon  link={'https://www.linkedin.com/in/sameerstg/'} image={linkedin}/>
      <SocialIcon initial={{y:1000}} link={'https://www.youtube.com/channel/UCt68mmpafwAmhsENbxr_5Lg'} image={youtube}/>
      <SocialIcon initial={{x:1000}} link={'https://www.facebook.com/people/Sameerstg/100069067089055/'} image={facebook}/>
      <SocialIcon initial={{x:1000}} link={'https://discord.gg/VBm3Vf5T'} image={discord}/>
      
    </ul>
    </div>
    
  )
}

export default About
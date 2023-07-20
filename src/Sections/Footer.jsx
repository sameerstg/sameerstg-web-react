import React from 'react'
import github from '../Assets/Images/github.svg'
import artstation from '../Assets/Images/artstation.png'
import linkedin from '../Assets/Images/linkedin.svg'
import youtube from '../Assets/Images/youtube.svg'
import facebook from '../Assets/Images/facebook.svg'
import instagram from '../Assets/Images/instagram.svg'
import discord from '../Assets/Images/discord.svg'
import logo from '../Assets/Images/logo.png'

import {motion} from 'framer-motion'
import SocialIconFooter from '../Components/SocialIconFooter'

function Footer() {
  return (
    <div className='text-black w-full bg-[#00000086] py-4 '>
        <div className='flex gap-4 justify-center items-center'>
        <motion.img src={logo} className='h-10 laptop:h-20' alt="" initial={{opacity:0,x:-500}} animate={{opacity:1,x:0}} transition={{  ease:[0.36,1,0.26,1]}}/>
        <motion.h1 className='text-[30px] laptop:text-[50px] font-bold  'initial={{opacity:0,x:500}} animate={{opacity:1,x:0}} transition={{  ease:[0.36,1,0.26,1]}}>
            Sameerstg
        </motion.h1>
        </div>
       <ul className='flex justify-center gap-5 tablet:gap-6 laptop:gap-6 pt-6'>
       <SocialIconFooter link={'https://github.com/sameerstg'} image={github}/>
      <SocialIconFooter link={'https://www.artstation.com/sameerstg5'} image={artstation}/>
      <SocialIconFooter link={'https://www.linkedin.com/in/sameerstg/'} image={linkedin}/>
      <SocialIconFooter link={'https://www.instagram.com/sameerstg/'} image={instagram}/>
      <SocialIconFooter link={'https://www.youtube.com/channel/UCt68mmpafwAmhsENbxr_5Lg'} image={youtube}/>
      <SocialIconFooter link={'https://www.facebook.com/people/Sameerstg/100069067089055/'} image={facebook}/>
      <SocialIconFooter link={'https://discord.gg/VBm3Vf5T'} image={discord}/>
    </ul>
    <div className='w-full text-center '>
    © 2022-2023, Sameerstg, Com. All rights reserved. Sameerstg.com and its logo are Sameerstg trademarks or registered trademarks.  
    </div>
    </div>
  )
}

export default Footer
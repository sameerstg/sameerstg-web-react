import React from 'react'
import ReactTyped from 'react-typed'

import IconBoxWithoutLink from '../Components/IconBoxWithoutLink'
import IconBox from '../Components/IconBox'
import github from '../Assets/Images/Socials/github.svg'
import linkedin from '../Assets/Images/Socials/linkedin.svg'
import artstation from '../Assets/Images/Socials/artstation.svg'
import facebook from '../Assets/Images/Socials/facebook.svg'
import playstore from '../Assets/Images/Socials/playstore.svg'
import instagram from '../Assets/Images/Socials/instagram.svg'
import youtube from '../Assets/Images/Socials/youtube.svg'
import discord from '../Assets/Images/Socials/discord.svg'

import aftereffects from '../Assets/Images/Technologies/aftereffects.svg'
import blender from '../Assets/Images/Technologies/blender.svg'
import figma from '../Assets/Images/Technologies/figma.svg'
import flutter from '../Assets/Images/Technologies/flutter.svg'
import photoshop from '../Assets/Images/Technologies/photoshop.svg'
import react from '../Assets/Images/Technologies/react.svg'
import unity from '../Assets/Images/Technologies/unity.svg'
import InterestBox from '../Components/InterestBox'

import { motion } from 'framer-motion'

function Home() {
  return (
    <div className='mx-auto text-center font-serif '>

      {/*  Intro */}
      <div className='laptop:h-[90vh]  laptop:my-0 flex flex-col justify-center'>
        <div className='text-[32px] tablet:text-[50px] font-bold '>


          {/* for laptop */}
          <div className='hidden laptop:flex laptop:flex-col'>
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }} className='text-tertiary font-bold'>Hello World</motion.div>

            <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }} className='flex justify-center'>
              <h1 className='text-primary'>I'm</h1>

              <h1 className='text-secondary'>&nbsp;Sameerstg</h1>
            </motion.div>
            <ReactTyped className='text-primary ' loop={true} typeSpeed={40} backSpeed={50} strings={['a Game Developer', 'a Web Developer', ' an App Developer', 'an Ar/Vr Developer', 'a 3D Artist']} />

            <motion.div 
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1, duration: 0.2 }} 
              className='text-tertiary text-xl font-bold font-mono py-10'>
              With a curiosity for cutting-edge possibilities and a knack for weaving them together, I craft experiences that redefine the possible.
            </motion.div>
          </div>
          {/* For mobile*/}
          <div className='laptop:hidden'>
            <div
              className='text-tertiary font-bold'>Hello World</div>

            <div
              className='flex justify-center'>
              <h1 className='text-primary'>I'm</h1>

              <h1 className='text-secondary'>&nbsp;Sameerstg</h1>
            </div>
            <ReactTyped className='text-primary ' loop={true} typeSpeed={40} backSpeed={50} strings={['a Game Developer', 'a Web Developer', ' an App Developer', 'an Ar/Vr Developer', 'a 3D Artist']} />

            <div className='text-tertiary text-[16px] font-bold font-mono py-10'>
              With a curiosity for cutting-edge possibilities and a knack for weaving them together, I craft experiences that redefine the possible.
            </div>
          </div>
        </div>



      </div>

      {/* Socials and technologies */}

      <div id='socials' className='h-screen flex justify-center flex-col gap-20'>
        {/* Socials */}
        <div>
          <h2 className='text-primary text-center text-[32px] tablet:text-[50px] font-bold my-3'>Socials</h2>
          <div className='flex flex-row gap-2 justify-center'>
            <IconBox image={playstore} href={'https://play.google.com/store/apps/developer?id=Sameerstg'} />
            <IconBox image={github} href={'https://github.com/sameerstg'} />
            <IconBox image={linkedin} href={'https://www.linkedin.com/in/sameerstg/'} />
            <IconBox image={artstation} href={'https://www.artstation.com/sameerstg5'} />
            <IconBox image={facebook} href={'https://www.facebook.com/profile.php?id=100069067089055'} />
            <IconBox image={instagram} href={'https://www.instagram.com/sameerstg/'} />
            <IconBox image={youtube} href={'https://www.youtube.com/channel/UCt68mmpafwAmhsENbxr_5Lg?view_as=subscriber'} />
            <IconBox image={discord} href={'https://discord.gg/pJVTACah'} />

          </div>
        </div>
        {/* Technologies */}
        <div>
          <h2 className='text-primary text-center text-[32px] tablet:text-[50px] font-bold my-3'>Technologies</h2>
          <div className='flex flex-row gap-2 justify-center'>
            <IconBoxWithoutLink image={unity} />
            <IconBoxWithoutLink image={blender} />
            <IconBoxWithoutLink image={react} />
            <IconBoxWithoutLink image={flutter} />
            <IconBoxWithoutLink image={figma} />
            <IconBoxWithoutLink image={photoshop} />
            <IconBoxWithoutLink image={aftereffects} />

          </div>
        </div>

        <div>
          {/* Interest */}
          <div>
            <h1 className='text-primary text-[32px] font-bold text-center' >Interests</h1>
            <div className=' mx-auto laptop:flex laptop:justify-center laptop:flex-wrap laptop:items-center'>
              <InterestBox text={'🚀 Latest Technologies'} />
              <InterestBox text={'👨‍💻 Software Development'} />
              <InterestBox text={'💭 Conspiracies'} />
              <InterestBox text={'♟⚽🎮 Chess - Football - Video Games'} />
            </div>

          </div>

        </div>


      </div>

    </div>
  )
}

export default Home

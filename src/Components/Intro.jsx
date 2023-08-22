import React from 'react'
import ReactTyped from 'react-typed'
import IconBox from './IconBox'
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



function Intro() {
  return (
    <div className=''>


    <h2 className='text-tertiary text-[16px] font-bold'>Hello World</h2>      
    <div className='flex text-[40px] '>
    <h1 className='text-primary font-bold'>Hi, I'm</h1>
    
    <h1 className='text-secondary font-bold'>&nbsp; Sameerstg</h1>
    </div>
    <ReactTyped className='text-primary flex text-[32px] font-bold' loop={true} typeSpeed={40} backSpeed={50} strings={['a Game Developer', 'a Web Developer',' an App Developer', 'an Ar/Vr Developer', 'a 3D Artist']}/>
    <div className='text-tertiary text-[18px]'>
    <p>
    I am a Game Developer, a Web Developer, an App Developer, an AR/VR Developer, and a 3D Artist – your gateway to a universe where chic meets an array of technologies. 
    </p>
    <p>With a curiosity for cutting-edge possibilities and a knack for weaving them together, I craft experiences that redefine the possible.</p>
    <p>

    Join me on this odyssey as a future illuminated by technology's limitless potential unfolds. Together, we will script a saga of innovation that echoes through the ages.
    </p>
    </div>
    <div>
    <h2 className='text-tertiary text-[18px] font-bold my-3'>Ping me here</h2>
    <div className='flex flex-row gap-2'>
    <IconBox  image={playstore} href={'https://play.google.com/store/apps/developer?id=Sameerstg' }/>
    <IconBox  image={github} href={'https://github.com/sameerstg'}/>
    <IconBox  image={linkedin} href={'https://www.linkedin.com/in/sameerstg/'}/>
    <IconBox  image={artstation} href={'https://www.artstation.com/sameerstg5'}/>
    <IconBox  image={facebook} href={'https://www.facebook.com/profile.php?id=100069067089055'}/>
    <IconBox  image={instagram} href={'https://www.instagram.com/sameerstg/'}/>
    <IconBox  image={youtube} href={'https://www.youtube.com/channel/UCt68mmpafwAmhsENbxr_5Lg?view_as=subscriber'}/>
    <IconBox  image={discord} href={'https://discord.gg/pJVTACah'}/>
    
    </div>
   <div className='my-3'>
   <h2 className='text-tertiary text-[18px] font-bold'>Technologies</h2>
   <div className='flex flex-row gap-2'>
    <IconBox  image={unity}  />
    <IconBox  image={blender} />
    <IconBox  image={react}/>
    <IconBox  image={flutter}/>
    <IconBox  image={figma}/>
    <IconBox  image={photoshop} />
    <IconBox  image={aftereffects} />
    
    </div>
   </div>
   
    <div className='my-3'>

    <h1 className='text-secondary text-[32px] font-bold text-center' >My Interests</h1>
    </div>

    </div>

    </div>
  )
}

export default Intro
import React from 'react'
import ReactTyped from 'react-typed'
import IconBox from './IconBox'
import github from '../Assets/Images/github.svg'
import artstation from '../Assets/Images/artstation.svg'
import facebook from '../Assets/Images/facebook.svg'
import playstore from '../Assets/Images/playstore.svg'
import instagram from '../Assets/Images/instagram.svg'
import youtube from '../Assets/Images/youtube.svg'
import discord from '../Assets/Images/discord.svg'

function Intro() {
  return (
    <div className=''>


    <h2 className='text-tertiary text-[16px] font-bold'>Hello World</h2>      
    <div className='flex text-[32px] '>
    <h1 className='text-primary font-bold'>Hi, I'm</h1>
    
    <h1 className='text-secondary font-bold'>&nbsp; Sameerstg</h1>
    </div>
    <ReactTyped className='text-primary flex text-[32px] font-bold' loop={true} typeSpeed={40} backSpeed={50} strings={['a Game Developer', 'a Web Developer',' an App Developer', 'an Ar/Vr Developer', 'a 3D Artist']}/>
    <div className='text-tertiary text-[16px]'>
    <p>
    I am a Game Developer, a Web Developer, an App Developer, an AR/VR Developer, and a 3D Artist – your gateway to a universe where chic meets an array of technologies. 
    </p>
    <p>With a curiosity for cutting-edge possibilities and a knack for weaving them together, I craft experiences that redefine the possible.</p>
    <p>

    Join me on this odyssey as a future illuminated by technology's limitless potential unfolds. Together, we will script a saga of innovation that echoes through the ages.
    </p>
    </div>
    <div>
    <h2 className='text-tertiary text-[16px] font-bold my-3'>Ping me here</h2>
    <div className='flex gap-2'>
    <IconBox className='' image={playstore}/>
    <IconBox className='' image={github}/>
    <IconBox className='' image={artstation}/>
    <IconBox className='' image={facebook}/>
    <IconBox className='' image={instagram}/>
    <IconBox className='' image={youtube}/>
    <IconBox className='' image={discord}/>
    
    </div>
   <div className='my-3'>
   <h2 className='text-tertiary text-[16px] font-bold'>Technologies</h2>
    <h2 className='text-secondary text-[16px] font-bold text-center'>Features</h2>
   </div>
   
    <div className='my-3'>

    <h1 className='text-primary text-[16px] font-bold text-center' >What I Do</h1>
    </div>

    </div>

    </div>
  )
}

export default Intro
import React from 'react'
import logo from '../Assets/Images/logo.png'
import burger from '../Assets/Images/burger.svg'
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'
function Navbar() {
  return (
    <div id='home' className='p-5 text-primary flex justify-between items-center'>
 <motion.button  whileHover={{scale:1.2}} whileTap={{ scale: 0.8 }}>

      <img src={logo} alt="" className='w-14 h-14' />
 </motion.button>
      <div className='hidden tablet:flex tablet:flex-row font-sans font-bold gap-4 text-[28px]'>


        <motion.button  whileHover={{scale:1.2}} whileTap={{ scale: 0.8 }}>
          <Link duration={500} smooth={true} to='home'>Home</Link>

        </motion.button>
        <motion.button  whileHover={{scale:1.2}} whileTap={{ scale: 0.8 }}>
          <Link duration={500} smooth={true} to='portfolio'>Portfolio</Link>

        </motion.button>
        <motion.button  whileHover={{scale:1.2}} whileTap={{ scale: 0.8 }}>
          <Link duration={500} smooth={true} to='socials'>Socials</Link>

        </motion.button>
        <motion.button  whileHover={{scale:1.2}} whileTap={{ scale: 0.8 }}>
          <Link duration={500} smooth={true} to=''>Company</Link>

        </motion.button>
        <motion.button  whileHover={{scale:1.2}} whileTap={{ scale: 0.8 }}>
          <Link duration={500} smooth={true} to='socials'>Contact</Link>

        </motion.button>
      </div>

      <img src={burger} alt="" className='className=w-14 h-14 flex tablet:hidden' />


    </div>
  )
}

export default Navbar
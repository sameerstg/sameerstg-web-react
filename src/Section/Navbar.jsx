import React from 'react'
import logo from '../Assets/Images/logo.png'
import burger from '../Assets/Images/burger.svg'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import Drawer from '../Components/Drawer'
import { useState } from 'react'
import {BsXLg} from 'react-icons/bs'
function Navbar() {
  let [drawerClicked,setDrawerClicked] = useState(false);
 
  if (!drawerClicked) {
    return (
      <div id='home' className='p-5 text-primary flex justify-between items-center'>
        <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
  
          <img src={logo} alt="" className='w-14 h-14' />
        </motion.button>
        <div className='hidden tablet:flex tablet:flex-row font-sans font-bold gap-4 text-[28px]'>
  
  
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link duration={500} smooth={true} to='home'>Home</Link>
  
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link duration={500} smooth={true} to='socials'>Socials</Link>
  
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          </motion.button>
  
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link duration={500} smooth={true} to=''>Company</Link>
  
          </motion.button>
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link duration={500} smooth={true} to='socials'>Contact</Link>
  
          </motion.button>
        </div>
        <div className='flex tablet:hidden'>
        <img src={burger} alt="" className='className=w-14 h-14 '  onClick={()=>setDrawerClicked(drawerClicked=!drawerClicked)}/>
        </div>
        
  
        
  
      </div>
    )
  }
  else{
    return(
    <div id='home' className='h-screen p-20 text-primary flex flex-col items-center box'>
      <div className='w-full flex justify-between items-center'>

          <img src={logo} alt="" className='w-14 h-14' />
            <button  onClick={()=>{setDrawerClicked(drawerClicked = false);}}>

          <BsXLg size={'40px'}  />
          </button>
      </div>
       <Drawer drawerClicked={drawerClicked} setDrawerClicked={setDrawerClicked} />

      </div>)
   
    
  
  }
    

  
 
 
}

export default Navbar
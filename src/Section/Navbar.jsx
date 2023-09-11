import React from 'react'
import logo from '../Assets/Images/logo.png'
import burger from '../Assets/Images/burger.svg'

import { motion } from 'framer-motion'
import Drawer from '../Components/Drawer'
import { useState } from 'react'
import { BsXLg } from 'react-icons/bs'
import {  Link  } from "react-router-dom";
import NavButton from '../Components/NavButton'
function Navbar() {
  let [drawerClicked, setDrawerClicked] = useState(false);

  if (!drawerClicked) {
    return (
      <div id='home' className='p-5 text-primary flex justify-between items-center'>
        <Link exact to='/'>
          <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>

            <img src={logo} alt="" className='w-14 h-14' />

          </motion.button>
        </Link>
        <div className='hidden tablet:flex tablet:flex-row font-sans font-bold gap-4 text-[28px]'>


          <NavButton text={'Home'} scrollTo='home' />

          <NavButton text={'Socials'} scrollTo='socials' />

          <NavButton text={'Portfolio'} scrollTo='portfolio' />
          <button>
            
              <NavButton text={'Company'}  to='company'/>
            
          </button>




          <NavButton text={'Contact'} scrollTo='socials' />

        </div>
        <div className='flex tablet:hidden'>
          <img src={burger} alt="" className='className=w-14 h-14 ' onClick={() => setDrawerClicked(drawerClicked = !drawerClicked)} />
        </div>




      </div>
    )
  }
  else {
    return (
      <div id='home' className='h-screen p-20 text-primary flex flex-col items-center box'>
        <div className='w-full flex justify-between items-center'>

          <img src={logo} alt="" className='w-14 h-14' />
          <button onClick={() => { setDrawerClicked(drawerClicked = false); }}>

            <BsXLg size={'40px'} />
          </button>
        </div>
        <Drawer drawerClicked={drawerClicked} setDrawerClicked={setDrawerClicked} />

      </div>)



  }





}

export default Navbar
import React,{useState} from 'react'
import NavButton from '../Components/NavButton'
import logo from '../Assets/Images/logo.png'
import burger from '../Assets/Images/burger.svg'
import { Link } from 'react-router-dom'
import Drawer from '../Components/Drawer'

function Navigation() {
  const [showDrawer,setShowDrawer]= useState(false);
  return (
    <div className='bg-[#000000] text-white flex  laptop:justify-center  py-3 px-5 w-full'>
          <img src={logo} alt='' className='h-[50px]  absolute top-4 left-2 hidden laptop:flex' />
      <img src={burger} alt='' className='h-[40px] laptop:h-[50px]  laptop:hidden absolute right-0' onClick={()=>{setShowDrawer(!showDrawer)}}/>
   
      {showDrawer&&<Drawer />}



      <div className='hidden laptop:flex gap-28 mx-auto justify-center '>
      <Link to='/'>
      <NavButton text="Home"/>
      </Link>
      <Link>
      <NavButton text="Portfolio"/>
      </Link>
      <Link to='/Services'>
      <NavButton text="Services"/>
      </Link>
      <Link>
      <NavButton text="About"/>
      </Link>
      <Link>
      <NavButton text="Contact"/>
      </Link>

    </div>
    </div>
    
  )
}



export default Navigation
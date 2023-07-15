import React from 'react'
import NavButton from '../Components/NavButton'
import logo from '../Assets/Images/logo.png'
import burger from '../Assets/Images/burger.svg'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div className='bg-[#000000] text-white flex justify-between laptop:justify-center items-center py-3 px-5'>
      <Link to='/'>
      <img src={logo} alt='' className='h-[50px]'  />
      </Link>
      <img src={burger} alt='' className='h-16  laptop:hidden' />
      <div className='hidden laptop:flex laptop:gap-28 laptop:mx-auto  laptop:justify-center '>
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
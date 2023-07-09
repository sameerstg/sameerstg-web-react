import React from 'react'
import NavButton from '../Components/NavButton'
import logo from '../Assets/Images/logo.png'
import burger from '../Assets/Images/burger.svg'
function Navigation() {
  return (
    <div className='bg-[#000000] flex justify-between laptop:justify-center items-center py-4 px-5'>
      <img src={logo} alt='' className='h-16'  />
      <img src={burger} alt='' className='h-16  laptop:hidden' />
      <div className='hidden laptop:flex laptop:gap-28 laptop:mx-auto  laptop:justify-center '>
      <NavButton text="Home"/>
      <NavButton text="Portfolio"/>

      <NavButton text="Services"/>

      <NavButton text="About"/>
      <NavButton text="Contact"/>

    </div>
    </div>
    
  )
}

export default Navigation
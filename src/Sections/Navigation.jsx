import React from 'react'
import NavButton from '../Components/NavButton'
function Navigation() {
  return (
    <div className='flex bg-[#000000] mx-auto justify-end'>
      <NavButton text="Home"/>
      <NavButton text="Portfolio"/>

      <NavButton text="Services"/>

      <NavButton text="About"/>
      <NavButton text="Contact"/>

    </div>
  )
}

export default Navigation
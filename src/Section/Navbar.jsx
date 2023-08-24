import React from 'react'
import logo from '../Assets/Images/logo.png'
import burger from '../Assets/Images/burger.svg'
function Navbar() {
  return (
    <div className='mx-4 text-primary'>
        <div className=' my-3 flex justify-between items-center'>
            <img src={logo} alt=""  className='w-14 h-14'/>
            <div className='hidden tablet:flex tablet:flex-row font-sans font-bold gap-4 text-[28px]'>
                <h3>Home</h3>
                <h3>Portfolio</h3>
                <h3>My Team</h3>
                <h3>Contact</h3>
            </div>
            
                <img src={burger} alt="" className='className=w-14 h-14 flex tablet:hidden' />
            
        </div>
    </div>
  )
}

export default Navbar
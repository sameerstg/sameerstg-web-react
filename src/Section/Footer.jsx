import React from 'react'
import logo from '../Assets/Images/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className=' h-10 text-center text-tertiary flex flex-col gap-5'>
      
      <Link to='home' className='flex justify-center items-center gap-5'>
        <img src={logo} alt="" className='w-14 h-14' />
        <h2 className='font-bold text-[20px] font-sans'>Sameerstg</h2>

      </Link>
      {/* email row */}
      <div className='flex justify-center font-bold font-sans gap-4'>
        <h2 className='text-secondary'>
          Email :
        </h2>
        <a className='text-primary' href='mailto:sameerstg@outlook.com'>sameerstg@outlook.com</a>
      </div>

      <h2>
        © 2023. All rights reserved by Sameerstg
      </h2>





    </div>
  )
}

export default Footer
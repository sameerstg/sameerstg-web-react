import React from 'react'
import logo from '../Assets/Images/logo.png'
import { Link } from 'react-scroll'


function Footer() {
  return (
    <div className='my-10 text-center text-primary flex flex-col gap-5'>
      
      <button>
      <Link to='home' smooth={true} duration={500} className='flex justify-center items-center gap-5'>
        <img src={logo} alt="" className='w-14 h-14' />
        <h2 className='font-bold text-3xl font-sans'>Sameerstg</h2>
        
      </Link>
      </button>
      
     
      
 {/* email row */}
 <div className='flex justify-center text-2xl font-bold font-sans gap-4'>
        <h2 className='text-secondary'>
          Email :
        </h2>
        <a className='text-primary' href='mailto:sameerstg@outlook.com'>sameerstg@outlook.com</a>
      </div>
      <h2 className='laptop:text-lg'>
        © 2023. All rights reserved by Sameerstg
      </h2>





    </div>
  )
}

export default Footer
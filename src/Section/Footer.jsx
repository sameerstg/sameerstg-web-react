'use client'
import React from 'react'
import logo from '../Assets/Images/logo.png'
import ScrollToTop from '@/utils/scroll'
import Image from 'next/image'
// import { Link } from 'react-scroll'


function Footer() {
  return (
    <div id='footer' className='mt-20 laptop:mt-52 text-center text-primary flex flex-col gap-4 bg-[#3d3d3d03]  border-t-[1px] border-t-[#000]'>

      <button className='my-5 flex justify-center items-center ' onClick={ScrollToTop}>
        {/* <Link exact to='home' smooth={true} duration={500} className='flex justify-center items-center gap-5'> */}

        <div className='flex justify-center items-center gap-5'>
          <Image src={logo} alt="" className='w-14 h-14 mx-auto' />
          <h2 className='font-bold text-3xl font-sans'>Sameerstg</h2>
        </div>
        {/* </Link> */}
      </button>

      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold '>Contact Me Here ⏬</h1>
        {/* email row */}
        <div className='flex justify-center text-xl laptop:text-2xl font-bold font-sans gap-4'>
          <h2 className='text-secondary'>
            Email :
          </h2>
          <a className='text-primary' href='mailto:sameerstg@outlook.com'>sameerstg@outlook.com</a>
        </div>

        <div className='flex justify-center items-center  gap-10'>

          <div className='flex justify-center text-xl laptop:text-2xl font-bold font-sans gap-4'>


            <a className='text-secondary underline italic' href='https://www.upwork.com/freelancers/~017854bd38d2d41990'> Upwork</a>

          </div>

          <div className='flex justify-center text-xl laptop:text-2xl font-bold font-sans gap-4'>


            <a className='text-secondary underline italic' href='https://www.fiverr.com/users/sameerstg/seller_dashboard'> Fiver</a>

          </div>
          <div className='flex justify-center text-xl laptop:text-2xl font-bold font-sans gap-4'>


            <a className='text-secondary underline italic' href='https://www.linkedin.com/in/sameerstg/'> LinkedIn</a>

          </div>
        </div>

      </div>



      <div className='mb-4' >
        <div className='bg-[#0000007a] h-[1px]  mb-3' />


        <h2 className='text-sm laptop:text-lg'>
          © 2024. All rights reserved by Sameerstg
        </h2>
      </div>






    </div >
  )
}

export default Footer
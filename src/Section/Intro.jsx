'use client'
import React from 'react'
import { ReactTyped } from 'react-typed'
import Particles from '@/Components/ui/particles'

function Intro() {
  return (
    <div className='relative min-h-screen flex flex-col gap-6 justify-center items-center text-center px-6 overflow-hidden'>

      {/* Interactive particle network */}
      <Particles
        count={90}
        connectionDistance={150}
        speed={0.35}
        color="0, 255, 255"
      />

      {/* Content on top */}
      <div className='relative z-10 flex flex-col gap-2 tablet:gap-3 laptop:gap-4'>
        <div className='text-tertiary font-bold text-base tablet:text-xl laptop:text-2xl'>Hello World</div>

        <div className='flex justify-center'>
          <h1 className='text-primary text-3xl tablet:text-4xl laptop:text-6xl font-bold'>I&apos;m</h1>
          <h1 className='text-secondary text-3xl tablet:text-4xl laptop:text-6xl font-bold'>&nbsp;Sameerstg</h1>
        </div>

        <ReactTyped
          className='text-primary text-lg tablet:text-2xl laptop:text-4xl'
          loop={true}
          typeSpeed={40}
          backSpeed={50}
          strings={['a Game Developer', 'a Web Developer', 'an App Developer', 'an Ar/Vr Developer', 'a 3D Artist']}
        />
      </div>

      <div className='relative z-10 text-tertiary text-xs tablet:text-sm laptop:text-lg font-bold font-mono max-w-xl text-center leading-relaxed'>
        With a curiosity for cutting-edge possibilities and a knack for weaving them together, I craft experiences that redefine the possible.
      </div>
    </div>
  )
}

export default Intro

import React from 'react'
import ReactTyped from 'react-typed'










function Intro() {


  return (
    <div className='laptop:h-[90vh] flex flex-col gap-4 justify-center items-center text-xl tablet:2xl laptop:text-5xl'>





      <div className='flex flex-col gap-1 laptop:gap-4'>
        <div className='text-tertiary font-bold'>Hello World</div>

        <div className='flex justify-center'>
          <h1 className='text-primary'>I'm</h1>

          <h1 className='text-secondary'>&nbsp;Sameerstg</h1>
        </div>
        <ReactTyped className='text-primary ' loop={true} typeSpeed={40} backSpeed={50} strings={['a Game Developer', 'a Web Developer', ' an App Developer', 'an Ar/Vr Developer', 'a 3D Artist']} />

      </div>

      <div

        className='text-tertiary text-sm laptop:text-xl font-bold font-mono'>
        With a curiosity for cutting-edge possibilities and a knack for weaving them together, I craft experiences that redefine the possible.
      </div>












    </div>
  )
}

export default Intro

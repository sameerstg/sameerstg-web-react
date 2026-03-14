'use client'
import React from 'react'
import { ReactTyped } from 'react-typed'
import Particles from '@/Components/ui/particles'

import gsap from "gsap";
import { useRef, useEffect } from "react";

function Intro() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: "power4.out",
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);


  return (
    <div ref={containerRef} className='relative w-full h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden'>
      
      {/* Content on top */}
      <div className='relative z-10 flex flex-col gap-3 tablet:gap-5 laptop:gap-6 transition-opacity duration-300'>
        <div className='reveal-text flex justify-center'>
            <div className="relative px-5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#00ffff]/20 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                <span className="text-tertiary font-black text-[10px] tablet:text-xs tracking-[0.5em] uppercase">Hello World</span>
            </div>
        </div>

        <div className='reveal-text flex flex-col items-center gap-1'>
          <h1 className='text-primary text-4xl tablet:text-6xl laptop:text-7xl font-black tracking-tighter'>
            I&apos;m <span className="text-secondary drop-shadow-[0_0_25px_rgba(0,255,255,0.3)]">Sameerstg</span>
          </h1>
          <div className="h-1.5 w-20 bg-gradient-to-r from-transparent via-secondary/60 to-transparent rounded-full" />
        </div>

        <div className="reveal-text">
          <ReactTyped
            className='text-primary text-lg tablet:text-2xl laptop:text-3xl font-bold opacity-70'
            loop={true}
            typeSpeed={40}
            backSpeed={50}
            strings={['a Game Developer', 'a Web Developer', 'an App Developer', 'an Ar/Vr Developer', 'a 3D Artist']}
          />
        </div>
      </div>



      <div className='relative z-10 text-tertiary text-xs tablet:text-sm laptop:text-lg font-bold font-mono max-w-xl text-center leading-relaxed'>
        With a curiosity for cutting-edge possibilities and a knack for weaving them together, I craft experiences that redefine the possible.
      </div>
    </div>
  )
}

export default Intro

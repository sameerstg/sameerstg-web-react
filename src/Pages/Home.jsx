import React from 'react'
import Intro from '../Section/Intro'
import Portfolio from '../Section/Portfolio'
import Socials from '../Section/Socials'
import Technologies from '../Section/Technologies'
import Interests from '../Section/Interests'
import GithubAndTools from '../Section/GithubAndTools'
import OtherLinks from '../Section/OtherLinks'
function Home() {

  return (



    <div id='home' className='text-primary text-xl laptop:text-4xl font-bold text-center flex flex-col gap-8 laptop:gap-20 scroll-smooth ' >
      <Intro />
      
      <div  className='flex flex-col  justify-center items-center gap-8 laptop:gap-5 laptop:my-20' >

        <Socials />
        <Technologies />
        <Interests />
        <GithubAndTools />
      </div>







      <div id='portfolio'>
        <Portfolio />
      </div>


      {/* <OtherLinks/> */}

    </div>
  )
}

export default Home
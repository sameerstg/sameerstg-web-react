import React from 'react'
import Intro from '../Section/Intro'
import Portfolio from '../Section/Portfolio'
import OtherLinks from '../Section/OtherLinks'

function Home() {
  return (
    <div id='home'>
        <div className='text-primary'>
        <Intro/>
       
       <Portfolio/>
       <OtherLinks/>
        </div>
       
    </div>
  )
}

export default Home
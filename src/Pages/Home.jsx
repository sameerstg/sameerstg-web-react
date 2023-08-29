import React from 'react'
import Intro from '../Section/Intro'
import Portfolio from '../Components/Portfolio'

function Home() {
  return (
    <div id='home'>
        <div className='text-primary'>
        <Intro/>
       
       <Portfolio/>
        </div>
       
    </div>
  )
}

export default Home
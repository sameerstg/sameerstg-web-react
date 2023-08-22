import React from 'react'
import Intro from '../Components/Intro'
import Portfolio from '../Components/Portfolio'

function Home() {
  return (
    <div>
        <div className='mx-2'>
        <Intro/>
       
       <Portfolio/>
        </div>
       
    </div>
  )
}

export default Home
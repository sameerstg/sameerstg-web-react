import React from 'react'
import About from '../Sections/About'
import Technologiesogies from '../Sections/Technologies'
import { BrowserRouter } from 'react-router-dom'

function Home() {
  return (
    <div>
        
        <About/>
       {/* <Portfolio/> */}
        <Technologiesogies/>
       

    </div>
  )
}

export default Home
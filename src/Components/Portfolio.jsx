import React from 'react'
import PortfolioBox from './PortfolioBox'
import leet from '../Assets/Images/Portfolio/leet.jpg'
import numberGame from '../Assets/Images/Portfolio/2048.jpg'
function Portfolio() {
  return (
    <div>
        
        
        <h1 className='text-secondary text-[32px]  text-center font-bold'>My Portfolio</h1>
        <PortfolioBox image={leet}/>
        <PortfolioBox image={numberGame}/>
    </div>
  )
}

export default Portfolio
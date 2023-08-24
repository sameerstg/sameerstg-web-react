import React from 'react'
import PortfolioBox from './PortfolioBox'
import leet from '../Assets/Images/Portfolio/leet.jpg'
import numberGame from '../Assets/Images/Portfolio/2048.jpg'
function Portfolio() {
  return (
    <div>
        <h1 className='text-primary text-[32px] font-serif text-center font-bold'>My Portfolio</h1>
        <PortfolioBox image={leet} href={'https://play.google.com/store/apps/details?id=com.Sameerstg.BeLeet'}/>
        <PortfolioBox image={numberGame} href={'https://play.google.com/store/apps/details?id=com.Sameerstg.numberPuzzleGame'}/>
    </div>
  )
}

export default Portfolio
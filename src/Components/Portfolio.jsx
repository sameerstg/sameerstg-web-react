import React from 'react'
// import PortfolioBox from './PortfolioBox'
import leet from '../Assets/Images/Portfolio/leet.jpg'
import numberGame from '../Assets/Images/Portfolio/2048.jpg'
import Carousel from './Carousel'
import {motion} from 'framer-motion'
function Portfolio() {
  return (
    <div id='portfolio'>
        <h1 className='text-primary text-[32px] font-serif text-center font-bold'>My Portfolio</h1>
        {/* <PortfolioBox image={leet} href={'https://play.google.com/store/apps/details?id=com.Sameerstg.BeLeet'}/>
        <PortfolioBox image={numberGame} href={'https://play.google.com/store/apps/details?id=com.Sameerstg.numberPuzzleGame'}/> */}
        <motion.div whileHover={{scale:1.1}} transition={{ease:'easeInOut'}}>

        <Carousel images={[leet,numberGame]}/>
        </motion.div>
    </div>
  )
}

export default Portfolio
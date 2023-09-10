import React from 'react'
// import PortfolioBox from './PortfolioBox'
import leet from '../Assets/Images/Portfolio/leet.jpg'
import numberGame from '../Assets/Images/Portfolio/2048.jpg'
import Carousel from './Carousel'
import { motion } from 'framer-motion'
function Portfolio() {
  return (
    <div id='portfolio' className='laptop:h-screen flex flex-col justify-center'>
      <h1 className='text-primary text-[32px] font-serif text-center font-bold'>My Portfolio</h1>
      <div>

        <div className=' laptop:hidden'>

          <Carousel projects={[{image:leet,link:'https://play.google.com/store/apps/details?id=com.Sameerstg.BeLeet'},
             {image:numberGame,link:'https://play.google.com/store/apps/details?id=com.Sameerstg.numberPuzzleGame'}]} />
        </div>
        <motion.div className='hidden laptop:flex' whileHover={{ scale: 1.1 }} transition={{ ease: 'easeInOut' }}>

          <Carousel projects={[{image:leet,link:'https://play.google.com/store/apps/details?id=com.Sameerstg.BeLeet'}, 
            {image:numberGame,link:'https://play.google.com/store/apps/details?id=com.Sameerstg.numberPuzzleGame'}]} />
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio

import React from 'react'
import { motion } from 'framer-motion'
function Technology({image}) {
  return (
    <motion.img whileHover={{scale:1.2}}    transition={{  ease:[0.36,1,0.26,1]}} className='h-10 tablet:h-14 laptop:h-16 ' src={image} alt="" />
  )
}

export default Technology
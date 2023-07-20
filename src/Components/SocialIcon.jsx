import React from 'react'
import {motion} from 'framer-motion'
function SocialIcon({link,image,initial}) {
  return (
    
      <motion.a whileHover={{scale:1.2}} transition={{  ease:[0.36,1,0.26,1]}} initial={initial} animate={{x:0,y:0}}  target='_blank' rel="noreferrer" href={link}><img  className='h-12 tablet:h-16 laptop:h-24 ' src={image} alt="" /></motion.a>
  )
}

export default SocialIcon
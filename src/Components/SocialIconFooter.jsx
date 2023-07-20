import React from 'react'
import {motion} from 'framer-motion'
function SocialIconFooter({link,image}) {
  return (
    
      <a target='_blank' rel="noreferrer" href={link}><motion.img whileHover={{scale:1.2}}  initial={{x:-1000}} animate={{x:0}} transition={{  ease:[0.36,1,0.26,1]}} className='h-7 tablet:h-10 laptop:h-10 ' src={image} alt="" /></a>
  )
}

export default SocialIconFooter
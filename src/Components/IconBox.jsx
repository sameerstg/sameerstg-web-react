import React from 'react'
import { Link } from 'react-router-dom'

function IconBox({image,href}) {
  return (
    <div className='blue-box p-1'>
      <Link exact to={href} target="_blank" rel="noreferrer noopener" >
        <img src={image} className='w-20' alt="" />
    </Link>
    </div>
   
  )
}

export default IconBox
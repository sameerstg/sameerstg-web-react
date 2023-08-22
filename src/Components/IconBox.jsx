import React from 'react'

function IconBox({image,href,size}) {
  return (
    <div className='box p-1 w-20 h-20'>
 <a href={href}>
        {/* <img src={image} className='w-16' alt="" /> */}
    </a>
    </div>
   
  )
}

export default IconBox
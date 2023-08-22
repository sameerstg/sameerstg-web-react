import React from 'react'

function IconBox({image,href,size}) {
  return (
    <div className='box p-1'>
 <a href={href} target="_blank" rel="noreferrer noopener" >
        <img src={image} className='w-20' alt="" />
    </a>
    </div>
   
  )
}

export default IconBox
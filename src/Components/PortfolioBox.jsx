import React from 'react'

function PortfolioBox({image,href}) {
  return (
    <div className='m-5 p-5'>
      <a href={href} target='_blank' rel="noreferrer noopener">
        <img className='box p-1 m-auto' src={image}  alt="" />

      </a>
    </div>
  )
}

export default PortfolioBox
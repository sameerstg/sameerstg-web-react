import React from 'react'
import { Link } from 'react-router-dom'

function PortfolioBox({image,href}) {
  return (
    <div className='m-5 p-5'>
      <Link exact to={href} target='_blank' rel="noreferrer noopener">
        <img className='box p-1 m-auto' src={image}  alt="" />

      </Link>
    </div>
  )
}

export default PortfolioBox
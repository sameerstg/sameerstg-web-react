import React from 'react'

function PortfolioBox({image}) {
  return (
    <div className='box m-5 p-5'>
        <img className='box border-4' src={image} w-full alt="" />
    </div>
  )
}

export default PortfolioBox
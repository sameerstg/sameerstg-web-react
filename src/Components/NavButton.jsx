import React from 'react'

function NavButton(props) {
  return (
    <div className='mx-1 laptop:mx-4 my-5 border-2 laptop:border-4 rounded-xl  laptop:px-10 laptop:py-2'>
        {props.text}
        </div>
  )
}

export default NavButton
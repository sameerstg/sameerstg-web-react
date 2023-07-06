import React from 'react'

function Drawer({ setShowMenu, showMenu }) {
  return (
    <div className='drawer h-100 w-full flex desktop:hidden font-bold text-xl pt-5'>
        <div className=' flex flex-col text-center mx-auto'>
            <h1 className='border-b-4 border-red-600 px-8 pb-2 mb-2'>Home</h1>
           
            <h1 className=' px-8 pb-2 mb-2'>About Us</h1>
            <h1 className=' px-8 pb-2 mb-2'>Tokenomics</h1>
            <h1 className=' px-8 pb-2 mb-2'>UseCases</h1>
            <h1 className=' px-8 pb-2 mb-2'>RoadMap</h1>
            <h1 className=' px-8 pb-2 mb-2'>Buy Now</h1>
        </div>


        <div className="mobile-menu absolute right-0 mr-10 mt-8">
          <button onClick={() => setShowMenu(!showMenu)}>
            <svg
              className="h-6 w-6  fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                className="text-white fill-current"
                d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
              />
              /
            </svg>
          </button>
        </div>
        
    </div>
  )
}

export default Drawer
import React from 'react'

function InterestBox({text}) {
  return (
    <div className='blue-box p-5 m-5 laptop:w-[400px] flex justify-center text-[#000000] font-bold font-sans text-fourth items-center'>
        {text}
       </div>
  )
}

export default InterestBox
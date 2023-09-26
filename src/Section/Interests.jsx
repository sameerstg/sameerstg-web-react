import React from 'react'
import InterestBox from '../Components/InterestBox'

function Interests() {
  return (
    <div className='flex flex-col gap-5 text-center'>
    <h1 >Interests</h1>
    <div className=' grid grid-cols-1 laptop:grid-cols-4 gap-2 laptop:gap-10 mx-auto justify-center  items-center text-xs font-semibold'>
      <InterestBox text={'🚀 Latest Technologies'} />
      <InterestBox text={'👨‍💻 Software Development'} />
      <InterestBox text={'💭 Conspiracies'} />
      <InterestBox text={'♟⚽🎮 Chess - Football - Video Games'} />


          
    </div>

  </div>
  )
}

export default Interests
import React from 'react'
import logo from '../Assets/Images/logo.png'
import burger from '../Assets/Images/burger.svg'
import { Link } from 'react-scroll'
function Navbar() {
  return (
    <div id='home' className='p-5 text-primary flex justify-between items-center'>

      <img src={logo} alt="" className='w-14 h-14' />
      <div className='hidden tablet:flex tablet:flex-row font-sans font-bold gap-4 text-[28px]'>


        <button>
          <Link duration={500} smooth={true} to='home'>Home</Link>

        </button>
        <button>
          <Link duration={500} smooth={true} to='portfolio'>Portfolio</Link>

        </button>
        <button>
          <Link duration={500} smooth={true} to='socials'>Socials</Link>

        </button>
        <button>
          <Link duration={500} smooth={true} to=''>Company</Link>

        </button>
        <button>
          <Link duration={500} smooth={true} to='socials'>Contact</Link>

        </button>
      </div>

      <img src={burger} alt="" className='className=w-14 h-14 flex tablet:hidden' />


    </div>
  )
}

export default Navbar
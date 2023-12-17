import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
function OtherLink({ link }) {
    return (


        <div
            className='blue-box mx-auto w-full px-1 py-1 laptop:px-10 laptop:py-2 
            flex justify-center items-center'>
            <div className='text-[#000] font-sans font-bold  text-[18px] laptop:text-l'>
                {link.title}
            </div>
            {link.link.map((link, id) =>


                <LinkButton link={link} />)


            }


        </div>


    )
}
function LinkButton({ link }) {
    return (<button>
        <a href={link} target='_blank' rel="noreferrer noopener"  >
            <AiOutlineLink className=' text-[#000] w-4 h-4 laptop:w-8  laptop:h-8' />
        </a>
    </button>);
}

export default OtherLink
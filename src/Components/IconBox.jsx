import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function IconBox({ image, href }) {
  return (
    <div className='blue-box p-2 laptop:p-3 '>
      <Link exact href={href} target="_blank" rel="noreferrer noopener" >
        <Image src={image} className='w-[20px] tablet:w-[30px] laptop:w-[50px]' alt="" />
      </Link>
    </div>

  )
}
export default IconBox;


import React from 'react';

function IconBoxWithoutLink({ image }) {
  return (
    <div className='blue-box p-2 laptop:p-3 '>
      <img src={image} className='w-[30px] laptop:w-[50px]' alt="" />
    </div>

  );
}

export default IconBoxWithoutLink;
import React from 'react'
import aftereffects from '../Assets/Images/Technologies/aftereffects.svg'
import blender from '../Assets/Images/Technologies/blender.svg'
import figma from '../Assets/Images/Technologies/figma.svg'
import flutter from '../Assets/Images/Technologies/flutter.svg'
import photoshop from '../Assets/Images/Technologies/photoshop.svg'
import react from '../Assets/Images/Technologies/react.svg'
import unity from '../Assets/Images/Technologies/unity.svg'
import IconBoxWithoutLink from '../Components/IconBoxWithoutLink'
function Technologies() {
    const technologies = [

        { image: unity },
        { image: blender },
        { image: react },
        { image: flutter },
        { image: figma },
        { image: photoshop },
        { image: aftereffects },
    
      ];
  return (
    <div>
    <h2 className='my-3'>Technologies</h2>
    <div className='flex flex-row gap-2 justify-center'>

      {technologies.map((image, index) =>

        <IconBoxWithoutLink key={index} image={image.image} />

      )}
    </div>
  </div>
  )
}

export default Technologies
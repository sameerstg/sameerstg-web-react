'use client'

import React from 'react'
import { Box, IconButton } from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
// import {motion} from 'framer-motion'
// import { Link } from 'react-router-dom'

// Settings for the slider
const settings = {
  dots: false,
  arrows: true,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  
}

export default function Carousel({images}) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
//   const top = useBreakpointValue({ base: '90%', md: '50%' })
//   const side = useBreakpointValue({ base: '90%', md: '50%' })

  // These are the images used in the slide
  const cards = images;

  return (
    <Box position={'relative'}  overflow={'hidden'} className='box my-10 p-1 m-auto w-2/3'>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton className='left-[1%] top-[50%]'
            size={"sm"} 

        aria-label="left-arrow"
        colorScheme="cyan"
        borderRadius="full"
        position="absolute"
        // left={side}
        // top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton className='right-[1%] top-[50%]'
              size={"sm"} 
 

        aria-label="right-arrow"
        colorScheme="cyan"
        borderRadius="full"
        position="absolute"
        // right={side}
        // top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
           

               <img key={index} className='box m-auto p-1' src={url}  alt="" />
           
           
    
        //   <Box
        //     key={index}
        //     height={'2xl'}
        //     position="relative"
        //     backgroundPosition="center"
        //     backgroundRepeat="no-repeat"
        //     // backgroundSize="cover"
        //     backgroundImage={`url(${url})`}
        //   />
        ))}
      </Slider>
    </Box>
  )
}
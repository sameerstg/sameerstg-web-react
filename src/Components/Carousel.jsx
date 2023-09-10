'use client'

import React from 'react'
import { Box, IconButton } from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

import { Link } from 'react-router-dom'
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

export default function Carousel({ projects }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  //   const top = useBreakpointValue({ base: '90%', md: '50%' })
  //   const side = useBreakpointValue({ base: '90%', md: '50%' })

  // These are the images used in the slide
  const cards = projects;

  return (
    <Box position={'relative'} overflow={'hidden'} className='box my-5 laptop:my-10 m-auto tablet:w-2/3'>
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
      <div className='visible laptop:hidden'>
        <IconButton className='left-[1%] top-[50%]  '

          size={"xs"}
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
          size={"xs"}


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
      </div>
      <div className='hidden laptop:flex'>
        <IconButton className='left-[1%] top-[50%]  '

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
      </div>

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((project, index) => (
         
         <Link exact to={project.link} target="_blank" rel="noreferrer noopener">
          <img key={index} className='box m-auto' src={project.image} alt="" />
         </Link>
         
        ))}
      </Slider>
    </Box>
  )
}
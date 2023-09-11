import React from 'react'
// import PortfolioBox from './PortfolioBox'



import ImageSlider from '../Components/ImageSlider';

import ModelsShower from '../Components/ModelsShower';

function Portfolio() {

  const games = [{
    image: 'https://play-lh.googleusercontent.com/q_gbKbYMl7pcaQCwEdwgcCVOclBjtHQPTAA6-rTfY9Z2Y8hITCGLY-FeQISc4cfUXA=w2560-h1440-rw',
    link: 'https://play.google.com/store/apps/details?id=com.Sameerstg.BeLeet'
  },
  {
    image: 'https://play-lh.googleusercontent.com/fSk5Assdc6kdjk7s8DS34Q87pa1N8HrklYe6AFYdQjLCWp8GaSi2ZZKrdwAZzJthyg=w2560-h1440-rw'
    , link: 'https://play.google.com/store/apps/details?id=com.Sameerstg.numberPuzzleGame'
  }];
  const arts = [{
    image: 'https://cdna.artstation.com/p/assets/images/images/060/431/348/large/sameerstg-danucd-2.jpg?1678552654'
    , link: 'https://www.artstation.com/artwork/lDR1lO'
  },
  {
    image: 'https://cdnb.artstation.com/p/assets/images/images/060/431/169/large/sameerstg-maggie.jpg?1678552359',
    link: 'https://www.artstation.com/artwork/JveaOD'
  },
  {
    image: 'https://cdna.artstation.com/p/assets/images/images/060/431/084/large/sameerstg-lurart.jpg?1678552171',
    link: 'https://www.artstation.com/artwork/PXeaG1'
  },
  {
    image: 'https://cdnb.artstation.com/p/assets/images/images/060/431/021/large/sameerstg-room.jpg?1678552065',
    link: 'https://www.artstation.com/artwork/49Xoyk'
  }];


 

  return (
    <div id='portfolio' className='justify-center m-auto'>
      {/* <h1 className='text-primary text-[32px] font-serif text-center font-bold'>My Portfolio</h1> */}


      <ImageSlider title={"My Games"} contents={games} />
      <ImageSlider title={"My Arts"} contents={arts} />

     

      <ModelsShower/>
    </div>
  )
}

export default Portfolio

import React from 'react'
// import PortfolioBox from './PortfolioBox'



import ImageSlider from '../Components/ImageSlider';
import ModelsShower from '../Components/ModelsShower'
import RenderVideos from '../Components/RenderVideos';
import VrImageSlider from './VrImageSlider';


function Portfolio() {

  const games = [
    {
      image: 'https://play-lh.googleusercontent.com/fSk5Assdc6kdjk7s8DS34Q87pa1N8HrklYe6AFYdQjLCWp8GaSi2ZZKrdwAZzJthyg=w2560-h1440-rw'
      , link: 'https://play.google.com/store/apps/details?id=com.Sameerstg.numberPuzzleGame'
    },
    {
      image: 'https://play-lh.googleusercontent.com/q_gbKbYMl7pcaQCwEdwgcCVOclBjtHQPTAA6-rTfY9Z2Y8hITCGLY-FeQISc4cfUXA=w2560-h1440-rw',
      link: 'https://play.google.com/store/apps/details?id=com.Sameerstg.BeLeet'
    },
    {
      image: 'https://play-lh.googleusercontent.com/nwf3-CXdv6f4Ap1Z1NimoBVvsl-ufCctTiiOw6ykCJXoUc_6YYpRfXyD43xE-E2cUUY=w2560-h1440-rw',
      link: 'https://play.google.com/store/apps/details?id=com.sameerstg'
    }, {
      image: 'https://i.imgur.com/E3qIUDf.png',
      link: 'https://sameerstg.itch.io/bog'
    }
  ];
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
  const partOfGames = [
    {
      image: 'https://play-lh.googleusercontent.com/aMejqYrj5ENS1rivYn_cmX2mQdmmg-GnHuFl8vK8KWQCE1qgvGjopqcrI5s5Ro5MBGo=w2560-h1440-rw',
      link: 'https://play.google.com/store/apps/developer?id=Eviar&hl=en&gl=US'
    },
    {
      image: 'https://play-lh.googleusercontent.com/TEOxhBWGCWdLWv1Z6xhAiHgVAkPjIo7QiaoDz4D13CdPe8qx_XICo8ozDlvBt-xx9Q=w2560-h1440-rw'
      , link: 'https://play.google.com/store/apps/details?id=com.Eviar.Freeziar&hl=en&gl=US'
    },
  ];

  const vrPartOfGames = [
    {
      image: 'https://i.imgur.com/KUxHOVS.png',
      link: 'https://www.meta.com/experiences/7159569204093541/#?'
    },

  ];




  return (
    <div className='mx-2 flex flex-col gap-5'>
      {/* <h1>My Portfolio</h1> */}


      
      <ImageSlider link={'https://play.google.com/store/apps/developer?id=Sameerstg'} title={"My Games"} contents={games} />
      <ModelsShower />
      <ImageSlider link={'https://play.google.com/store/apps/developer?id=Sameerstg'} title={"Vr Games Of Which I Was Part Of"} contents={vrPartOfGames} />
      <ImageSlider link={'https://play.google.com/store/apps/developer?id=Sameerstg'} title={"Games Of Which I Was Part Of"} contents={partOfGames} />
      <ImageSlider link={'https://www.artstation.com/sameerstg5'} title={"My Arts"} contents={arts} />
      <RenderVideos />



    </div>
  )
}

export default Portfolio

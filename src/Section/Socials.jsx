import React from 'react'
import github from '../Assets/Images/Socials/github.svg'
import linkedin from '../Assets/Images/Socials/linkedin.svg'
import artstation from '../Assets/Images/Socials/artstation.svg'
import facebook from '../Assets/Images/Socials/facebook.svg'
import playstore from '../Assets/Images/Socials/playstore.svg'
import instagram from '../Assets/Images/Socials/instagram.svg'
import youtube from '../Assets/Images/Socials/youtube.svg'
import discord from '../Assets/Images/Socials/discord.svg'
import IconBox from '../Components/IconBox'
export default function Socials() {
  const socials = [
    { image: playstore, href: 'https://play.google.com/store/apps/developer?id=Sameerstg' },
    { image: github, href: 'https://github.com/sameerstg' },
    { image: linkedin, href: 'https://www.linkedin.com/in/sameerstg/' },
    { image: artstation, href: 'https://www.artstation.com/sameerstg8' },
    { image: facebook, href: 'https://www.facebook.com/profile.php?id=100069067089055' },
    { image: instagram, href: 'https://www.instagram.com/sameerstg/' },
    { image: youtube, href: 'https://www.youtube.com/channel/UCt68mmpafwAmhsENbxr_5Lg?view_as=subscriber' },
    { image: discord, href: 'https://discord.gg/pJVTACah' },
  ];
  return (
    <div id='socials' >
      <h2 className='my-3'>Socials</h2>
      <div className='flex flex-row gap-2 justify-center'>

        {socials.map((social, index) =>
          <>
            <IconBox key={index} image={social.image} href={social.href} />
          </>
        )}
      </div>
    </div>
  )
}

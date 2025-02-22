import React from 'react'
import OtherLink from '../Components/OtherLink';
function OtherLinks() {


  const links = [{ title: "Chess.com", link: ['https://www.chess.com/member/sameerstg'] },
  // {
  //   title: 'Spotify', link: ['https://open.spotify.com/playlist/78pnjX4ZMXGtXkzVrXDV9g?si=daf0ab126fa7456c'        ]
  // },
  // { title: 'Lichess.org', link: ['https://lichess.org/@/Sameerstg'] },
  { title: 'Monkeytype.com', link: ['https://monkeytype.com/profile/Sameerstg'] },
  { title: 'Leetcode', link: ['https://leetcode.com/sameerstg/'] },
    // { title: 'Steam.com', link: ['https://steamcommunity.com/id/sameerstg/', 'https://steamcommunity.com/profiles/76561198972973479'] },



  ];

  return (
    <div >
      <div className='text-primary font-bold text-4xl text-center my-10'>
        Other Related Links
      </div>
      <div className='grid mx-24 tablet:mx-32 tablet:grid-cols-2 gap-2 laptop:mx-56 laptop:grid-cols-3 laptop:gap-10 justify-center items-center align-middle'>
        {links.map((link, key) =>
          <OtherLink key={key} link={link} />
        )}
      </div>

    </div>
  )
}


export default OtherLinks;

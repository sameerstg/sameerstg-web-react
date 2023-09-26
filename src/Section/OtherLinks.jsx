import React from 'react'
import OtherLink from '../Components/OtherLink';
function OtherLinks() {


    const links = [{ title: "chess.com", link: ['https://www.chess.com/member/sameerstg'] },
    { title: 'lichess.org', link: ['https://lichess.org/@/Sameerstg'] },
    { title: 'steam.com', link: ['https://steamcommunity.com/id/sameerstg/','https://steamcommunity.com/profiles/76561198972973479'] },
    { title: 'monkeytype.com', link: ['https://monkeytype.com/profile/Sameerstg'] },
    { title: 'upwork.com', link: ['https://www.upwork.com/freelancers/~017854bd38d2d41990'] },
    { title: 'spotify', link: ['https://open.spotify.com/playlist/2CEJlLM37vznfBdy0lLcnA?si=14529f4ab1054ab0','https://open.spotify.com/playlist/3ecMcT3A1IkVG3QFbHTxMZ?si=1b83f805e3b84698'] },



    ];

    return (
        <div >
            <div className='text-primary font-bold text-4xl text-center my-10'>
                Other Related Links
            </div>
            <div className='grid mx-auto tablet:mx-32 tablet:grid-cols-2 gap-2 laptop:mx-56 laptop:grid-cols-3 laptop:gap-10'>
                {links.map((link) =>
                        <OtherLink link={link} />
                )}
            </div>
            
        </div>
    )
}


export default OtherLinks;
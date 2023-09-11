import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import OtherLink from '../Components/OtherLink';
function OtherLinks() {


    const links = [{ title: "chess.com", link: 'https://www.chess.com/member/sameerstg' },
{title:'lichess.org',link:'https://lichess.org/@/Sameerstg'},
{title:'steam.com',link:'https://steamcommunity.com/id/sameerstg/'},
{title:'monkeytype.com',link:'https://monkeytype.com/profile/Sameerstg'},
{title:'upwork.com',link:'https://www.upwork.com/freelancers/~017854bd38d2d41990'},
// {title:'.com',link:'https://monkeytype.com/'},



];

    return (
        <div>
            <div className='text-primary font-bold text-4xl text-center my-10'>
                Other Related Links
            </div>
            <div className='text-primary flex justify-around flex-wrap'>
            {links.map((link, id) =>
                <div key={id}  >
                    <OtherLink link={link} />
                </div>
            )}
            </div>
           
        </div>
    )
}

export default OtherLinks
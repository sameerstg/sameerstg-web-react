import React from 'react'
import { Link } from 'react-scroll';

function Drawer({ drawerClicked, setDrawerClicked }) {


    if (drawerClicked) {
        return (<div className='text-primary text-4xl font-bold font-serif py-10 flex flex-col text-center justify-around h-full'>

            <button>

                <Link to='home' onClick={() => { setDrawerClicked(drawerClicked = false); console.log(drawerClicked) }}>Home</Link>
            </button>


            <button>

                <Link to='socials' onClick={() => { setDrawerClicked(drawerClicked = false); console.log(drawerClicked) }}>Socials</Link>
            </button>





            <button>

                <Link to='portfolio' onClick={() => { setDrawerClicked(drawerClicked = false); console.log(drawerClicked) }}>Portfolio</Link>
            </button>

            <button>

                <Link to='footer' onClick={() => { setDrawerClicked(drawerClicked = false); console.log(drawerClicked) }}>Contact</Link>
            </button>


        </div>);
    }



}

export default Drawer
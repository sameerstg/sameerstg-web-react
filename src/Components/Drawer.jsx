import React from 'react'
import { Link } from 'react-scroll';

function Drawer({ drawerClicked, setDrawerClicked }) {


    if (drawerClicked) {
        return (<div className='text-primary text-4xl font-bold font-serif py-10 flex flex-col text-center justify-around h-full'>


            <Link  to='home' onClick={()=>{setDrawerClicked(drawerClicked = false);console.log(drawerClicked)}}>Home</Link>
  
          
          
            <Link  to='socials' onClick={()=>{setDrawerClicked(drawerClicked = false);console.log(drawerClicked)}}>Socials</Link>
  
          
          
          
  
          
            <Link  to='' onClick={()=>{setDrawerClicked(drawerClicked = false);console.log(drawerClicked)}}>Company</Link>
  
          
          
            <Link  to='socials' onClick={()=>{setDrawerClicked(drawerClicked = false);console.log(drawerClicked)}}>Contact</Link>

        </div>);
    } 



}

export default Drawer
import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';

function NavButton({ text, scrollTo, to }) {
    const router = useRouter()

    const handleClick = () => {
        if (window?.location?.pathname === '/') {
            // If the current location is '/', do the scrolling
            document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
        } else {

            console.log("routing should start")
            router.push('/')
        }
    };

    return (
        <div>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hover:border rounded-md px-2 font-semibold hover:font-bold hover:bg-secondary hover:text-[#000]"
                onClick={handleClick}
            >
                <div>{text}</div>
            </motion.button>
        </div>
    )
}

export default NavButton;

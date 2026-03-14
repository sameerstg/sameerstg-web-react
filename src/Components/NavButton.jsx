import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';

function NavButton({ text, scrollTo, to }) {
    const router = useRouter()

    const handleClick = () => {
        if (window?.location?.pathname === '/') {
            // Dispatch a custom event to trigger the 3D slider animation
            window.dispatchEvent(new CustomEvent('navigateToSection', { detail: { id: scrollTo } }));
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

import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

function NavButton({ text, scrollTo, to }) {
    return (
        <div>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className=' hover:border rounded-md px-2 font-semibold hover:font-bold  hover:bg-secondary hover:text-[#000]'>
                    <Link duration={100} smooth={true} exact to={scrollTo}>
                        <div>
                            {text}
                        </div>
                    </Link>
            </motion.button>
        </div>
    )
}
export default NavButton
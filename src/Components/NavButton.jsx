import React from 'react'
import { Link } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'
import { motion } from 'framer-motion'

function NavButton({ text, scrollTo, to }) {
    return (
        <div>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <LinkRouter exact to={to}>
                    <Link duration={500} smooth={true} exact to={scrollTo}>
                        <div>
                            {text}
                        </div>
                    </Link>
                </LinkRouter>
            </motion.button>
        </div>
    )
}
export default NavButton
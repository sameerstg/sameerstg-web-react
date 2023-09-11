import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { motion } from 'framer-motion'
function OtherLink({ link }) {
    return (

        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <button
                className='blue-box text-[#000] font-bold px-3 py-1 laptop:text-2xl laptop:px-10 laptop:py-2 '>
                <a href={link.link} target='_blank' rel="noreferrer noopener" className='flex gap-4' >
                    <div>{link.title}</div>
                    <AiOutlineLink />
                </a>

            </button>
        </motion.div>

    )
}

export default OtherLink
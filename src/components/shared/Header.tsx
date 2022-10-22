import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = ({isOpen, onClose}) => {
    const variants = {
        open: {x: 0, opacity: 1},
        closed: {x: '200%', opacity: 0}
    }
    return (
        <>
        <motion.div
            initial={{x: '200%', opacity: 0}}
            onClick={onClose}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.75 }}
            className='flex bg-grey-dark z-20 w-3/4 lg:w-1/2 justify-evenly text-3xl font-bold overflow-hidden h-screen fixed flex-col top-0 right-0 p-6 gap-y-5'>
                <motion.div 
                    whileHover={{scale: 1.1}}
                    >
                    <Link to={'/dev/'} className='cursor-pointer'>
                        Home
                    </Link>
                    </motion.div>
                <motion.div 
                    whileHover={{scale: 1.1}}
                    >
                    <Link to={'/dev/projects'} className='cursor-pointer'>
                        Projects
                    </Link>
                </motion.div>
                <motion.div 
                    whileHover={{scale: 1.1}}
                    >
                    <Link to={'/dev/about'} className='cursor-pointer'>
                        About
                    </Link>
                </motion.div>
                <motion.div 
                    whileHover={{scale: 1.1}}
                    >
                    <Link to={'/dev/contact'} className='cursor-pointer'>
                        Contact
                    </Link>
                </motion.div>
        </motion.div>
        {
            isOpen && 
            <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: {opacity: 1},
                    closed: {opacity: 0}
                }}
                transition={{duration:2}}
                onClick={onClose}
                className="bg-black z-10 bg-opacity-40 fixed w-screen inset-0 h-screen"></motion.div>
        }
        </>
    )
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<Boolean>(false)
  return (
    <>
    <div className='w-full flex justify-end pb-10'>
        <button className='lg:hidden cursor-pointer' onClick={() => setOpenMenu(openMenu => !openMenu)}>
            <Icon icon={'charm:menu-hamburger'} className='cursor-pointer' height={30} />
        </button>
        <div className="gap-x-10 hidden lg:flex">
            <Link to={'/dev/'} className='cursor-pointer'>
                Home
            </Link>
            <Link to={'/dev/projects'} className='cursor-pointer'>
                Projects
            </Link>
            <Link to={'/dev/about'} className='cursor-pointer'>
                About
            </Link>
            <Link to={'/dev/contact'} className='cursor-pointer'>
                Contact
            </Link>
        </div>
    </div>
    <Sidebar isOpen={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  )
}

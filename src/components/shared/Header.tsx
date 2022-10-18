import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [openMenu, setOpenMenu] = useState<Boolean>(false)
  return (
    <div className='w-full flex justify-end'>
        <button className='lg:hidden' onClick={() => {setOpenMenu(!openMenu)}}>
            <Icon icon={'charm:menu-hamburger'} height={30} />
        </button>
        <div className="gap-x-10 hidden lg:flex">
            <Link to={'/dev/'}>
                Home
            </Link>
            <Link to={'/dev/projects'}>
                Projects
            </Link>
            <Link to={'/dev/about'}>
                About
            </Link>
            <Link to={'/dev/contact'}>
                Contact
            </Link>
        </div>
    </div>
  )
}

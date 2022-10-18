import React, { useState } from 'react'
import { Icon } from '@iconify/react';

export default function Header() {
  const [openMenu, setOpenMenu] = useState<Boolean>(false)
  return (
    <div className='w-full bg-black flex justify-end'>
        <button onClick={() => {setOpenMenu(!openMenu)}}>
            <Icon icon={'charm:menu-hamburger'} height={30} />
        </button>
    </div>
  )
}

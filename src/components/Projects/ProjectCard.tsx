import { Icon } from '@iconify/react'
import React from 'react'
import { Link, Path } from 'react-router-dom'
import Button from '../shared/Button'

interface Props {
    image: string,
    title: String,
    subtext: String,
    link: Partial<Path>,
}

export default function ProjectCard({title, subtext, image, link}: Props) {
  return (
    <Link to={'/dev/' + link}>
        <div className='flex gap-y-2 flex-col border border-white border-opacity-40 rounded-lg'>
            <img src={image} className='h-[400px] rounded-t-lg object-center object-cover' alt='project-image' />
            <div className="text-left flex gap-y-5 p-6 flex-col">
                <h2 className='font-bold text-3xl'>{title}</h2>
                <p className='font-thin text-xs'>{subtext}</p>
                <div className="flex items-center gap-x-2 text-green-500 font-bold">
                  <p>Learn More</p>
                  <Icon icon={'akar-icons:arrow-right'} height={20} />
                </div>
            </div>
        </div>
    </Link>
  )
}

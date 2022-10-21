import { Icon } from '@iconify/react'
import { useParams } from 'react-router-dom'
// @ts-ignore
import projects from '../assets/data/projects.js'
import Pill from '../components/Pill.js'

export default function Project() {
  const {slug} = useParams()
  const project = projects.data.filter((project) => {
    return project.link == slug
  }).find(Boolean)
  return (
    <div className="w-full">
        <div className="max-w-fit">
            <h1 className='lg:text-5xl text-4xl text-left font-bold mb-5'>{project.title}</h1>
            <div className="w-full h-1 bg-primary"></div>
        </div>
        <div className="flex flex-col mt-10 justify-center gap-y-5">
            <img src={project.image} className='h-[500px] object-cover object-left lg:object-center' alt="" />
            <div className="text-left">
                <p className='text-left text-base font-thin'>
                    {project.description}
                </p>
                <h2 className='font-bold text-xl mt-5'>Technologies used</h2>
                <div className="flex flex-wrap gap-x-2 gap-y-3 mt-5">
                    {
                        project.tech.map((tech) => {
                            return <Pill text={tech} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}   

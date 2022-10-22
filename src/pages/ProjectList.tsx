import React, { useState } from 'react'
import { Path } from 'react-router-dom'
import ProjectCard from '../components/Projects/ProjectCard'
//@ts-ignore
import projectsJSON from '../assets/data/projects'
import PageTransition from '../components/Transitions/PageTransition'
import Underline from '../components/Underline'

interface Project{
    image: string,
    title: String,
    subtext: String,
    link: Partial<Path>,
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>(projectsJSON.data)
  return (
    <>
        <div className="max-w-fit">
            <h1 className='lg:text-5xl text-4xl  text-left font-bold mb-5'>Projects</h1>
            <h2 className='lg:text-3xl text-2xl text-left font-bold'>Cool stuff I've been a part of! 😎</h2>
            <Underline />
        </div>
        <PageTransition>
            <div className="grid grid-cols-1 mt-20 lg:grid-cols-2 gap-x-5 gap-y-5">
            {
                projects?.map((project:Project) => {
                    return (
                        <ProjectCard 
                            title={project.title}
                            subtext={project.subtext}
                            image={project.image}
                            link={project.link}
                        />
                    )
                })
            }
            </div>
        </PageTransition>
    </>
  )
}

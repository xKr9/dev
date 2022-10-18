import React, { useState } from 'react'
import { Path } from 'react-router-dom'
import ProjectCard from '../components/Projects/ProjectCard'
import projectsJSON from '../assets/data/projects.json'

interface Project{
    image: string,
    title: String,
    subtext: String,
    link: Partial<Path>,
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(projectsJSON.data)
  return (
    <div>
        <h1 className='text-5xl text-left font-bold'>Projects</h1>
        <div className="grid grid-cols-1 mt-20 lg:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-5">
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
    </div>
  )
}

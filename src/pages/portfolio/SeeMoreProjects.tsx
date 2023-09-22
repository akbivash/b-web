import React from 'react'
import { projects } from '../../constants/projects'
import PortfolioCard from './PortfolioCard'

const SeeMoreProjects = ({title}:any) => {
  return (
    <div className='grid  gap-sm'> 
        <h2 className='text-sm border-b-md border-blue-default w-fit pb-xs font-bold'>See more</h2>
       <div className='grid gap-sm md:grid-cols-2'>
       {projects.map((project) => {
            if(project.title !== title){
                return  <PortfolioCard project={project} key={project.title}/>
            }
        })}
       </div>
    </div>
  )
}

export default SeeMoreProjects
import { projects } from '../../constants/projects'
import PortfolioCard from './PortfolioCard'
import { CiCircleMore } from "react-icons/ci";

const SeeMoreProjects = ({title}:{title:string}) => {
  return (
    <div className='grid  gap-sm'> 
        <h2 className='uppercase w-fit flex items-center gap-xs font-bold'><CiCircleMore className='text-blue-dark'/> More Projects</h2>
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
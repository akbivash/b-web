import { FaGithub } from "react-icons/fa";
import { projects } from "../../constants/projects";
import {BiShow} from 'react-icons/bi'

type PortfolioDetails = {
  title: string | null;
};

const PortfolioDetails = ({ title }: PortfolioDetails) => {
  return (
    <>
      {projects.map((project) => {
        if (project.title === title) {
          return (
            <div
              key={project.title}
              className="grid  w-full  h-fit gap-md "
            >
              <img
                src={project.image}
                alt=""
                className="h-[300px] sm:h-[400px] p-4 object-cover w-full "
              />
              <div className="grid gap-xs">
                <div className="font-bold text-blue-default">{project.title}</div>
                <div className="">{project.description}</div>
                <div className=" flex items-center gap-10">
                  <a
                    href={project.github}
                    target="_blank"
                    className=""
                  >
                    <FaGithub fontSize={30}/>
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    className="  font-bold"
                  >
                    <BiShow fontSize={40}/>
                  </a>
                </div>
                <div >
                  <h2 className="font-bold">Technology used</h2>
                  <div className="my-4 flex gap-sm flex-wrap">{project.stacks.map((stack) => {
                    let Icon = stack.icon
                    return <span key={stack.title} ><Icon fontSize={30} className={` text-blue-default` }/></span>
        })}</div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default PortfolioDetails;

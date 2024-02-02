import { FaGithub } from "react-icons/fa";
import { projects } from "../../constants/projects";

type PortfolioDetailsProps = {
  title: string | null;
};

const PortfolioDetails = ({ title }: PortfolioDetailsProps) => {
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
                className="h-[300px] sm:h-[400px] p-4 object-contain w-full "
              />
              <div className="grid gap-xs">
                <div className="font-bold text-blue-default">{project.title}</div>
                <div className="">{project.description}</div>
                <div className=" flex items-center gap-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"

                    className=""
                  >
                    <FaGithub fontSize={30}/>
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className=" bg-blue-dark text-white px-sm rounded-sm p-xs font-bold"
                  >
                    Demo
                  </a>
                </div>
                <div >
                  <h2 className="font-bold text-black-default">Technology used</h2>
                  <div className="my-4 flex gap-sm flex-wrap">{project.stacks.map((stack) => {
                    const Icon = stack.icon
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

import { useLocation } from "react-router-dom";
import TitleWithLine from "../../components/ui/TitleWithLine";
import { projects } from "../../constants/projects";
import PortfolioDetails from "./PortfolioDetails";
import SeeMoreProjects from "./SeeMoreProjects";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const title = urlSearchParams.get("title");

  if (title === null) {
    return (
      <>
            <div className="grid py-sm gap-md">
            <div className=" relative h-60 w-full flex items-center justify-center">
        <img
          src="https://miro.medium.com/v2/resize:fit:1100/1*OlgqUIhvl5-9dZISlZ2-yQ.jpeg"
          alt=""
          className="absolute h-full z-30 w-full object-cover "
        />
      </div>
        <div className="grid gap-sm md:flex max-w-4xl mx-auto">
          <TitleWithLine title="Some of our cool projects are available for you!" />
        </div>

        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3 place-items-center ">
          {projects.map((p) => {
            return (
              <PortfolioCard project={p} key={p.title}/>
            );
          })}
        </div>
      </div>
      </>
    );
  } else {
    return <div className="grid gap-md justify-center">
    <PortfolioDetails title={title} />
    <SeeMoreProjects title={title}/>
    </div>;
  }
  
};

export default Portfolio;

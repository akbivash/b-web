import { Link } from "react-router-dom";

type PortfolioCardProps = {
  project: {
    title: string;
    url: string;
    image: string;
  };
};
const PortfolioCard = ({ project }: PortfolioCardProps) => {
  return (
    <Link
      to={`/portfolio?title=${project.title}`}
      key={project.url}
      className=" w-full  shadow-md "
    >
      <img
        src={project.image}
        alt=""
        className="h-60 w-full object-contain"
      />
      <p className="font-bold p-sm">{project.title}</p>
    </Link>
  );
};

export default PortfolioCard;

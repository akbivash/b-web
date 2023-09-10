import MenuIcon from "./MenuIcon";
import { Link } from "react-router-dom";
import SocialIcons from "../ui/SocialIcons";
import { links } from "../../constants/links";
import { ILink } from "../../types";

const Right = () => {
  
  return (
    <div className="flex  gap-14 z-50">
      <MenuIcon />

      <div className="md:flex  gap-10 items-center hidden">
        {links.navLinks.map((link: ILink) => {
          return (
            <Link
              to={link.link}
              key={link.title}
              className="flex font-semibold items-center justify-between hover:text-orange-default"
            >
              {link.title}{" "}
            </Link>
          );
        })}
      </div>
      <div className="hidden md:block">
        <SocialIcons />
      </div>
    </div>
  );
};

export default Right;

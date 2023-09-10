import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SocialIcons from "../ui/SocialIcons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer relative z-10   w-full pt-sm  ">
      {/* this div is used to show parallelx effect , background attachment is fixed for main div. and other content is fixed. by making this transparent we are able to see this effect. */}
      <div className=" hidden sm:block bg-transparent z-10 h-[60vh] w-full"></div>

      <div className="w-full max-w-[1500px]   px-sm md:px-md mx-auto  sm:fixed sm:flex sm:gap-20 sm:items-around sm:flex-col  sm:top-[45vh]  h-full  py-md">
        <div className="grid gap-md sm:flex sm:justify-around items-center">
          {/* logo and address  */}
          <div className="grid gap-sm">
            <code className="text-sm opacity-70">
              <span className="">B</span>-
              <span className="text-orange-default ">Web</span>
            </code>

            <div className="grid gap-xs">
              <div>
                <LocationOnIcon /> <span>Kathmandu, Nepal</span>
              </div>
              <div>
                <PhoneIcon /> <span>9807559979</span>
              </div>
              
            </div>
          </div>

          {/* newsletter */}
          <div className="w-fit grid gap-xs">
            <SocialIcons />
          </div>

          <div className="grid gap-xs font-bold">
            <Link to="/" className="text-blue-default w-fit hover:text-orange-default">
              Portfolio
            </Link>
            <Link to="/" className="text-blue-default w-fit hover:text-orange-default">
              Blogs
            </Link>
            <Link to="/" className="text-blue-default w-fit hover:text-orange-default">
              Career
            </Link>
            <Link to="/" className="text-blue-default w-fit hover:text-orange-default">
              Services
            </Link>
          </div>
        </div>

        {/* bottom  */}
        <div className="text-center relative  pt-sm  ">
          <p className="text-gray-dark">2023 @ All rights reserved by b-web</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

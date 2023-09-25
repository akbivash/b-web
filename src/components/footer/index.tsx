import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SocialIcons from "../ui/SocialIcons";
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';


const links = ['Portfolio','Blogs', 'Services', 'About']

const Footer = () => {
  return (
    <div className="footer relative z w-full   ">
      {/* this div is used to show parallelx effect , by making this div transparent we can see that effect. */}
      <div className=" hidden sm:block bg-transparent h-[60vh] w-full"></div>

      <div className=" w-full left-0 z-[-10] sm:fixed sm:flex sm:gap-20 sm:items-around sm:justify-start sm:flex-col  sm:top-[45vh]  h-full py-sm  ">
        <div className="grid gap-md sm:flex mx-auto w-full max-w-[1500px] px-sm  sm:justify-around items-center">
          {/* logo and address  */}
          <div className="grid gap-sm">
            <code className="text-2xl opacity-70">
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
              <div>
                <EmailIcon/> akbivash@gmail.com
              </div>
              
            </div>
          </div>

          {/* newsletter */}
          <div className="w-fit grid gap-xs">
            <SocialIcons />
          </div>

          <div className="grid gap-xs font-bold">
            {links.map((link) => {
              return    <Link to={link.toLocaleLowerCase()} key={link} className="text-blue-default w-fit hover:text-orange-default">
              {link}
            </Link>
            })}
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

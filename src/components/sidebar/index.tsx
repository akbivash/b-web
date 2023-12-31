import React, { useEffect, useRef } from "react";
import useComponents from "../../store/components";
import SearchComponent from "./Search";
import { Link } from "react-router-dom";
import SocialIcons from "../ui/SocialIcons";
import { links } from "../../constants/links";
import { ILink } from "../../types";

const Sidebar = () => {
  const { isSidebarOpen, hanldeSidebar, closeSidebar } = useComponents();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e:any) => {
      if (
        e.target.className !== undefined &&
        e.target.className.includes("menu-icon")
      )
        return;
      if (ref.current && !ref.current.contains(e.target)) {
        closeSidebar();
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, isSidebarOpen]);
  
  return (
    <div
      ref={ref}
      className={`${
        isSidebarOpen
          ? "sidebar-content left-0 w-40 transition-all duration-300 "
          : "w-0 transition-all duration-1000 left-[-100%] "
      }  absolute top-0 bg-white shadow-sm min-h-screen grid gap-10 place-content-start p-sm sm:px-md md:hidden w-fit `}
    >
      {/* logo  */}
      <Link to="/" onClick={hanldeSidebar} className="w-fit">
        <code className="  w-fit text-2xl opacity-70">
          <span className="">B</span>-
          <span className="text-orange-default ">Web</span>
        </code>
      </Link>

      <SearchComponent />

      {/* links  */}
      {links.navLinks.map((link: ILink) => {
        return (
          <Link
            to={link.link}
            key={link.title}
            onClick={hanldeSidebar}
            className="flex font-semibold items-center justify-between hover:text-orange-default"
          >
            {link.title}{" "}
            <span className=" "> {<link.icon className="" />} </span>
          </Link>
        );
      })}

      <SocialIcons />
    </div>
  );
};

export default Sidebar;

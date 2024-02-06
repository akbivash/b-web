import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { links } from "../../../constants/links";
import useComponents from "../../../store/components";
import { ILink } from "../../../types";
import SocialIcons from "../../ui/SocialIcons";
import SearchComponent from "./Search";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useComponents();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      console.log(target.className)
      if (
      typeof  target.className === 'string' &&
        target.className.includes("menu-icon")
      )
        return;

      if (ref.current && !ref.current.contains(target)) {
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
      <Link to="/"  className="w-fit" onClick={closeSidebar}>
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
            onClick={closeSidebar}
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

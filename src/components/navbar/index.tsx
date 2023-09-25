import React from "react";
import { useEffect } from "react";
import Sidebar from "../sidebar";
import Left from "./Left";
import Right from "./Right";
import useComponents from "../../store/components";

const Navbar = () => {
  const { closeSidebar, isSidebarOpen } = useComponents();

  useEffect(() => {
    function detectSidebar(e: any) {
      if (
        e.target.className !== undefined &&
        typeof e.target.className !== "object"
      ) {
        if (
          !e.target.className.includes("sidebar-content") &&
          !e.target.className.includes("menu-icon")
        ) {
          closeSidebar();
        }
      }
    }

    if (isSidebarOpen) {
      window.addEventListener("click", detectSidebar);
    } else {
      window.removeEventListener("click", detectSidebar);
    }

    return () => {
      window.removeEventListener("click", detectSidebar);
    };
  }, [isSidebarOpen]);

  return (
    <div className="fixed left-0 z-50  top-0 w-full">
      <div className="flex items-center justify-between w-full  max-w-[1500px] mx-auto h-[10vh] bg-white px-sm sm:px-md  ">
        <Left />
        <Right />
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;

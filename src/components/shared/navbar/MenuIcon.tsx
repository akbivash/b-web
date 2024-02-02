import { useEffect, useRef } from "react";
import useComponents from "../../../store/components";


const MenuIcon = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const { hanldeSidebar, isSidebarOpen } = useComponents();

  useEffect(() => {
    if (!menuRef.current) return;
    if (isSidebarOpen) {
      menuRef.current.classList.add("open");
    } else {
      menuRef.current.classList.remove("open");
    }
  }, [isSidebarOpen]);

  return (
    <div
    
      className="menu-icon   grid gap-2 relative md:hidden "
      onClick={hanldeSidebar}
      ref={menuRef}
    >
      <i className="bars menu-icon  "></i>
      <i className="bars menu-icon"></i>
      <i className="bars menu-icon"></i>
    </div>
  );
};

export default MenuIcon;

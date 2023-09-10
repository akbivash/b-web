import Sidebar from "../sidebar";
import Left from "./Left";
import Right from "./Right";

const Navbar = () => {
  return (
    <div className="fixed left-0 z-50  top-0 w-full">
        <div className="flex items-center justify-between w-full h-[10vh] bg-white px-sm sm:px-md  ">
          <Left />
         <Right />
          <Sidebar />
        </div>
    </div>
  );
};

export default Navbar;

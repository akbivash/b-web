import { Link } from "react-router-dom";
import React from "react";
const Left = () => {
  return (
    <>
     <Link to='/'>
     <code className="text-2xl opacity-70">
        <span className="">B</span>-
        <span className="text-orange-default ">Web</span>
      </code>
     </Link>
    </>
  );
};
 
export default Left;

import { Link } from "react-router-dom";

const Left = () => {
  return (
    <>
     <Link to='/'>
     <code className="text-sm opacity-70">
        <span className="">B</span>-
        <span className="text-orange-default ">Web</span>
      </code>
     </Link>
    </>
  );
};

export default Left;

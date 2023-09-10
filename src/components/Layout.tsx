import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="w-full max-w-[1500px]   p-sm md:px-md mx-auto">{children}</div>;
};

export default Layout;

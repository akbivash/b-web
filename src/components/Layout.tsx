import React from "react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="w-full max-w-[1500px] z-50 px-sm  mx-auto">{children}</div>;
};

export default Layout;

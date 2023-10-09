import React from "react";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ScrollToTop from "./components/ui/ScrollToTop";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import Services from "./pages/services";
import PageNotFound from "./pages/error/PageNotFound";
import Messenger from "./components/ui/Messenger";

const RoutesProvider = () => {
  return <RouterProvider router={router} />;
};

const Root = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="pt-[10vh] relative z-40 bg-white w-full max-w-[1500px] mx-auto px-sm ">
        <Outlet />
        <Messenger />
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default RoutesProvider;

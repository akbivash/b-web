import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Footer from "./components/shared/footer";
import Navbar from "./components/shared/navbar";
import Messenger from "./components/ui/Messenger";
import ScrollToTop from "./components/ui/ScrollToTop";
import Main from "./pages";
import About from "./pages/about";
import PageNotFound from "./pages/error/PageNotFound";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";

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
        element: <Main />,
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

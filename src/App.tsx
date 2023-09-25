import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/Layout";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import ScrollToTop from "./components/ui/ScrollToTop";
import Services from "./pages/services";
import PageNotFound from "./pages/error/PageNotFound";

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Navbar />
        <div className="pt-[10vh] relative z-40 bg-white pb-md  ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Layout>
    </>
  );
}

export default App;

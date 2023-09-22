import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/Layout";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";


function App() {
  return (
  <>
      <Navbar />
      <Layout>
      <div className="pt-[12vh] relative z-40 bg-white pb-md  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Layout>
    <Footer/>
    </>
  );
}

export default App;

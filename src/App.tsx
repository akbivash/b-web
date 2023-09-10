import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/Layout";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


function App() {
  return (
  <>
      <Navbar />
      <Layout>
      <div className="pt-[12vh] relative z-40 bg-white pb-md  ">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Layout>
    <Footer/>
    </>
  );
}

export default App;

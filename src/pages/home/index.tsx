import '../../styles/home.css'
import HeroSlider from "./components/hero-slider";
import About from "./components/About";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Contact from '../../components/contact';
const Index = () => {

  return (
    <div className="bg-fixed grid gap-20">
      <HeroSlider />
      <About/>
      <Services/>
      <Steps/>
      <Contact/>
    </div>
  );
};

export default Index;

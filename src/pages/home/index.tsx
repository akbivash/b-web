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
      <div className='grid gap-sm place-items-center'>
        <h2 className='text-2xl'>CONTACT</h2>
      <Contact/>
      </div>
    </div>
  );
};

export default Index;

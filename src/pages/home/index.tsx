import Contact from '../../components/shared/contact';
import '../../styles/home.css';
import About from "./components/About";
import Services from "./components/Services";
import Steps from "./components/Steps";
import HeroSlider from "./components/hero-slider";

const Home = () => {
  return (
    <div className="bg-fixed pt-sm grid gap-20">
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

export default Home;

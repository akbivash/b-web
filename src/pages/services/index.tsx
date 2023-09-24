import TitleWithLine from "../../components/ui/TitleWithLine";
import { services } from "../../constants/services";
import ServiceCard from "../home/components/ServiceCard";

const Services = () => {
  return (
    <div className="grid gap-md">
      <div className=" relative h-80 w-full flex items-center justify-center">
        <div className="absolute z-50 h-full w-full bg-[rgba(0,0,0,0.5)]"></div>
        <img
          src="https://wallpapercave.com/wp/wp9486379.jpg"
          alt=""
          className="absolute h-full z-30 w-full object-cover "
        />
        <h2 className="z-50 text-3xl absolute text-white font-bold">Services</h2>
      </div>
      <div className="grid gap-sm">
        <TitleWithLine title="Services" />
       <div className="lg:flex grid gap-sm">
       <div className="font-bold text-lg">
          We position our clients at the forefront of their field by advancing
          an agenda.
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
          fugit vel!
        </p>
       </div>
      </div>
      <div className="grid gap-sm md:grid-cols-3">
        {services.map((service) => {
            return <ServiceCard key={service.title} title={service.title} bullets={service.bullets} description={service.description} icon={service.icon}/>
        })}
      </div>
    </div>
  );
};

export default Services;

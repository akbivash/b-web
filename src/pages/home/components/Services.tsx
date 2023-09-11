import TitleWithLine from "../../../components/ui/TitleWithLine";
import { services } from "../../../constants/services";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";

const Services = () => {
  return (
    <div className="grid gap-10">
      <div className="grid place-items-center mx-auto max-w-[1100px] gap-10  justify-center w-full md:flex">
        <TitleWithLine title="It was a very common question that What IT Service We Provide now!" />
        <p className="text-xs leading-7  text-gray-dark w-full ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          molestias?
        </p>
      </div>
      <div className="grid gap-4  h-full md:grid-cols-3">
        {services.map((service: ServiceCardProps) => {
          return (
            <ServiceCard
              key={service.title}
              bullets={service.bullets}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;

import TitleWithLine from "../../../components/ui/TitleWithLine";
import { services } from "../../../constants/services";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";

const Services = () => {
  return (
    <div className="grid gap-10">
      <div className=" mx-auto  ">
        <TitleWithLine title="What IT services we provide now!" />
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

import TitleWithLine from "../../../components/ui/TitleWithLine";
import { services } from "../../../constants/services";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";

const Services = () => {
  return (
    <div className="grid gap-10">
      <div className="grid place-items-center mx-auto max-w-[1100px] gap-10  justify-center w-full md:flex md:items-start">
        <TitleWithLine title="It was a very common question that What IT Service We Provide now!" />
        <p className="text-xs tracking-wide    w-full ">
        We believe our longevity in this industry and our repeat business are proof positive of our commitment to delivering outstanding results for our clients.
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

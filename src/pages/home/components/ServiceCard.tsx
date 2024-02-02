import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ElementType } from "react";

export interface ServiceCardProps {
  icon: ElementType
  title: string;
  description: string;
  bullets: string[];
}

const ServiceCard = ({
  icon,
  title,
  bullets,
  description,
}: ServiceCardProps) => {
  const Icon = icon;
  return (
    <div className="shadow-md grid gap-sm rounded-sm place-content-start   p-sm">
      <i className="text-blue-default ">
        <Icon fontSize="large" />
      </i>
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
      <div className="grid gap-xs">
        {bullets.map((b) => {
          return (
            <div className="flex gap-4" key={b}>
              <ArrowForwardIcon className="text-blue-default" /> {b}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard;

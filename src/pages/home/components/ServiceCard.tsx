import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export interface ServiceCardProps {
  icon: any;
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
  let Icon = icon;
  return (
    <div className="bg-black-dark grid gap-10 place-content-start  text-white p-sm">
      <i className="text-orange-default  ">
        <Icon fontSize="large" />
      </i>
      <h2 className="text-2xl">{title}</h2>
      <p>{description}</p>
      <div className="grid gap-4">
        {bullets.map((b) => {
          return (
            <div className="flex gap-4" key={b}>
              <ArrowForwardIcon className="text-orange-default" /> {b}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCard;

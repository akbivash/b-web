import React from "react";
import CircularProgressBar from "../../../components/ui/CircularProgressBar";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { steps } from "../../../constants/data";
import { IStep } from "../../../types";
import TitleWithLine from "../../../components/ui/TitleWithLine";

const Steps = () => {
  return (
    <div>
      <h2 className="text-sm font-bold steps-header relative pt-md md:pt-[0px] w-full">
        <TitleWithLine title="There are some easy steps to work with our company!" />
      </h2>
      <div className="grid gap-20 sm:grid-auto-cols mt-20 ">
        {steps.map((step, index) => {
          return (
            <Step
              key={step.title}
              icon={step.icon}
              description={step.description}
              title={step.title}
              link={step.link}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Steps;

const Step = ({ icon, title, description, link, index }: IStep) => {
  return (
    <div
      className={`${
        index === 1 && "sm:row-span-2 "
      } grid gap-xs place-items-center   `}
    >
      <div className="grid  gap-xs place-items-center ">
        <CircularProgressBar value={90} Icon={icon} index={index} />
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="max-w-sm">{description}</p>
        <button className="font-bold text-blue-default flex ">
          {" "}
          Setup now <DoubleArrowIcon />
        </button>
      </div>
    </div>
  );
};

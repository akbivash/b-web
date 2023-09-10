import React, { ReactElement, useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface ICircularProgress {
  value: number;
  Icon: React.ElementType;
  index: number;
}

const CircularProgressBar = ({ value, Icon, index }: ICircularProgress) => {
  const ref = useRef<HTMLDivElement>(null);
  const state = useIntersectionObserver(ref);
  const [progressValue, setProgressValue] = useState(0);
  let animationFrameId: number | null = null;
  let even = index % 2 === 0;

  useEffect(() => {
    if (ref.current === null || !state?.isIntersecting) return;
    if (value > 100) value = 100;

    const updateProgress = () => {
      if (progressValue < value) {
        setProgressValue((prev) => prev + 1);
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        console.log("clear");
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [state, progressValue]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.background = `conic-gradient(#0284c7 ${
        progressValue * 3.6
      }deg, #fff ${progressValue * 3.6}deg)`;
    }
  }, [progressValue]);

  return (
    <div
      ref={ref}
      className={` ${
        even && "rotate-180"
      } circular-progress-bar  relative grid place-items-center h-40 w-40 rounded-full`}
    >
      {value}
      <div
        className={`${
          even && "rotate-[-180deg]"
        } z-50  absolute text-orange-default`}
      >
        {Icon !== null && <Icon fontSize="large" />}
      </div>
      <span
        className={` bg-gradient-to-br from-[#7dd3fc] to-[#075985] absolute z-50 top-0 left-[35%] w-10 h-10  rounded-full`}
      ></span>
    </div>
  );
};

export default CircularProgressBar;

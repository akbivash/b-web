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
  const animationFrameIdRef = useRef<number | null>(null);
  const valueRef = useRef<number>(value); // Store 'value' in a ref

  let even = index % 2 === 0;

  useEffect(() => {
    if (ref.current === null || !state?.isIntersecting) return;

    // Access 'value' using the 'valueRef.current' property
    let mutableValue = valueRef.current;
    if (mutableValue > 100) mutableValue = 100;

    const updateProgress = () => {
      if (progressValue < mutableValue) {
        setProgressValue((prev) => prev + 1);
        animationFrameIdRef.current = requestAnimationFrame(updateProgress);
      } else {
        console.log("clear");
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
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
      {valueRef.current /* Access 'value' using 'valueRef.current' */}
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

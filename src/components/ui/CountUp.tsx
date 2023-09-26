import React from "react";
import  { useEffect, useState, useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type CountUpProps = {
  value: number;
  speed:number
};

const CountUp = ({ value, speed }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const intersection = useIntersectionObserver(ref);
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    if (intersection?.isIntersecting && !counted) {
      for (let i = 0; i <= value; i++) {
        setTimeout(() => setCount(i), i * speed);
      }
      setCounted(true);
    }
  }, [intersection]);

  return <div ref={ref}>{count}</div>;
  
};

export default CountUp;

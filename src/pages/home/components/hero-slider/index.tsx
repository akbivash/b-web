'use client'
import React, {useRef, useState } from "react";
import Slide from "./Slide";
import { sliderData } from "../../../../constants/data";

const HeroSlider = () => {
  const [index, setIndex] = useState<number>(0);
  const slidesRef = useRef<HTMLDivElement>(null);


  return (
    <div className=" relative grid  " ref={slidesRef}>
      {sliderData.map((item, ind): any => {
        return (
          <Slide key={item.title} setIndex={setIndex} currentIndex={index} index={ind}  item={item}/>
           
          
        );
      // }
      })}
    </div>
  );
};

export default HeroSlider;

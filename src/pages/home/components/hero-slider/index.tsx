import { useRef, useState } from "react";
import { sliderData } from "../../../../constants/data";
import Slide from "./Slide";

// interface ISlider {
// title:string 
// header:string 
// description:string
// img:string
// }

const HeroSlider = () => {
  const [index, setIndex] = useState<number>(0);
  const slidesRef = useRef<HTMLDivElement>(null);

  return (
    <div className=" relative grid  " ref={slidesRef}>
      {sliderData.map((item, ind) => {
        return (
          <Slide
            key={item.title}
            setIndex={setIndex}
            currentIndex={index}
            index={ind}
            item={item}
          />
        );
        // }
      })}
    </div>
  );
};

export default HeroSlider;

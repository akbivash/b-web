import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IHeroSlider } from "../../../../types";
import { sliderData } from "../../../../constants/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


interface SliderProps {
  item: IHeroSlider;
  index: number;
  currentIndex: number;
  setIndex: (props: any) => void;
}

const Slide = ({ item, setIndex, index, currentIndex }: SliderProps) => {
  const handleLeft = () => {
    if (index > 0) {
      setIndex((prev: number) => prev - 1);
    } else {
      setIndex(sliderData.length - 1);
    }
  };

  const handleRight = () => {
    if (index < sliderData.length - 1) {
      setIndex((prev: number) => prev + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div
      className={`${
        index === currentIndex ? "grid md:flex " : "hidden"
      } w-full h-full  gap-10 `}
    >
      <div className="grid  gap-sm  place-items-start  flex-1 md:flex-[0.5] relative ">
        <motion.h2
          className=" text-5xl  sm:text-6xl   w-full text-white text-stroke"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {item.title}
        </motion.h2>
        <motion.h2
          className="text-4xl sm:text-6xl  font-bold "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {item.header}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {item.description}
        </motion.p>
        <Link to='/about' className="bg-black-dark text-white px-md p-xs rounded-sm">
          About Us
        </Link>
        <div className="flex gap-10 items-center relative  w-full md:justify-end md:right-[-110px] md:absolute md:bottom-10">
          <AiOutlineArrowLeft
            className="  bg-orange-default text-white rounded-full p-xs cursor-pointer"
            fontSize={50}
            onClick={handleLeft}
          />
          <AiOutlineArrowRight
            className="  bg-orange-default text-white rounded-full p-xs cursor-pointer"
            fontSize={50}
            onClick={handleRight}
          />
        </div>
      </div>
      <div className="flex-1 md:flex-1 h-80 md:min-h-[90vh] ">
        <motion.img
          initial={{ opacity: 0, scale:0.5}}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={item.img}
          alt=""
          className=" object-cover  h-full w-full"
        />
      </div>
    </div>
  );
};

export default Slide;

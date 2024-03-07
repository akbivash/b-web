import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ITeam {
  name: string;
  image: string;
  profession: string;
}

const Team = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const maxItems = 3;
  const itemsToAddBefore = teams.slice(teams.length - maxItems);
  const itemsToAddAfter = teams.slice(0, 1);
  const clonedItems = [...itemsToAddBefore, ...teams, ...itemsToAddAfter];
  const itemsPerScreenRef = useRef(1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getItemsPerScreen();
    handleScroll();
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", getItemsPerScreen);
    }
    return () => {
      wrapperRef.current &&
        wrapperRef.current.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", getItemsPerScreen);
    };
  }, []);

  function getItemsPerScreen() {
    if (!itemRef.current) return;
    const styles = window.getComputedStyle(itemRef.current);
    const itemsPerScreen = parseInt(
      styles.getPropertyValue("--items-per-screen")
    );
    itemsPerScreenRef.current = itemsPerScreen;
  }

  const handleScroll = () => {
    if (!wrapperRef.current || !itemRef.current) return;

    // By dividing how much we scrolled to left with the width of single item, we can get current index, which is used for handling dots
    const currentIndex = Math.round(
      wrapperRef.current.scrollLeft / itemRef.current.offsetWidth
    );
    setActiveIndex(currentIndex);

    if (
      wrapperRef.current.scrollLeft >=
      wrapperRef.current.scrollWidth - wrapperRef.current.offsetWidth - 1
    ) {
      wrapperRef.current.style.scrollBehavior = "auto";
      // this position is a formula generated according to how items are added at before and after
      const position = maxItems - itemsPerScreenRef.current + 1;
      wrapperRef.current.scrollLeft = position * itemRef.current.offsetWidth;
    } else if (wrapperRef.current.scrollLeft === 0) {
      wrapperRef.current.style.scrollBehavior = "auto";
      wrapperRef.current.scrollLeft = maxItems * itemRef.current.offsetWidth;
    } else {
      wrapperRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleLeft = () => {
    if (wrapperRef.current && itemRef.current) {
      wrapperRef.current.scrollLeft -= itemRef.current?.offsetWidth;
    }
  };

  const handleRight = () => {
    if (wrapperRef.current && itemRef.current) {
      wrapperRef.current.scrollLeft += itemRef.current?.offsetWidth;
    }
  };

  const handleDots = (ind: number) => {
    setActiveIndex(ind);
    if (wrapperRef.current && itemRef.current)
      wrapperRef.current.scrollLeft = ind * itemRef.current.offsetWidth;
  };

  return (
    <div className="grid ">
      <h2 className="text-3xl text-center py-sm  font-bold">
        Our Professional Team
      </h2>
      <div className="relative  overflow-hidden flex items-center">
        <button
          onClick={handleLeft}
          className="bg-orange-default sm:block hidden rounded-full p-xs text-white"
        >
          <FaArrowLeft fontSize={30} />
        </button>

        <div ref={wrapperRef} className="carousel overflow-x-hidden w-full  ">
          {clonedItems.map((item: ITeam, index: number) => {
            return (
              <div
                ref={itemRef}
                key={item.name + index}
                className="carousel-item   relative p-xs w-full "
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full object-cover h-80 "
                />
                <div className=" p-sm shadow-md ">
                  <h2 className="font-bold">{item.name}</h2>
                  <h2>{item.profession}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={handleRight}
          className="bg-orange-default sm:block hidden rounded-full p-xs text-white"
        >
          <FaArrowRight fontSize={30} />
        </button>
      </div>
      <div className="flex justify-center gap-xs ">
        {/* dots */}
        {teams.map((item, ind) => {
          // activeIndex points to the active item of clonedItems.
          // We are mapping original iteams to get the dots of original length. By checking the name of original item and cloned item(which is active), we can find the active dot.
          const active = clonedItems[activeIndex].name === item.name;
          return (
            <span
              key={item.image}
              className={`${
                active ? "text-orange-default" : ""
              } cursor-pointer`}
              onClick={() => handleDots(ind)}
            >
              o
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Team;

const teams = [
  {
    name: "Dipshikha Adhikari",
    profession: "Wev Developer",
    image:
      "https://us.123rf.com/450wm/elr3y/elr3y1705/elr3y170500040/78976852-businessman.jpg?ver=6",
  },
  {
    name: "Prabhat Aryal",
    profession: "Marketing Manager",
    image:
      "https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg",
  },
  {
    name: "Bipin Lamichhane",
    profession: "Software Engineer",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
  },
];

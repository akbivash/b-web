import React, { useEffect } from "react";
import { useRef, useState } from "react";

interface ITeam {
  name:string,
  image:string,
  profession:string
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
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener("scroll", () => handleScroll());
      window.addEventListener("resize", getItemsPerScreen);
    }
    return () => {
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
    const newIndex = Math.round(
      wrapperRef.current.scrollLeft / itemRef.current.offsetWidth
    );
    setActiveIndex(newIndex);
    if (
      wrapperRef.current.scrollLeft >=
      wrapperRef.current.scrollWidth - wrapperRef.current.offsetWidth - 1
    ) {
      wrapperRef.current.style.scrollBehavior = "auto";
      // this position is a formula generated according to how items are added at before and after
      let position = maxItems - itemsPerScreenRef.current + 1;
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

  // useEffect(() => {
  //   if(!wrapperRef.current || !itemRef.current) return
  //   wrapperRef.current.scrollLeft += itemRef.current?.offsetWidth * activeIndex
  // },[activeIndex])

  return (
    <div className="grid gap-sm">
      <h2 className="text-sm text-center  font-bold">Our Professional Team</h2>
      <div className="relative  overflow-hidden flex items-center">
        <button onClick={handleLeft}>left</button>

        <div ref={wrapperRef} className="carousel w-full  ">
          {clonedItems.map((item: ITeam, index: number) => {
            return (
              <div
                ref={itemRef}
                key={item.name + index}
                className="carousel-item relative p-xs w-full bg-red-200 "
              >
                <img src={item.image} alt="" className="w-full object-cover h-80 " />
                <div className=" bottom-2 z-50">
                  <h2>{item.name}</h2>
                  <h2>{item.profession}</h2>
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={handleRight}>right</button>
      </div>
      <div className="flex justify-center gap-xs mt-[-10px]">
        {/* dots */}
        {teams.map((item, ind) => {
          let active =clonedItems[activeIndex].name === item.name
          return <span key={item.image} className={`${active ? 'text-orange-default':''} cursor-pointer`} onClick={() => setActiveIndex(ind)}>o</span>;
        })}
      </div>
    </div>
  );
};

export default Team;

const teams = [
  {
    name: "a",
    profession: "Wev Developer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNwJ4JdapYZIPBaPX-FyJdBhGNBig-_MX_myNAqQ1&s",
  },
  {
    name: "v",
    profession: "Wev Developer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pAbSMRmQbOHsY7nOtFw6XsCOVVPZOT_0QZ4ICp9fbl3ut0aTmNjHRqX06_gM1oF4SD8&usqp=CAU",
  },
  {
    name: "c",
    profession: "Wev Developer",
    image:
      "https://us.123rf.com/450wm/elr3y/elr3y1705/elr3y170500040/78976852-businessman.jpg?ver=6",
  },
];

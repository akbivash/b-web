import React from "react";
import SocialIcons from "../ui/SocialIcons";
import Typewriter from "../ui/Typewriter";

const Contact = () => {
  return (
    <div className="grid gap-sm md:gap-lg max-w-[1000px] mx-auto w-full">
      <div className="grid gap-xs place-items-center ">
        <h4 className="text-xs">CONTACT</h4>
        <h1 className="text-sm md:text-lg font-bold"><Typewriter text="Let's talk with us!"/></h1>
      </div>

      <div className="grid  gap-md md:flex w-full  md:justify-around md:gap-20">
        <div className="grid h-fit gap-sm">
         <div className="grid gap-xs"> <h2 className="font-bold text-xs text-blue-default ">Open Hours</h2>
         Mon - Fri: 9 am - 5 pm</div>
          <div className="w-fit grid gap-xs">
            <SocialIcons />
          </div>
        </div>
        <div className=" ">
          <h2 className="font-bold text-blue-default">LEAVE YOUR MESSAGE</h2>
          <form action="" className="py-sm grid gap-xs ">
            <textarea placeholder="Type your message" className="resize-none" />
            <input type="text" name="" id="" placeholder="Your name" />
            <input type="email" name="" id="" placeholder="Your email" />
            <button className="bg-orange-default p-xs text-white ">
              Send message
            </button>
            <p className="text-center">
              We usually respond in less than 30 minutes.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

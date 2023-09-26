import React from "react";
import Contact from "../../components/contact";
import TitleWithLine from "../../components/ui/TitleWithLine";
import Team from "./Team";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className="grid gap-md">
      <div className=" relative h-60 w-full flex items-center justify-center">
        <div className="absolute z-40 h-full w-full bg-[rgba(0,0,0,0.5)]"></div>
        <img
          src="https://wallpapercave.com/wp/wp9486379.jpg"
          alt=""
          className="absolute h-full z-30 w-full object-cover "
        />
        <h2 className="z-50  text-3xl absolute text-white font-bold">About Us</h2>
      </div>
      <div className="grid gap-sm lg:flex lg:items-start">
        <TitleWithLine title="Welcome to B-Web, where innovation meets expertise." />
        <p className="text-lg">
          We are a dynamic team of IT professionals, creative thinkers, and
          marketing strategists dedicated to powering your business success.
        </p>
      </div>
      <div className="grid gap-md ">
        <h2 className=" font-bold  text-3xl  relative w-fit mx-auto"> Why Choose Us</h2>
       <div className="grid gap-sm lg:grid-cols-3 ">
       <div className="relative"> 
  
          <h2 className="font-bold uppercase py-xs  relative w-fit flex items-center gap-2">Expertise
          <motion.span className="h-4 w-4  bg-blue-default rounded-full" initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:.3}}></motion.span>
          </h2>
          <p className="text-lg">Our team brings a wealth of knowledge and experience to the table, ensuring that you receive top-notch solutions.</p>
        </div>
        <div>
          <h2 className="font-bold uppercase py-xs relative w-fit flex items-center gap-2">Innovation
          <motion.span className="h-4 w-4  bg-blue-default rounded-full" initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:.3}}></motion.span>
          </h2>
          <p className="text-lg">We're passionate about staying ahead of the curve, constantly seeking new ways to help your business thrive.</p>
        </div>
        <div>
          <h2 className="font-bold py-xs  uppercase relative w-fit flex items-center gap-2">Results-Driven
          <motion.span className="h-4 w-4  bg-blue-default rounded-full" initial={{opacity:0, scale:0}} whileInView={{opacity:1, scale:1}} transition={{duration:.3}}></motion.span>
          
          </h2>
          <p className="text-lg">Your success is our priority. We measure our success by the success of your business.</p>
        </div>
       </div>
      </div>
      <Team />
      <Contact />
    </div>
  );
};

export default About;

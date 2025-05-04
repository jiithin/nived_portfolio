import React from "react";
import { motion } from "framer-motion";

import { BiSolidSend } from "react-icons/bi";

import { BiLogoNetlify } from "react-icons/bi";
function Hero() {
  const blurToVisibleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const bigToNormalVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  let counts = setInterval(updated, 100);
  let upto = 30;

  function updated() {
    let count = document.getElementById("counter");
    if (upto < 50) {
      count.innerHTML = ++upto;
    } else {
      count.innerHTML = "50+";
      clearInterval(counts);
    }
  }

  return (
    <main className="bg-neutral-900 font-Lato " id="hero">
      <div className="absolute top-2/4 lg:top-2/4 right-1/2 z-0 flex flex-row">
        <BiLogoNetlify className="h-80 w-80 text-orange-500/30 " />
        <BiLogoNetlify className="h-40 w-40 text-orange-500/30 hidden lg:inline" />
      </div>
      <div
        id="home"
        className="h-auto flex flex-col-reverse md:flex-row items-center justify-between lg:px-20 px-8
         mx-auto 
                   sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full z-10 backdrop-blur-3xl"
      >
        <motion.div
          className="flex flex-col z-10 justify-center items-start text-left md:w-2/3 mb-24 "
          variants={blurToVisibleVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-2xl font-bold text-gray-500 hover:translate-x-1 hover:scale-105 transition duration-500">
            Hi, I am
          </p>
          <p className="text-2xl text-gray-400 my-1 lg:my-2 font-bold hover:translate-x-1 hover:scale-105 transition duration-500">
            Nived MV
          </p>
          <p className="text-5xl text-orange-500 mt-2 lg:my-4 font-bold hover:translate-x-4 hover:scale-105 transition duration-500 ">
            UI/UX Designer & Graphic Designer
          </p>

          <div className="flex pl-10 space-x-3 mt-4">
            <a
              className="bg-transparent"
              href="https://www.linkedin.com/in/nived-mv-0b2aa3248/"
            >
              <img
                src="./linkedin.webp"
                alt="Button 1"
                className="w-10 h-12 object-contain hover:-translate-y-1 transition duration-300"
              />
            </a>
            <a
              className="bg-transparent"
              href="https://www.behance.net/nivednivuz"
            >
              <img
                src="./behance.webp"
                alt="Button 2"
                className="w-10 h-12 object-contain hover:-translate-y-1 transition duration-300"
              />
            </a>
          </div>

          <div className="mt-4 lg:mt-8 cursor-pointer group">
            <a
              type="button"
              className="relative inline-flex items-center rounded-md bg-orange-500 px-10 py-2  font-semibold text-gray-200  hover:bg-orange-500 focus:z-10  "
              href="mailto:nivednivuz704@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiSolidSend className="text-xl text-grey-200 absolute  left-0 z-10 group-hover:translate-x-5 opacity-0 group-hover:opacity-100 duration-500 delay-300  " />
              <span className="left-0 z-10 group-hover:translate-x-4  duration-500 delay-300">
                Contact Me
              </span>
            </a>
          </div>

          <div className="flex items-center mt-10 space-x-6">
            <div className="flex flex-col font-bold text-gray-300 text-lg lg:text-xl">
              <p className="text-orange-500 text-xl lg:text-2xl my-2">2+</p>
              <p>Years Experience</p>
            </div>

            <div className="w-[1px] h-20 bg-gray-500"></div>

            <div className="flex flex-col font-bold text-gray-300 text-lg lg:text-xl">
              <p
                className="text-orange-500 text-xl lg:text-2xl my-2"
                id="counter"
              ></p>
              <p>Projects Done</p>
            </div>

            <div className="w-[1px] h-20 bg-gray-500"></div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-1 justify-center items-center md:w-1/3 z-10 "
          variants={bigToNormalVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            className="h-fit w-fit "
            src="./f8e04cc8f8bce2af7825e8dea975dbcc251ec356.webp"
            alt="this supposed to be a picture"
          />
        </motion.div>
      </div>
    </main>
  );
}

export default Hero;

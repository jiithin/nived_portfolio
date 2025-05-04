import { motion } from 'framer-motion';
import React from 'react';

import { LuTabletSmartphone } from "react-icons/lu";
import { LuMonitorSmartphone } from "react-icons/lu";
import { PiPencilRuler } from "react-icons/pi";

function Services() {
  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };



  return (
    <div
      className="font-Leto h-auto flex flex-col justify-center bg-neutral-900 lg:pt-20 pt-32 lg:px-16 md:px-10 px-8 z-10 backdrop-blur-3xl"
      id="services"
    >
      <motion.p
        className="text-4xl font-semibold text-white text-center pb-5"
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Services
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-6 md:space-y-0"
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      
        <motion.div
          className="service-card w-full md:w-1/3 h-80 rounded-[30px] shadow-inner shadow-orange-500/10 ring-2 ring-orange-200/10 cursor-pointer py-8 px-6 bg-neutral-800/60 flex flex-col items-center gap-3 transition-all duration-300 group hover:bg-neutral-800/90 hover:shadow-orange-800/10 hover:shadow-lg"
          variants={slideUpVariants}
        >
          <LuTabletSmartphone className="text-orange-500 lg:w-20 lg:h-20 w-10 h-10" />
          <p className="font-semibold text-2xl text-orange-500">App Design</p>
          <p className="text-neutral-500 text-lg font-semibold text-center my-auto overflow-hidden">
            Responsible for creating the visual layout and user interface (UI) of an application,
            focusing on how users will navigate and interact with the app.
          </p>
        </motion.div>

        
        <motion.div
          className="service-card w-full md:w-1/3 h-80 rounded-[30px] shadow-inner shadow-orange-500/10 ring-2 ring-orange-200/10 cursor-pointer py-8 px-6 bg-neutral-800/60 flex flex-col items-center gap-3 transition-all duration-300 group hover:bg-neutral-800/90 hover:shadow-orange-800/10 hover:shadow-lg"
          variants={slideUpVariants}
        >
          <LuMonitorSmartphone className="text-orange-500 lg:w-20 lg:h-20 w-10 h-10" />
          <p className="font-semibold text-2xl text-orange-500">Web Design</p>
          <p className="text-neutral-500 text-lg font-semibold text-center my-auto overflow-hidden">
            Responsible for the visual design and layout of a website, focusing on how it looks and
            functions for users.
          </p>
        </motion.div>

       
        <motion.div
          className="service-card w-full md:w-1/3 h-80 rounded-[30px] shadow-inner shadow-orange-500/10 ring-2 ring-orange-200/10 cursor-pointer py-8 px-6 bg-neutral-800/60 flex flex-col items-center gap-3 transition-all duration-300 group hover:bg-neutral-800/90 hover:shadow-orange-800/10 hover:shadow-lg"
          variants={slideUpVariants}
        >
          <PiPencilRuler className="hover:bg-neutral-700/50 text-orange-500 lg:w-20 lg:h-20 w-10 h-10" />
          <p className="font-semibold text-2xl text-orange-500">Graphic Design</p>
          <p className="text-neutral-500 text-lg font-semibold text-center my-auto overflow-hidden">
            Creative professional who uses visual elements like images, colors, and typography to
            communicate ideas and messages.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Services;
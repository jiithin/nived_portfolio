import React, { useState } from "react";

import { motion } from "framer-motion";
function Portfolio() {
  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects =
    selectedType === "All"
      ? ProjectList
      : ProjectList.filter((project) => project.type === selectedType);

  const slideUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      className="font-Leto h-auto flex flex-col justify-center bg-neutral-900 lg:pt-20 pt-32 lg:px-20 pb-20 
    "
      id="portfolio"
    >
      <motion.p
        className="text-4xl font-semibold text-white text-center py-2"
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Portfolio
      </motion.p>

      <motion.div
        className="lg:flex md:flex items-center gap-2 bg-transparent justify-evenly py-4 lg:px-32 px-10 pb-16 pt-6 rounded-lg hidden"
        variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <button
          onClick={() => setSelectedType("All")}
          className={`cursor-pointer bg-neutral-800 relative inline-flex items-center justify-center gap-2 text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-orange-500 ${
            selectedType === "All" ? "bg-orange-500" : "text-gray-300"
          } lg:h-12 h-10 rounded-xl lg:px-8 px-4 duration-500`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedType("UI&UX")}
          className={`cursor-pointer bg-neutral-800 relative inline-flex items-center justify-center gap-2 text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-orange-500 ${
            selectedType === "UI&UX" ? "bg-orange-500" : "text-gray-300"
          } lg:h-12 h-10 rounded-xl lg:px-8 px-4 duration-500`}
        >
          UI&UX
        </button>
        <button
          onClick={() => setSelectedType("BRANDING")}
          className={`cursor-pointer bg-neutral-800 relative inline-flex items-center justify-center gap-2 text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-orange-500 ${
            selectedType === "BRANDING" ? "bg-orange-500" : "text-gray-300"
          } lg:h-12 h-10 rounded-xl lg:px-8 px-4 duration-500`}
        >
          Branding Design
        </button>
        <button
          onClick={() => setSelectedType("GRAPHIC WORK")}
          className={`cursor-pointer bg-neutral-800 relative inline-flex items-center justify-center gap-2 text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-orange-500 ${
            selectedType === "GRAPHIC WORK" ? "bg-orange-500" : "text-gray-300"
          } lg:h-12 h-10 rounded-xl lg:px-8 px-4 duration-500`}
        >
          Graphic Design
        </button>
      </motion.div>

      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
        {filteredProjects.map((list, index) => (
          <div
            className="flex justify-center items-center min-h-full"
            key={index}
          >
            <div className="lg:max-w-[720px] h-auto mx-auto">
              <motion.div
                className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-[40px] bg-neutral-800 bg-clip-border text-gray-700 shadow-md"
                variants={slideUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <a
                  href={list.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative m-0 h-fit overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                    <img src={list.imge} alt={list.title} />
                  </div>
                </a>

                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center -space-x-3">
                    <p className="block font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-neutral-300">
                      {list.title}
                    </p>
                  </div>
                  <p className="block font-sans text-sm antialiased font-semibold leading-snug tracking-normal text-neutral-500">
                    {list.type}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

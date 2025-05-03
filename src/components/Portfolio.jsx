import React, { useState } from 'react'

import { ProjectList } from "../data/Data.js";
function Portfolio() {

  const [selectedType, setSelectedType] = useState("All"); // State to track selected type

  // Function to filter projects based on the selected type
  const filteredProjects =
    selectedType === "All"
      ? ProjectList // Show all projects if "All" is selected
      : ProjectList.filter((project) => project.type === selectedType);

    

  return (
    <div className="font-Leto h-auto flex flex-col justify-center bg-neutral-900 lg:pt-20 pt-32 lg:px-20 pb-20 
    " id="portfolio">
      <h1 className="text-4xl font-semibold text-white text-center pb-5">Portfolio</h1>

       {/* Buttons */}
       <div className="lg:flex md:flex items-center gap-2 bg-transparent justify-evenly py-4 lg:px-32 px-10 pb-16 pt-6 rounded-lg hidden">
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
      </div>


{/* buttons sm */}
<div className="lg:hidden sm:hidden flex items-center justify-center  bg-transparent py-2  pb-10 rounded-lg">
    <span className="isolate inline-flex rounded-md shadow-sm">
  <button onClick={() => setSelectedType("All")} type="button" className={`relative inline-flex items-center rounded-l-xl bg-neutral-700/40 px-3 py-3 text-sm font-semibold text-gray-200  hover:bg-orange-500 focus:z-10 ${
            selectedType === "All" ? "bg-orange-500" : "text-gray-200"
          } relative inline-flex items-center rounded-l-xl  px-3 py-3 text-sm font-semibold duration-500`}>All</button>

  <button onClick={() => setSelectedType("UI&UX")} type="button" className={`relative -ml-px inline-flex items-center bg-neutral-700/30 px-3 py-3 text-sm font-semibold text-gray-200  hover:bg-orange-500 focus:z-10 ${
            selectedType === "UI&UX" ? "bg-orange-500" : "text-gray-200"
          } relative -ml-px inline-flex items-center px-3 py-3 text-sm font-semibold duration-500`}>UI&UX</button>

<button onClick={() => setSelectedType("BRANDING")} type="button" className={`relative -ml-px inline-flex items-center bg-neutral-700/30 px-3 py-3 text-sm font-semibold text-gray-200  hover:bg-orange-500 focus:z-10 ${
            selectedType === "BRANDING" ? "bg-orange-500" : "text-gray-200"
          } relative -ml-px inline-flex items-center px-3 py-3 text-sm font-semibold duration-500`}>Branding Design</button>

  <button onClick={() => setSelectedType("GRAPHIC WORK")} type="button" className={`relative -ml-px inline-flex items-center rounded-r-xl bg-neutral-700/30 px-3 py-3 text-sm font-semibold text-gray-200 hover:bg-orange-500 focus:z-10 ${
            selectedType === "GRAPHIC WORK" ? "bg-orange-500" : "text-gray-200"
          } relative -ml-px inline-flex items-center rounded-r-xl  px-3 py-3 text-sm font-semibold duration-500`}>Graphic Design</button>
</span>
</div>


{/* cards */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">

{filteredProjects.map((list, index) => (
<div className="flex justify-center items-center min-h-full" key={index}>
    <div className="lg:max-w-[720px] h-auto mx-auto">


        <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-[40px] bg-neutral-800 bg-clip-border text-gray-700 shadow-md">
        <a href={list.demo_url} target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative m-0 h-fit overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <img
                     src={list.imge}
                     alt={list.title} />
            </div>
            </a>
            {/* <div className="p-6">
                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    UI/UX Review Check
                </h4>
                <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                    Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
                </p>
            </div> */}
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
        </div>
    </div>
</div>))}


    </div>
</div>

        
  )
}

export default Portfolio
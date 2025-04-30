import React from "react";

function Hero() {
  return (
    <main className="bg-neutral-900 font-Lato ">
      <div
        id="home"
        className="h-auto flex flex-col-reverse md:flex-row items-center justify-between lg:px-20 px-10
         mx-auto 
                   sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full"
      >
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start text-left md:w-2/3 mb-24">
          <p className="text-xl font-bold text-gray-500">Hi, I am</p>
          <p className="text-2xl text-gray-400 font-bold">Nived MV</p>
          <p className="text-5xl text-orange-500 mb-4 font-bold">
            UI/UX Designer & Graphic Designer
          </p>
          {/* Buttons Section */}
          <div className="flex pl-5 space-x-3 mt-4">
            <a className="bg-transparent" href="https://www.linkedin.com/in/nived-mv-0b2aa3248/">
              <img
                src="./linkedin.png"
                alt="Button 1"
                className="w-10 h-12 object-contain"
              />
            </a>
            <a className="bg-transparent" href="https://www.behance.net/nivednivuz">
              <img
                src="./behance.png"
                alt="Button 2"
                className="w-10 h-12 object-contain"
              />
            </a>
          </div>
          {/* Download CV Button */}
          <div className="mt-6">
            <a
              className="bg-orange-500 text-white font-semibold py-2 px-10 rounded-md hover:bg-orange-700 transition inline-block text-center"
              href="/NivedMV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
          {/* New Div with 2 Lines, Vertical Line, and Another 2 Lines */}
          <div className="flex items-center mt-8 space-x-4">
            {/* First Two Lines */}
            <div className="flex flex-col font-bold text-gray-300 text-lg">
              <p className="text-orange-500 text-xl">2+</p>
              <p>Years Experience</p>
            </div>

            {/* Vertical Line */}
            <div className="w-[1px] h-16 bg-gray-500"></div>

            {/* Second Two Lines */}
            <div className="flex flex-col font-bold text-gray-300 text-lg">
              <p className="text-orange-500 text-xl">50+</p>
              <p>Projects Done</p>
            </div>

            {/* Vertical Line */}
            <div className="w-[1px] h-16 bg-gray-500"></div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-1 justify-center items-center md:w-1/3 ">
          <img
            className="max-w-[250px] md:max-w-[300px] lg:max-w-[550px]"
            src="./nived1.png"
            alt="this supposed to be a picture"
          />
        </div>
      </div>
    </main>
  );
}

export default Hero;

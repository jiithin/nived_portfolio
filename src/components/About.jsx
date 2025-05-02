import React from 'react'

function About() {
  return (
    <div className="font-Leto h-auto flex flex-col justify-center bg-neutral-900 lg:pt-20 pt-32 lg:px-20 
    " id="about">
      <p className="text-4xl font-semibold text-white text-center pb-5">About Me</p>
      <p className='text-lg font-semibold text-neutral-400 text-center px-6'>User Interface and User Experience and Also Graphic Designer & Freelancer</p>
      <div className='flex flex-col md:flex-row items-center justify-center md:space-x-5 space-y-6 md:space-y-0 pb-10'>
        <img src="./nived2.png" alt="" className='flex flex-col items-center gap-3 h-auto px-8  md:max-w-[400px] lg:max-w-[500px]'/>
        <div className='flex flex-col items-start gap-3'>
        <p className=' lg:text-xl text-lg text-neutral-400 lg:tracking-tight md:tracking-tight align-middle leading-9 text-justify px-8'>Creative and detail-oriented Graphic Designer with over 1 years & 8 months of experience in creating visually compelling designs across various platforms. Proficient in Adobe Creative Suite (Photoshop, Illustrator, Premire Pro, After Effects & figma), with a strong understanding of typography, color theory, and design principles. Demonstrated ability to work collaboratively with cross-functional teams to deliver projects on time. Skilled in translating client needs and branding strategies into innovative and effective design solutions. Committed to staying current with industry trends and continuously improving design skills.</p>

        <div className="mt-6 px-8">
            <a
              className="bg-orange-500 text-white font-semibold py-2 px-10 rounded-md hover:bg-orange-600 transition inline-block text-center"
              href="/NivedMV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
          </div>
      </div>

      {/* radial progressbar */}
      <div className="flex flex-wrap justify-evenly gap-12 py-4 px-6 mt-6">
  {/* Figma */}
  <div className="flex flex-col justify-center items-center">
    <div className="relative flex items-center justify-center h-auto">
      <svg width="90" height="90" viewBox="0 0 100 100" className="transform rotate-[-90deg]">
        <circle cx="50" cy="50" r="46" stroke="#3a3a3a" strokeWidth="8" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeDasharray="289"
          strokeDashoffset="0"
          strokeLinecap="round"
          className="text-orange-500 transition-all duration-500"
        />
      </svg>
      <img src="./figma.png" alt="" className="absolute w-8 h-8" />
    </div>
    <p className="text-orange-500 font-bold text-lg text-center">100%</p>
    <p className="text-neutral-400 font-semibold text-xl text-center">Figma</p>
  </div>

  {/* Adobe XD */}
  <div className="flex flex-col justify-center items-center">
    <div className="relative flex items-center justify-center h-auto">
      <svg width="90" height="90" viewBox="0 0 100 100" className="transform rotate-[-90deg]">
        <circle cx="50" cy="50" r="46" stroke="#3a3a3a" strokeWidth="8" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeDasharray="289"
          strokeDashoffset="0"
          strokeLinecap="round"
          className="text-orange-500 transition-all duration-500"
        />
      </svg>
      <img src="./xd.png" alt="" className="absolute w-8 h-8" />
    </div>
    <p className="text-orange-500 font-bold text-lg text-center">100%</p>
    <p className="text-neutral-400 font-semibold text-xl text-center">Adobe XD</p>
  </div>

  {/* Adobe Photoshop */}
  <div className="flex flex-col justify-center items-center">
    <div className="relative flex items-center justify-center h-auto">
      <svg width="90" height="90" viewBox="0 0 100 100" className="transform rotate-[-90deg]">
        <circle cx="50" cy="50" r="46" stroke="#3a3a3a" strokeWidth="8" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeDasharray="289"
          strokeDashoffset="0"
          strokeLinecap="round"
          className="text-orange-500 transition-all duration-500"
        />
      </svg>
      <img src="./ps.png" alt="" className="absolute w-8 h-8" />
    </div>
    <p className="text-orange-500 font-bold text-lg text-center">100%</p>
    <p className="text-neutral-400 font-semibold text-xl text-center">Photoshop</p>
  </div>

  {/* Adobe Illustrator */}
  <div className="flex flex-col justify-center items-center">
    <div className="relative flex items-center justify-center h-auto">
      <svg width="90" height="90" viewBox="0 0 100 100" className="transform rotate-[-90deg]">
        <circle cx="50" cy="50" r="46" stroke="#3a3a3a" strokeWidth="8" fill="none" />
        <circle
          cx="50" cy="50" r="46"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeDasharray="289"
          strokeDashoffset="30"
          strokeLinecap="round"
          className="text-orange-500 transition-all duration-500"
        />
      </svg>
      <img src="./illu.png" alt="" className="absolute w-8 h-8" />
    </div>
    <p className="text-orange-500 font-bold text-lg text-center">85%</p>
    <p className="text-neutral-400 font-semibold text-xl text-center">Illustrator</p>
  </div>

  {/* Adobe Premiere */}
  <div className="flex flex-col justify-center items-center">
    <div className="relative flex items-center justify-center h-auto">
      <svg width="90" height="90" viewBox="0 0 100 100" className="transform rotate-[-90deg]">
        <circle cx="50" cy="50" r="46" stroke="#3a3a3a" strokeWidth="8" fill="none" />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeDasharray="289"
          strokeDashoffset="70"
          strokeLinecap="round"
          className="text-orange-500 transition-all duration-500"
        />
      </svg>
      <img src="./pr.png" alt="" className="absolute w-8 h-8" />
    </div>
    <p className="text-orange-500 font-bold text-lg text-center">75%</p>
    <p className="text-neutral-400 font-semibold text-xl text-center">Premiere</p>
  </div>
</div>
      </div>
  )
}

export default About
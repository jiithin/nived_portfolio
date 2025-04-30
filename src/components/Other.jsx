import React from 'react'

function Other() {
  return (
    <div className="font-Leto h-auto flex flex-col justify-center bg-neutral-900 lg:pt-20 pt-32 lg:px-20 pb-20 
    ">
      <h1 className="text-4xl font-semibold text-white text-center pb-5">Check Out Other Works</h1>

      {/* card */}
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-10 md:space-y-0 py-10">
      
      
      <div className="flex justify-center items-center min-h-full bg-neutral-800 p-6 rounded-[50px]">
          <div className="max-w-[720px] mx-auto">
      
      
              <div className="relative flex max-w-full flex-col overflow-hidden rounded-[40px] bg-neutral-800 bg-clip-border text-gray-700 shadow-md">
              <a href="https://www.behance.net/nivednivuz" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative m-0 h-full overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                      <img
                           src="./other.png"
                           alt="other" />
                  </div>
                  </a>
              </div>
          </div>
      </div>

{/* button */}
<a href="https://www.behance.net/nivednivuz" target="_blank" rel="noopener noreferrer">
<button
  className="overflow-hidden relative w-32 p-2 h-12 bg-orange-500 text-gray-200 border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group" goto="https://www.behance.net/nivednivuz"
>
  Profile
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-orange-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-orange-500 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
  ></span>
  <span
    className="absolute w-36 h-32 -top-8 -left-2 bg-orange-500 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"
  ></span>
  <span
    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Explore!</span >
</button></a>

      
      
          </div>
      </div>
  )
}

export default Other
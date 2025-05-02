import React from 'react'
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
<footer className="bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-900">
  <div className="flex flex-col justify-cente items-center max-w-screen-xl px-4 mx-auto  lg:px-8">
    {/* <div className="flex flex-col gap-2 justify-center items-center">


        <div className="flex mt-4 space-x-6 text-gray-500">
        <div className="flex space-x-3 mt-4">
        <a className="bg-transparent" href="https://www.linkedin.com/in/nived-mv-0b2aa3248/">
              <img
                src="./insta.webp"
                alt="Button 1"
                className="w-10 h-12 object-contain"
              />
            </a>
            <a className="bg-transparent" href="https://www.linkedin.com/in/nived-mv-0b2aa3248/">
              <img
                src="./linkedin.webp"
                alt="Button 1"
                className="w-10 h-12 object-contain"
              />
            </a>
            <a className="bg-transparent" href="https://www.behance.net/nivednivuz">
              <img
                src="./dribbble.webp"
                alt="Button 2"
                className="w-10 h-12 object-contain"
              />
            </a>
            <a className="bg-transparent" href="https://www.behance.net/nivednivuz">
              <img
                src="./behance.webp"
                alt="Button 2"
                className="w-10 h-12 object-contain"
              />
            </a>
          </div>
          
        </div>

      <div className="flex lg:flex-row flex-col gap-6 p-6">
        
          <p className="flex font-medium text-neutral-400">
          <MdOutlineEmail className='h-7 w-7 mr-2' /> nivednivuz704@gmail.com
          </p>
          <p className="flex font-medium text-neutral-400">
          <FiPhone className='h-6 w-6 mr-2' />+918136958140
          </p>
        
        
        </div>
    </div> */}
    <div className='w-4/5 h-[1px] flex justify-center items-center bg-neutral-800'></div>
    <p className="mt-4 lg:text-md text-sm text-neutral-700 mb-6">
      Designed by Nived
    </p>
  </div>
</footer>
  )
}

export default Footer
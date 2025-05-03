import React from 'react'
import { motion } from 'framer-motion';

function Contact() {

   const slideUpVariants = {
      hidden: { opacity: 0, y: 50 }, // Start below and invisible
      visible: {
        opacity: 1,
        y: 0, // Slide up to its original position
        transition: { duration: 0.8, ease: 'easeOut' },
      },
    };

  return (
    <div className="font-Leto h-auto flex flex-col justify-center items-center bg-neutral-900 lg:pt-20 pt-16 lg:px-20 pb-10 
    " id="contact" >
=
      <motion.p className="text-4xl font-semibold text-white text-center pb-5" variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>Contact Me</motion.p>
      <motion.p className='text-lg font-semibold text-neutral-400 text-center px-8' variants={slideUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>Cultivating Connections: Reach Out and Connect with Me</motion.p>



		<form action="" className="w-full p-8 md:px-12 lg:w-9/12 rounded-2xl">
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 mt-5">
				<input className="w-full bg-neutral-800 text-neutral-300 font-semibold mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Name" />
				<input className="w-full bg-neutral-800 text-neutral-300 font-semibold mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Email" />
				<input className="w-full bg-neutral-800 text-neutral-300 font-semibold mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Phone" />
				<input className="w-full bg-neutral-800 text-neutral-300 font-semibold mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Services Of Intrest" />
            <input className="w-full h-fit py-4 bg-neutral-800 text-neutral-300 font-semibold mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Timeline" />
            <textarea placeholder="Project Details" className="w-full h-32  bg-neutral-800 text-neutral-300 font-semibold mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
	
				<div className="my-2 flex flex-col items-end py-3">
					<button className="uppercase text-sm font-bold  shadow-md shadow-orange-500/10 ring-2 ring-orange-200/10  tracking-wide bg-transparent text-neutral-500 py-3 px-10 rounded-lg w-auto 
                      focus:outline-none focus:shadow-outline hover:bg-orange-500 hover:text-white transition duration-500 ease-in-out">
            Send
          </button>
				</div>
			</form>

		
    </div>




  )
}

export default Contact
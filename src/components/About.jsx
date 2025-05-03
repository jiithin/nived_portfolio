import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function About() {
  const iconPaths = [
    './figma.webp',
    './xd.webp', 
    './ps.webp', 
    './illu.webp',
    './pr.webp', 
  ];

  const targetValues = [100, 100, 100, 85, 75]; // Target progress values for each bar
  const [progressValues, setProgressValues] = useState([0, 0, 0, 0, 0]); // Initial progress values

  const handleInView = () => {
    // Start animating progress values when the section is in view
    const interval = setInterval(() => {
      setProgressValues((prevValues) =>
        prevValues.map((value, index) => {
          if (value >= targetValues[index]) return targetValues[index]; // Stop at target value
          return value + 1; // Increment progress
        })
      );
    }, 25); // Adjust speed of animation

    // Clear interval when all progress values reach their targets
    setTimeout(() => clearInterval(interval), Math.max(...targetValues) * 200);
  };

  return (
    <div
      className="font-Leto h-auto flex flex-col justify-center bg-neutral-900 lg:pt-20 pt-32 lg:px-20"
      id="about"
    >
      <motion.p
        className="text-4xl font-semibold text-white text-center pb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        About Me
      </motion.p>

      <motion.p
        className="text-lg font-semibold text-neutral-400 text-center px-6 pb-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        User Interface and User Experience and Also Graphic Designer & Freelancer
      </motion.p>

      {/* Animated Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center md:space-x-5 space-y-6 md:space-y-0 pb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <img
          src="./nived1.webp"
          alt=""
          className="flex flex-col items-center gap-3 h-auto px-8 w-2/3 md:w-[400px] lg:max-w-[400px]"
        />
        <div className="flex flex-col items-start gap-3">
          <p className="lg:text-xl text-lg text-neutral-400 lg:tracking-tight md:tracking-tight align-middle leading-9 text-justify px-8">
            Creative and detail-oriented Graphic Designer with over 1 years & 8 months of experience
            in creating visually compelling designs across various platforms. Proficient in Adobe
            Creative Suite (Photoshop, Illustrator, Premiere Pro, After Effects & Figma), with a
            strong understanding of typography, color theory, and design principles. Demonstrated
            ability to work collaboratively with cross-functional teams to deliver projects on time.
            Skilled in translating client needs and branding strategies into innovative and
            effective design solutions. Committed to staying current with industry trends and
            continuously improving design skills.
          </p>
          <div className="mt-6 px-8">
            <a
              className="bg-orange-500 text-white font-semibold py-2 px-10 rounded-md hover:bg-orange-600 transition duration-700 inline-block text-center"
              href="/NivedMV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>
      </motion.div>


      <motion.div
        className="flex flex-wrap justify-evenly gap-12 py-4 px-6 mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onViewportEnter={handleInView} // Trigger animation when section is in view
      >

        {/* Progress Bars */}
        {progressValues.map((progress, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <div className="relative flex items-center justify-center h-[90px] w-[90px]">
              <CircularProgressbar
                value={progress} // Use animated progress value
                strokeWidth={12}
                styles={buildStyles({
                  pathColor: `rgba(255, 102, 0, ${progress / 100})`,
                  trailColor: '#3a3a3a',
                  strokeLinecap: 'round',
                })}
              />
              <img
                src={iconPaths[index]}
                alt={`Icon ${index + 1}`}
                className="absolute w-8 h-8"
              />
            </div>
            <p className="text-orange-500 font-bold text-lg text-center">{progress}%</p>
            <p className="text-neutral-400 font-semibold text-xl text-center">
              {['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Premiere'][index]}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default About;
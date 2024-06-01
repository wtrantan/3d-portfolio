import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Tilt } from "react-tilt";
import {
    karina,
    me
  } from "../assets";
  import { github, linkedin, outlook, resume } from "../assets"
import { styles } from "../styles";
// import { RobotCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
// import { useBackgroundContext } from "../utils/background";
// import { gsap, ScrollTrigger} from "gsap/all";

const About = () => {


  return (
    <div>
     <motion.div variants={textVariant()}>
     <div >
            <h2 className={styles.sectionText}>Hey, I'm William!</h2>
          </div>
          </motion.div>

          <div
          variants={fadeIn("", "", 0.1, 1)}
          className="flex items-center min-[1000px]:flex-row flex-col-reverse">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            {/* Left Column */}
            <div className="flex flex-col items-center min-[1000px]:items-start">
              <p  className="mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl" style={{ textAlign: 'justify' }}>
                I'm a Senior studying Computer Science and Engineering at
                University of California, Merced set to graduate with a Bachelor's degree by May 2025. I'm currently searching for Summer computer science internships.
                <br /> <br />
                Whether its through health or innovating puzzles, I enjoy finding ways to connect and educate the mind through software and game development.
                <br /> <br />
                I have been committed to exploring the endless possibilities that computer science offers. Contact me at 
                <a href="mailto:wtrantan@gmail.com"> <u>wtrantan@gmail.com</u>! </a>
              </p>
            </div>
            </motion.p>

            <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14"
            >
            {/* Right Column */}
            {/* Photo */}
            <div className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
              <div className="xs:w-[375px] w-full green-pink-gradient p-[4px] rounded-[20px] shadow-card">
                <div className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden">
                  <img
                    src={me}
                    alt="William Trantan's Profile Picture"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            </motion.p>
          </div>





          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='flex mt-6 gap-5 flex-wrap justify-center sm:justify-start'
          >
            {/* LinkedIn Button */}
            <div className="h-full max-[1000px]:my-14">
              <div class="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none">
              <a href="https://www.linkedin.com/in/wtrantan/" target="_blank"><button
  class="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
>
<div class="rounded-full flex justify-evenly items-center ">
                      <img src={linkedin} alt="GitHub Logo" class=" w-[40px] h-[40px] object-contain" />
                      <p class="font-mono w-[70px]">Linkedin</p>
                  </div>
</button>
</a>

              </div>
            </div>

            {/* GitHub Button */}
            <div className="h-full max-[1000px]:my-14">
              <div class="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none">
              <a href="https://github.com/wtrantan" target="_blank"> <button
  class="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
>
<div class="rounded-full flex justify-evenly items-center ">
                      <img src={github} alt="GitHub Logo" class=" w-[40px] h-[40px] object-contain" />
                      <p class="w-[70px]">GitHub</p>
                  </div>
</button>
</a>

              </div>
            </div>
            {/* Outlook Button */}
            <div className="h-full max-[1000px]:my-14">
              <div class="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-4 select-none">
              <a href="mailto:wtrantan@gmail.com" target="_blank"><button
  class="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
>
<div class="rounded-full flex justify-evenly items-center ">
                      <img src={outlook} alt="GitHub Logo" class=" w-[40px] h-[40px] object-contain" />
                      <p class=" w-[70px] ">Email</p>
                  </div>
</button>
</a>

              </div>
            </div>

            {/* Resume */}
            <div className="h-full max-[1000px]:my-14">
              <div class="green-pink-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer mt-6 select-none">
              <a href={resume} title="William Trantan Resume" target="_blank"><button
  class="cursor-pointer flex justify-between z-10 bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
>
  Resume
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="2"
    stroke="currentColor"
    class="w-5 h-5 animate-bounce"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    ></path>
  </svg>
</button>
</a>

                {/* <a href={resume} title="William Trantan Resume" target="_blank" className="py-3 px-8 rounded-xl outline text-white font-bold z-10">
                  <span className="hidden sm:inline">View</span> Resume
                </a> */}
              </div>
            </div>
          </motion.p>
          
    </div>
  );
};

export default SectionWrapper(About, "about");
import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";

// Service Card Component
const ServiceCard = ({ index, title, icon }) => {
  return (
<div className="relative z-0 ml-[-40px] ">
  <Tilt className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px]">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-[230px] h-[220px] bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-25 
      rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.08] p-6 
      hover:bg-opacity-30 transform hover:rotate-1 relative z-0"
    >
      <div className="rounded-2xl py-6 px-6 flex flex-col justify-center items-center text-white">
        <img src={icon} alt={title} className="w-16 h-16 object-contain drop-shadow-md" />
        <h3 className="text-white text-[20px] font-bold tracking-wide text-center mt-4 transition-all duration-300 hover:text-blue-400">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
</div>

  );
};

export default function About() {
  return (
    <div className={`${styles.padding} bg-slate-800 text-white relative overflow-hidden`}>
      {/* Added Proper Top Margin to Fix Upper Border Issue */}
      <motion.div id="about" className="text-center mt-16">
        <p className={`${styles.sectionSubText} text-gray-400 text-lg font-serif`}>
          🌟 My Journey
        </p>
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-5xl font-extrabold tracking-wide drop-shadow-lg">
          Who Am I?
        </h2>
      </motion.div>

      {/* Parent Flex Container with Proper Spacing */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mt-14 px-8">
        {/* Left Side: About Text */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-gray-200 text-[18px] leading-[32px] max-w-2xl px-8 font-light tracking-wide 
          bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 bg-opacity-20 border border-white 
          border-opacity-25 p-8 rounded-xl shadow-lg backdrop-blur-lg hover:shadow-2xl 
          transition-all duration-300 hover:scale-[1.03]"
        >
          🚀 I'm a <span className="text-blue-400 font-semibold">passionate Web Developer</span>,  
          driven by the power of technology and creativity.  
          I specialize in <span className="text-purple-400 font-semibold">JavaScript, React, Node.js, and MongoDB</span>,  
          crafting engaging, high-performance web applications.  
          <br />
          <br />
          Started with <span className="text-green-400 font-semibold">HTML, CSS, and JavaScript</span>, I quickly evolved into  
          <span className="text-yellow-400 font-semibold">React</span> for front-end mastery.  
          On the backend, I harness the power of <span className="text-pink-400 font-semibold">Node.js and Express</span>  
          with <span className="text-red-400 font-semibold">MongoDB</span> as my database backbone.  
          <br />
          <br />
          I live for solving complex problems, embracing new technologies,  
          and building meaningful solutions.  
          <span className="text-indigo-400 font-semibold"> My dream? To become an elite MERN Stack Developer! </span>  
        </motion.p>

        {/* Right Side: Service Cards - Using FLEX for Proper Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 mr-14 gap-x-36 gap-y-4 ">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

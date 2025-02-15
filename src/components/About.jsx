import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import background from "../assets/background.webp"
// Service Card Component
const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="relative z-0 ml-[-40px]">
      <Tilt className="w-full sm:w-[280px] md:w-[300px] lg:w-[320px] cursor-pointer">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-[230px] h-[215px] bg-[#1D1836] bg-opacity-90 backdrop-blur-md 
          border border-white border-opacity-10 rounded-2xl shadow-xl hover:shadow-2xl 
          transition-all duration-300 hover:scale-[1.08] p-6 hover:bg-opacity-30 
          transform hover:rotate-1 relative z-0"
        >
          <div className="rounded-2xl py-6 px-6 flex flex-col justify-center items-center text-white">
            <img src={icon} alt={title} className="w-16 h-16 object-contain drop-shadow-md" />
            <h3 className="text-[20px] font-bold tracking-wide text-center mt-4 transition-all duration-300 hover:text-[#915EFF] bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </div>
  );
};

function About() {
  return (
    <div className={`${styles.padding} text-white relative overflow-hidden`} 
    style={{ backgroundImage: `url(${background})`, backgroundAttachment:"fixed",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center" }}>
      <motion.div id="about" className="text-center mt-16">
        <p className="text-lg text-teal-300">🌟 My Journey</p>
        <h2 className="text-6xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
          Overview.
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mt-14 px-8">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-gray-300 text-[18px] leading-[34px] max-w-2xl px-8 font-light tracking-wide 
          bg-[#1D1836] bg-opacity-90 border border-white border-opacity-10 p-8 rounded-xl shadow-lg 
          backdrop-blur-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]  "
        >
          🚀 I'm a <span className="text-[#915EFF] font-semibold">passionate Web Developer</span>,  
          driven by the power of technology and creativity.  
          I specialize in <span className="text-teal-300 font-semibold">JavaScript, React, Node.js, and MongoDB</span>,  
          crafting engaging, high-performance web applications.  
          <br /><br />
          Started with <span className="text-yellow-400 font-semibold">HTML, CSS, and JavaScript</span>, I quickly evolved into  
          <span className="text-[#915EFF] font-semibold">React</span> for front-end mastery.  
          On the backend, I harness the power of <span className="text-pink-400 font-semibold">Node.js and Express</span>  
          with <span className="text-red-400 font-semibold">MongoDB</span> as my database backbone.  
          <br /><br />
          I live for solving complex problems, embracing new technologies,  
          and building meaningful solutions.  
          <span className="text-indigo-400 font-semibold"> My dream? To become an elite MERN Stack Developer! </span>  
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 mr-14 gap-x-36 gap-y-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(About, "about");

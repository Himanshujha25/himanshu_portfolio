import React from "react";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";
import { motion } from "framer-motion";
import background from "../assets/background.webp"

export default function Hero() {
  return (
    <section className="h-screen w-full relative mx-auto flex flex-col justify-between" style={{ backgroundImage: `url(${background})`, backgroundAttachment:"fixed",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>

      {/* Top Content */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5 mt-[30px]`}>

        {/* Left Decoration (Hidden on small screens) */}
        <div className="sm:flex hidden flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] animate-pulse" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent mt-2 animate-fadeIn" />
        </div>

        {/* Hero Text */}
        <div className="mt-5 sm:mt-0 flex flex-col sm:ml-5 justify-center items-start font-sans">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`${styles.heroHeadText} text-white font-extrabold tracking-wide text-[28px] sm:text-[44px]`}
          >
            Hi, I'm
            <span className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text font-extrabold">
              {" "}Himanshu Jha
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className={`${styles.heroSubText} text-white mt-2 font-semibold italic tracking-wider text-[18px] sm:text-[24px]`}
          >
            🚀 Web Developer | Crafting Amazing Web Experiences
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className={`${styles.heroSubText} text-gray-300 mt-3 font-medium text-[14px] sm:text-[18px]`}
          >
            Passionate about building interactive UI & seamless digital experiences.
          </motion.p>


        
        </div>
      </div>

      {/* 3D Model Section */}
      <div className="w-full h-[250px] sm:h-[500px] md:h-[600px] flex justify-center items-center sm:mt-[-200px] md:mt-[-250px]">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute sm:bottom-1 mb-[88px] w-full flex justify-center items-center hidden sm:flex">
        <a href="#about">
          <div className="w-8 h-14 rounded-3xl border-2 border-gray-500 p-2 flex justify-center items-center cursor-pointer hover:border-white transition-all duration-300">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
              className="w-4 h-4 rounded-full bg-gray-500"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

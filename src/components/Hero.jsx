import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen w-full relative mx-auto flex flex-col justify-between bg-slate-800">
      {/* Top Content */}
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col sm:flex-row items-start gap-5 mt-[30px]`}>

        {/* Left Decoration (Hidden on small screens) */}
        <div className="sm:flex hidden flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent mt-2" />
        </div>

        {/* Hero Text */}
        <div className="mt-5 sm:mt-0 flex flex-col sm:ml-5 justify-center items-start">
          <h1 className={`text-white font-extrabold font-poppins tracking-wide ${styles.heroHeadText} text-[24px] sm:text-[38px]`}>
            Hi, I'm <span className="bg-gradient-to-r from-[#4c16c0] to-[#915eff] text-transparent bg-clip-text font-extrabold">Himanshu Jha</span>
          </h1>
          <p className={`${styles.heroSubText} text-white mt-0 font-semibold italic tracking-wider text-[15px] sm:text-[20px]`}>
            Web Developer | Crafting Amazing Web Experiences
          </p>
          <p className={`${styles.heroSubText} text-gray-300 mt-3 font-medium text-[13px] sm:text-[17px]`}>
            Passionate about building interactive UI & seamless digital experiences.
          </p>
        </div>
      </div>

      {/* 3D Canvas Section */}
      <div className="w-full h-[350px] sm:h-[500px] md:h-[600px] flex justify-center items-center sm:mt-[-200px] md:mt-[-250px]">

      <ComputersCanvas />
      </div>

      <div className="justify-center items-center absolute xs:bottom-12 mb-11 w-full flex">
        <a href="#about">
          <div className="w-8 h-14 rounded-3xl border-2 border-secondary p-2 justify-center items-center">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary sb-1 flex justify-center items-center"
            />

          </div>
        </a>
      </div>
    </section>
  );
}

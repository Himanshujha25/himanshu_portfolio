import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

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
          <h1 className={`text-white font-extrabold font-poppins tracking-wide ${styles.heroHeadText} text-[22px] sm:text-[35px]`}>
            Hi, I'm <span className="text-[#4c16c0] font-extrabold">Himanshu Jha</span>
          </h1>
          <p className={`${styles.heroSubText} text-white mt-0 font-bold text-[14px] sm:text-[18px]`}>
            Web Developer | Crafting Amazing Web Experiences
          </p>
          <p className={`${styles.heroSubText} text-white mt-3 font-bold text-[12px] sm:text-[16px]`}>
            Passionate about creating user-friendly interfaces and seamless experiences
          </p>
        </div>
      </div>

      {/* 3D Canvas Section */}
      <div className="w-full h-[350px] sm:h-[500px] md:h-[600px] flex justify-center items-center sm:mt-[-200px] md:mt-[-250px]">
        <ComputersCanvas />
      </div>
    </section>
  );
}

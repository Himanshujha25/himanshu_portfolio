import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc/";
import background from "../assets/background.webp";

const Tech = () => {
  return (
    <div 
      className="min-h-screen px-6 py-16 text-white relative overflow-hidden flex flex-col items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide inline-block pb-2 
                      bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
          Technologies I Know
        </h2>
        <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto"></div>
        <p className="text-gray-300 text-base md:text-lg mt-3">
          Explore the tools and frameworks we work with!
        </p>
      </div>

      {/* Technology Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 sm:gap-14 md:gap-16">
        {technologies.map((technology) => (
          <div 
            key={technology.name} 
            className="w-28 h-32 sm:w-32 sm:h-36 md:w-44 md:h-48 p-4 flex flex-col items-center justify-center 
                      bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg shadow-cyan-300/40 
                      transition-all duration-300 hover:scale-110 hover:shadow-cyan-400/60"
          >
            {/* Show 3D Ball on PC, Image on Mobile */}
            <div className="hidden sm:block w-24 h-24 md:w-32 md:h-32">
              <BallCanvas icon={technology.icon} />
            </div>
            <div className="block sm:hidden">
              <img src={technology.icon} alt={technology.name} className="w-16 h-16 object-contain" />
            </div>

            {/* Responsive Text */}
            <p className="mt-3 text-xs sm:text-sm md:text-lg font-semibold 
                          bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text text-center">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech,"tech");

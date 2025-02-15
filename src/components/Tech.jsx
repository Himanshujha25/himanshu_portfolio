import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc/";
import background from "../assets/background.webp"

const Tech = () => {
  return (
    <div className="min-h-screen px-6 py-16 text-white relative overflow-hidden"
    style={{ backgroundImage: `url(${background})`, backgroundAttachment:"fixed",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center" }}>
      {/* Heading Section */}
      <div className="text-center mb-12 relative">
        <h2 className="text-6xl md:text-5xl font-extrabold tracking-wider relative inline-block pb-2 
                       bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
          Technologies I Know
        </h2>
        {/* Underline Effect */}
        <div className="absolute left-1/2 bottom-0 w-24 h-1 bg-cyan-400 rounded-full transform -translate-x-1/2"></div>
        <p className="text-gray-300 text-lg mt-3">Explore the tools and frameworks we work with!</p>
      </div>

      {/* Technology Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 min-h-screen lg:grid-cols-5 ml-20 gap-8 justify-center">
        {technologies.map((technology) => (
          <div 
            key={technology.name} 
            className="w-36 h-40 text-white p-4 flex flex-col items-center justify-center 
                       bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg shadow-cyan-300/40 
                       transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/60"
          >
            <BallCanvas icon={technology.icon} />
            <p className="mt-3 text-md font-semibold 
                          bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech);

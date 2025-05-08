import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import background from "../assets/background.webp";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="w-full xs:w-[250px]"
      >
        <div className="bg-[#1d1836]/70 backdrop-blur-lg border border-[#ffffff14] rounded-2xl p-6 min-h-[280px] flex flex-col justify-evenly items-center shadow-2xl hover:shadow-[#915eff]/20 transition-all duration-300 group relative overflow-hidden">
          {/* Neon Border Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#915eff]/50 transition-all duration-300 pointer-events-none" />
          
          <img
            src={icon}
            alt={title}
            className="w-20 h-20 object-contain filter drop-shadow-[0_0_15px_rgba(145,94,255,0.3)]"
          />
          <h3 className="text-white text-[20px] font-bold text-center bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF6B6B] bg-clip-text text-transparent">
            {title}
          </h3>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#915eff10_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Tilt>
    </motion.div>
  );
};

function About() {
  return (
    <section
      className={`${styles.padding} relative min-h-screen overflow-hidden`}
      style={{ 
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Overlay */}
     
      
      {/* Animated Particles */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div variants={textVariant()} id="about" className="text-center">
          <p className={`${styles.sectionSubText} text-teal-300`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} mb-12`}>
            Professional <span className="text-[#915eff]">Overview</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="flex-1 bg-[#1d1836]/70 backdrop-blur-lg rounded-2xl border border-[#ffffff14] p-8 shadow-xl"
          >
            <p className="text-gray-300 text-lg leading-[32px] font-light tracking-wide">
              <span className="text-[#915eff] font-medium">🚀 Full-Stack Developer</span> specializing in modern web technologies with expertise in:
              
              <ul className="grid grid-cols-2 gap-4 mt-6 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#915eff] rounded-full mr-2" />
                  React & Next.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2" />
                  Node.js & Express
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#FF6B6B] rounded-full mr-2" />
                  MongoDB & PostgreSQL
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#00FF88] rounded-full mr-2" />
                  TypeScript
                </li>
              </ul>

              With <span className="text-[#915eff]">9+ Month</span> of experience, I've developed a passion for creating:
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[#915eff] rounded-full flex-shrink-0" />
                  <span>High-performance web applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[#FFD700] rounded-full flex-shrink-0" />
                  <span>Interactive user interfaces</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[#FF6B6B] rounded-full flex-shrink-0" />
                  <span>Scalable backend solutions</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#ffffff08] rounded-xl border border-[#ffffff14]">
                <span className="text-[#915eff]">Current Focus:</span>{" "}
                Building enterprise-level MERN stack applications with a focus on performance and user experience.
              </div>
            </p>
          </motion.div>

          <div className="lg:w-[40%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionWrapper(About, "about");
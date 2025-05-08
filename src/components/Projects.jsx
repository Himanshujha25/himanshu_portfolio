import React from 'react';
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { projects } from "../constants/index";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant, fadeIn } from '../utils/motion';
import background from "../assets/background.webp";

const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgba(29, 24, 54, 0.85)',
        color: "#fff",
        backdropFilter: "blur(12px)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid rgba(255, 215, 0, 0.8)",
        filter: "drop-shadow(0 2px 4px rgba(255, 165, 0, 0.3))"
      }}
      date={
        <span className="text-gray-300 font-medium text-sm md:text-base">
          {project.date}
        </span>
      }
      dateClassName="md:!text-gray-200"
      iconStyle={{
        background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
        boxShadow: "0 8px 30px rgba(255, 165, 0, 0.4)",
        border: "2px solid rgba(255, 255, 255, 0.2)"
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full p-2">
          <motion.img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-contain rounded-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      }
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", "spring", 0.5, 1)}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
          {project.name}
        </h3>

        <p className="text-gray-300 mt-3 leading-relaxed font-medium text-justify">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all 
                ${tag.color} hover:scale-105 hover:shadow-md`}
              style={{
                background: `rgba(${tag.rgb}, 0.2)`,
                border: `1px solid rgba(${tag.rgb}, 0.3)`
              }}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {project.source_code_link && (
          <motion.a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 
              text-black font-bold shadow-lg hover:scale-[1.05] hover:shadow-yellow-300/40 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(255, 165, 0, 0.4)"
            }}
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">🚀</span>
              View Project
            </span>
          </motion.a>
        )}
      </motion.div>
    </VerticalTimelineElement>
  );
};

function Projects() {
  return (
    <section className="relative min-h-screen overflow-hidden" id='project'> 
      {/* Background Layer */}
      <div 
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url(${background})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",

        }}
      >
       
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 opacity-40 z-0">
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

      {/* Content */}
      <div className="relative z-10 py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div 
          variants={textVariant()}
          className="text-center mb-16"
        >
          <p className="text-lg sm:text-xl tracking-wider text-teal-300 font-medium">
            🛠️ My Creations
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-3 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
            Featured Projects
          </h2>
        </motion.div>

        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`} 
              project={project} 
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default SectionWrapper(Projects, "project");
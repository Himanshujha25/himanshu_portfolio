import React from 'react';
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; 
import { projects } from "../constants/index";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from '../utils/motion';
import background from "../assets/background.webp";

const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgba(29, 24, 54, 0.9)', 
        color: "#fff", 
        backdropFilter: "blur(10px)", 
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)", 
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.1)"
      }}
      contentArrowStyle={{ borderRight: "7px solid #FFD700" }}
      date={project.date}
      iconStyle={{ background: "#1D1836", boxShadow: "0px 4px 10px rgba(0,0,0,0.4)" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
      }
    >
      <h3 className="text-[22px] font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
        {project.name}
      </h3>

      <p className="text-[16px] font-semibold text-gray-300 mt-2">
        {project.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span key={index} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>

      {project.source_code_link && (
        <a 
          href={project.source_code_link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-2 z-50 ml-5 px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black rounded-lg font-semibold hover:scale-105 transition-transform "
        >
          View Project
        </a>
      )}
    </VerticalTimelineElement>
  );
};

function Projects() {
  return (
    <div 
      id='project' 
      className="min-h-screen py-10 text-white relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${background})`, 
        backgroundAttachment:"fixed",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center" 
      }}
    >
      <motion.div variants={textVariant()} className="text-center">
        <p className="text-lg text-teal-300">What I have built</p>
        <h2 className="text-6xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
          Projects
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default SectionWrapper(Projects, "project");

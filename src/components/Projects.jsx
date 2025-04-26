import React from 'react';
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { projects } from "../constants/index";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from '../utils/motion';   // We will only use 'textVariant'
import background from "../assets/background.webp";

const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgba(29, 24, 54, 0.85)',
        color: "#fff",
        backdropFilter: "blur(12px)",
        boxShadow: "0px 6px 15px rgba(0,0,0,0.4)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #FFD700" }}
      date={project.date}
      iconStyle={{
        background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
        boxShadow: "0px 6px 20px rgba(0,0,0,0.6)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={project.image}
            alt={project.name}
            className="w-3/5 h-3/5 object-contain"
          />
        </div>
      }
    >
      <h3 className="text-[24px] font-extrabold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
        {project.name}
      </h3>

      <p className="text-[16px] font-semibold text-gray-300 mt-2 leading-relaxed">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        {project.tags.map((tag, index) => (
          <span key={index} className={`text-[14px] ${tag.color} hover:underline`}>
            #{tag.name}
          </span>
        ))}
      </div>

      {project.source_code_link && (
        <a
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-black font-bold shadow-lg hover:scale-105 hover:shadow-yellow-300 transition-all duration-300"
        >
          🔗 View Project
        </a>
      )}
    </VerticalTimelineElement>
  );
};

function Projects() {
  return (
    <div
      id='project'
      className="min-h-screen py-16 px-4 sm:px-10 text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <motion.div variants={textVariant()} className="text-center mb-16">
        <p className="text-lg tracking-wider text-teal-300">🚀 What I have built</p>
        <h2 className="text-5xl sm:text-6xl font-extrabold mt-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
          Projects
        </h2>
      </motion.div>

      <div className="flex flex-col">
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

import React from 'react';
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; 
import { experiences } from "../constants/index";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from '../utils/motion';
import background from "../assets/background.webp"
const ExperienceCard = ({ experience }) => {
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
      date={experience.date}
      iconStyle={{ background: experience.iconBg, boxShadow: "0px 4px 10px rgba(0,0,0,0.4)" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img 
            src={experience.icon} 
            alt={experience.company_name} 
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
      }
    >
      <h3 className="text-[22px] font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
        {experience.title}
      </h3>
      <p className="text-[16px] font-semibold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
        {experience.project_name}
      </p>
      
      <ul className="mt-3 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={index} className="text-gray-300 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

function Experience() {
  return (
    <div id='Project' className="min-h-screen py-10 text-white relative overflow-hidden"
    style={{ backgroundImage: `url(${background})`, backgroundAttachment:"fixed",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center" }}>
      <motion.div variants={textVariant()} className="text-center">
        <p className="text-lg text-teal-300">What I have done so far</p>
        <h2 className="text-6xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
          Projects
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default SectionWrapper(Experience, "experience");

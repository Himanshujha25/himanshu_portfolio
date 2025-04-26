import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import background from "../assets/background.webp"
const educationDetails = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    percentage: "Pursuing",
    institution: "IMS Noida",
    year: "2023 - Present",
  },
  {
    degree: "Higher Secondary Education (12th)",
    percentage: "65%",
    institution: "Nutan Vidya Mandir",
    year: "2021 - 2023",
  },
  {
    degree: "Secondary Education (10th)",
    percentage: "65%",
    institution: "Nutan Vidya Mandir",
    year: "2019 - 2021",
  },
];

const EducationCard = ({ degree, percentage, institution, year, index }) => {
  return (
    <Tilt className="w-full sm:w-[320px] md:w-[350px] lg:w-[370px] cursor-pointer">
      <motion.div
        variants={fadeIn("right", "spring", 0.4 * index, 0.75)}
        className="bg-[#1D1836] bg-opacity-90 backdrop-blur-lg border border-white border-opacity-10 
        rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.08] 
        p-6 hover:bg-opacity-30 transform hover:rotate-1 relative z-0"
      >
        <h3 className="text-[22px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
          {degree}
        </h3>
        <p className="text-[#FFD700] text-[18px] font-semibold mt-1">{percentage}</p>
        <p className="text-white text-[18px] font-semibold mt-2">{institution}</p>
        <p className="text-gray-300 text-[16px] mt-1">{year}</p>
      </motion.div>
    </Tilt>
  );
};

function Education() {
  return (
    <div className="text-white py-16 px-8 relative overflow-hidden min-h-screen"
    style={{ backgroundImage: `url(${background})`, backgroundAttachment:"fixed",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center" }}>
      <motion.div id="education" className="text-center">
        <p className="text-lg text-teal-300">📚 My Academic Journey</p>
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
          Education.
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-14">
        {educationDetails.map((edu, index) => (
          <EducationCard key={index} index={index} {...edu} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Education, "education");

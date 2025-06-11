import React from "react";
import background from "../assets/background.webp";
import { SectionWrapper } from "../hoc";

const certifications = [
  {
    id: 1,
    title: "HTML Introduction",
    description: "Learned the basics of HTML, including structure, elements, and semantic tags.",
    image: "/html.png",
  },
  {
    id: 2,
    title: "HTML & CSS Crash Course",
    description: "Gained hands-on experience in building modern, responsive web pages using HTML & CSS.",
    image: "/html&Css.png",
  },
  {
    id: 3,
    title: "Generative AI",
    description: "Explored AI models, prompt engineering, and real-world applications of Generative AI.",
    image: "/Generative.png",
  },
  {
    id: 4,
    title: "Frontend with Generative AI",
    description: "Integrated AI tools into frontend development to enhance user experience and automation.",
    image: "/frontend(GenAi).png",
  },
  {
    id: 5,
    title: "JavaScript Essentials",
    description: "Mastered core JavaScript concepts including ES6+, functions, and async programming.",
    image: "/javascript.png",
  },
  {
    id: 6,
    title: "Internal Hackathon Winner - IMS Noida",
    description: "Secured 2nd place at the IMS Noida Internal Hackathon with the AI-based travel planner project 'Triply'.",
    image: "/hackthon.jpg",
  },{
  id: 7,
  title: "Meta Front-End Developer Professional Certificate (React)",
  description: "Successfully completed the Meta Front-End Developer Professional Certificate, with a strong focus on building user interfaces using React.",
  image: "/react.jpg" }
  
];

function Certification() {
  return (
    <section
      id="certification"
      className="py-20 px-12 text-white relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Section Heading */}
      <h2 className="text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text uppercase tracking-wide">
        My Certifications
      </h2>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50 border border-yellow-500/20"
          >
            {/* Image Section - Optimized for Clarity */}
            <div className="w-full h-[250px] lg:h-[350px] flex justify-center items-center bg-gray-900">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-auto max-w-full max-h-full object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                {cert.title}
              </h3>
              <p className="text-lg mt-4 text-gray-300 leading-relaxed">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionWrapper(Certification, "certification");

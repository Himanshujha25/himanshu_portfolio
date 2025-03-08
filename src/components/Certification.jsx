import React from "react";
import background from "../assets/background.webp"
const certifications = [
  {
    id: 1,
    title: "HTML Introduction",
    description: "Learned the basics of HTML, including structure, elements, and semantic tags.",
    image: "src/assets/Certifications/html.jpg",
  },
  {
    id: 2,
    title: "HTML & CSS Crash Course",
    description: "Gained hands-on experience in building modern, responsive web pages using HTML & CSS.",
    image: "src/assets/Certifications/html&Css.jpg",
  },
  {
    id: 3,
    title: "Generative AI",
    description: "Explored AI models, prompt engineering, and real-world applications of Generative AI.",
    image: "src/assets/Certifications/Generative.jpg",
  },
  {
    id: 4,
    title: "Frontend with Generative AI",
    description: "Integrated AI tools into frontend development to enhance user experience and automation.",
    image: "src/assets/Certifications/frontend(GenAi).jpg",
  },
  {
    id: 5,
    title: "JavaScript Essentials",
    description: "Mastered core JavaScript concepts including ES6+, functions, and async programming.",
    image: "src/assets/Certifications/javaScript.jpg",
  },
  // {
  //   id: 6,
  //   title: "React",
  //   description: "Mastered core React concepts including ES6+, functions, and async programming.",
  //   image: "src/assets/Certifications/Himanshu javaScript.jpg",
  // },
];

export default function Certification() {
  return (
    <section id="certification"  className="py-16 px-8 text-white relative overflow-hidden min-h-screen"
    style={{ backgroundImage: `url(${background})`, backgroundAttachment:"fixed",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center" }}>
      
      {/* Section Heading with Gradient */}
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text uppercase">
        My Certifications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/50 border border-yellow-500/20"
          >
            {/* Image Section */}
            <div className="w-full h-52">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>

            {/* Text Section */}
            <div className="p-6">
              {/* Certification Title with Gradient */}
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
                {cert.title}
              </h3>
              <p className="text-md mt-3 text-gray-300 leading-relaxed">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


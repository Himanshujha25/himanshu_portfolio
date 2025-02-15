import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt"; // Corrected import
import { SectionWrapper } from "../hoc";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import background from "../assets/background.webp"
const Contact = () => {
  return (
    <div id="contact" className="text-white py-16 px-8 relative overflow-hidden min-h-screen"
    style={{ backgroundImage: `url(${background})`, backgroundAttachment:"fixed",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center" }}>
      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-lg text-teal-300">📩 Get In Touch</p>
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
          Contact Me
        </h2>
      </motion.div>

      {/* Contact Form */}
      <div className="flex items-center justify-center mt-14">
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
          <div>
            <motion.form
              initial="hidden"
              animate="show"
              className="bg-[#1D1836] bg-opacity-90 backdrop-blur-lg border border-white border-opacity-10 
              rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 
              hover:bg-opacity-30 transform hover:rotate-1 relative z-0 w-[400px] sm:w-[500px] md:w-[600px]"
            >
              <div className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-300 text-white text-lg focus:outline-none focus:border-[#FFD700] transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-300 text-white text-lg focus:outline-none focus:border-[#FFD700] transition-all"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={4} // Corrected JSX syntax
                  className="w-full px-4 py-3 bg-transparent border-b border-gray-300 text-white text-lg focus:outline-none focus:border-[#FFD700] transition-all resize-none"
                  required
                ></textarea>
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black py-3 rounded-lg font-bold text-lg 
                  hover:shadow-xl hover:scale-105 transition-all"
                >
                  Send Message 🚀
                </button>
              </div>
            </motion.form>
          </div>
        </Tilt>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <div className="flex justify-center space-x-6 text-3xl text-white mb-6">
          <a href="mailto:jhahiamsnhu930@gmail.com" className="hover:text-[#FFD700] transition-all">
            <FaEnvelope />
          </a>
          <a href="https://github.com/himanshujha25" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-all">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/himanshujha25" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-all">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/himanshujha25" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFD700] transition-all">
            <FaTwitter />
          </a>
        </div>
        <p className="text-gray-100 text-lg">© {new Date().getFullYear()} Himanshu Jha. All Rights Reserved.</p>
        <p className="text-gray-200">📩 jhahiamsnhu930@gmail.com</p>
      </footer>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

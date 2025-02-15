import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import background from "../assets/background.webp";

const Contact = () => {
  return (
    <div
      id="contact"
      className="text-white py-16 px-6 sm:px-8 relative overflow-hidden min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-lg text-teal-300">📩 Get In Touch</p>
        <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
          Contact Me
        </h2>
      </motion.div>

      {/* Contact Form */}
      <div className="flex items-center justify-center mt-10 w-full">
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} className="w-full max-w-[600px]">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            action="https://formsubmit.co/jhahimanshu930@gmail.com"
            method="POST"
            className="bg-[#1D1836] bg-opacity-90 backdrop-blur-lg border border-white border-opacity-10 
              rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 
              hover:bg-opacity-30 transform hover:rotate-1 relative w-full"
          >
            <div className="flex flex-col gap-5">
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-transparent border-b border-gray-300 text-white text-lg focus:outline-none focus:border-[#FFD700] transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-transparent border-b border-gray-300 text-white text-lg focus:outline-none focus:border-[#FFD700] transition-all"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-4 py-3 bg-transparent border-b border-gray-300 text-white text-lg focus:outline-none focus:border-[#FFD700] transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black py-3 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Send Message 🚀
              </button>
            </div>
          </motion.form>
        </Tilt>
      </div>

      {/* Footer */}
      <footer className="mt-10 sm:mt-16 text-center">
        <div className="flex justify-center space-x-4 sm:space-x-6 text-2xl sm:text-3xl text-white mb-6">
          <a
            href="mailto:jhahimanshu930@gmail.com"
            className="hover:text-[#FFD700] transition-all"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/himanshujha25"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD700] transition-all"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-jha-85021a318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD700] transition-all"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/jhahimanshu930"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD700] transition-all"
          >
            <FaTwitter />
          </a>
        </div>
        <p className="text-gray-100 text-sm sm:text-lg">
          © {new Date().getFullYear()} Himanshu Jha. All Rights Reserved.
        </p>
        <p className="text-gray-200 text-xs sm:text-sm">📩 jhahiamsnhu930@gmail.com</p>
      </footer>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

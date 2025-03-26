import { faqs } from "../constants/index";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import background from "../assets/background.webp";

const FAQCard = ({ faq, index, activeIndex, setActiveIndex }) => {
    const isActive = index === activeIndex;
  
    return (
      <motion.div 
        className="mb-6 bg-[rgba(29,24,54,0.9)] backdrop-blur-lg border border-white/10 p-6 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <button 
          onClick={() => setActiveIndex(isActive ? null : index)}
          className="w-full flex justify-between items-center text-left text-white text-xl font-semibold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text"
        >
          {faq.question}
          {isActive ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
        </button>
  
        {isActive && (
          <motion.p 
            className="mt-4 text-gray-300 text-base leading-relaxed"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {faq.answer}
          </motion.p>
        )}
      </motion.div>
    );
  };
  
  const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    return (
      <div 
        id='faq' 
        className="min-h-screen py-16 px-4 md:px-20 relative text-white"
        style={{
          backgroundImage: `url(${background})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-teal-300">Have Questions?</p>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
            FAQ
          </h2>
        </motion.div>
  
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQCard 
              key={index} 
              faq={faq} 
              index={index} 
              activeIndex={activeIndex} 
              setActiveIndex={setActiveIndex} 
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default FAQ;

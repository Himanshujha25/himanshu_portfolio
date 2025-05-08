import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Avatar from "./canvas/Avatar";
import background from "../assets/background.webp";

function Hero() {
  return (
    <section className="h-screen w-full relative overflow-hidden">
      {/* Background Layers */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `url(${background})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
       
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 opacity-40 z-1">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-purple-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150],
              x: [0, (Math.random() - 0.5) * 80],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className={`${styles.paddingX} max-w-7xl mx-auto relative z-10 h-full flex flex-col`}>
        <div className="flex flex-col lg:flex-row items-center justify-between h-full pt-20 pb-40">
          {/* Text Content */}
          <div className="flex-1 lg:max-w-2xl xl:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={`${styles.heroHeadText} text-white mb-6`}>
                Hi, I'm
                <motion.span
                  initial={{ backgroundPositionX: "100%" }}
                  animate={{ backgroundPositionX: "0%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  className="ml-4 bg-gradient-to-r text-yellow-500 bg-[length:200%] text-transparent bg-clip-text"
                >
                  Himanshu Jha
                </motion.span>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-8"
              >
                <motion.p
                  className={`${styles.heroSubText} text-white font-medium`}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    🚀 Full Stack Developer
                  </span>
                  <span className="mx-4 text-purple-300">|</span>
                  <span className="text-cyan-300 italic">Digital Innovator</span>
                </motion.p>

                <motion.p
                  className="text-gray-200 text-xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Crafting immersive digital experiences through cutting-edge web technologies,
                  3D visualization, and intuitive user interfaces that push creative boundaries.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex gap-6 mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.button
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 8px 32px rgba(99, 102, 241, 0.4)",
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href='#project'}
                    className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white shadow-2xl backdrop-blur-lg transition-all"
                  >
                    View Projects
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* 3D Avatar Integration */}
          <motion.div
  className="relative w-full h-[80vh] md:h-screen mt-10 lg:mt-0 lg:w-1/2 flex items-center justify-center"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5, delay: 0.3 }}
>
  <Avatar />
</motion.div>


        </div>
      </div>
    </section>
  );
}

export default Hero;
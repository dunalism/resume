import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Book, Languages } from "lucide-react";
import ProfileImage from "./ProfileImage";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <ProfileImage />
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Hamdika Hidayat Muslim
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 text-gray-200"
          >
            Fullstack Developer & Qur'anic Studies Graduate
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
            >
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Education
              </h3>
              <p className="text-gray-200">UIN Sunan Gunung Djati</p>
              <p className="text-gray-200">GPA: 3.75</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
            >
              <Book className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Expertise
              </h3>
              <p className="text-gray-200">Fullstack Development</p>
              <p className="text-gray-200">Qur'anic Studies</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
            >
              <Languages className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Languages
              </h3>
              <p className="text-gray-200">Indonesian (Native)</p>
              <p className="text-gray-200">Arabic & English (passive) </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

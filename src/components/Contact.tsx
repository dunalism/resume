import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Get In Touch
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <a
              href="https://www.linkedin.com/in/hamdika-alkahfi"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-lg group-hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-200">hamdika-alkahfi</p>
              </motion.div>
            </a>

            <a
              href="https://github.com/dunalism"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-lg group-hover:bg-white/20 transition-colors"
              >
                <Github className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-gray-200">dunalism</p>
              </motion.div>
            </a>

            <a
              href="https://wa.me/628562262113"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-lg group-hover:bg-white/20 transition-colors"
              >
                <MessageSquare className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-200">+628562262113</p>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
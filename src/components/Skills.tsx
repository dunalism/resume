import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout } from 'lucide-react';

const Skills = () => {
  const skills = {
    frontend: ['React JS', 'HTML', 'CSS', 'Tailwind CSS'],
    backend: ['Express JS'],
    database: ['SQL'],
    programming: ['JavaScript', 'TypeScript']
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-primary"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={item}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Layout className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={item}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Code2 className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-4">Backend & Programming</h3>
            <ul className="space-y-2">
              {[...skills.backend, ...skills.programming].map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={item}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Database className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-4">Database</h3>
            <ul className="space-y-2">
              {skills.database.map((skill) => (
                <li key={skill} className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Auction and Bid Indonesia",
      description:
        "An auction platform allowing users to browse, bid, and purchase items through a competitive bidding process.",
      duration: "Sept 2024 - Oct 2024",
      repository: "https://github.com/dunalism/abidin",
      demo: null,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Enigma Laundry",
      description:
        "A laundry service platform offering easy scheduling, order tracking, and customer management.",
      duration: "Aug 2024 - Sept 2024",
      repository: "https://github.com/dunalism/challenge-react-laundry",
      demo: null,
      image:
        "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Laundry API",
      description:
        "A RESTful API for a laundry service platform to streamline customer records and order management.",
      duration: "Oct 2024 - Nov 2024",
      repository: "https://github.com/dunalism/laundryapi",
      demo: "https://laundry-ts.vercel.app/",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="project" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-primary"
        >
          Project Portfolio
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-4">{project.duration}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-accent hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo ? project.demo : "#project"}
                    className="flex items-center text-accent hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

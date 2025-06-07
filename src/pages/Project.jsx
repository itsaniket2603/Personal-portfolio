import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Study Notion",
    description:
      "A modern note-taking app to organize your study materials efficiently with tagging and search features.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/itsaniket2603/Personal-project",
    live: "https://personal-project-two-ruby.vercel.app/", // Add live URL if available
  },
  {
    title: "Heart Disease Prediction System",
    description:
      "A machine learning-based system to predict heart disease risk using patient data and provide preventive suggestions.",
    techStack: ["Python", "Flask", "scikit-learn", "React"],
    github: "https://github.com/itsaniket2603/Heart-Disease-Prediction-System-Using-ML",
    live: "#",
  },
  {
    title: "EV Charging System",
    description:
      "A web platform to manage electric vehicle charging stations with real-time status and booking features.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
    github: "https://github.com/itsaniket2603/EV-Charging-System",
    live: "https://ev-charging-system-9et4.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full px-6 py-16 bg-gray-900 text-gray-300"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-cyan-400 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/50 transition-shadow cursor-pointer flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              {project.title}
            </h3>

            <p className="mb-4 text-gray-300 flex-grow">{project.description}</p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-cyan-600 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-600 transition"
                aria-label={`${project.title} GitHub`}
              >
                GitHub
              </a>

              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-600 transition"
                  aria-label={`${project.title} Live Demo`}
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

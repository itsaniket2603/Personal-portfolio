import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-6 py-16 bg-gray-900 text-gray-300 flex flex-col justify-center items-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-cyan-400 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="mb-6 leading-relaxed text-lg max-w-3xl text-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hello! I'm <span className="text-cyan-400 font-semibold">Aniket Kumar</span>, a passionate Frontend Developer
        who loves building clean, responsive, and user-friendly websites.
        I work with cutting-edge technologies to deliver seamless digital experiences.
      </motion.p>

      <motion.p
        className="mb-8 leading-relaxed text-lg max-w-3xl text-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I have hands-on experience with both frontend and backend technologies, and I'm constantly learning new tools and frameworks to keep up with the latest trends.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full max-w-4xl"
      >
        <h3 className="text-2xl font-semibold mb-4 text-white text-center">Technologies I Know</h3>
        <div className="flex flex-wrap justify-center gap-6 text-4xl text-cyan-400">
          {[
            { icon: <FaHtml5 className="hover:text-orange-500 transition" />, label: "HTML5" },
            { icon: <FaCss3Alt className="hover:text-blue-500 transition" />, label: "CSS3" },
            { icon: <FaJs className="hover:text-yellow-400 transition" />, label: "JavaScript" },
            { icon: <FaReact className="hover:text-blue-400 transition" />, label: "React" },
            { icon: <SiRedux className="hover:text-purple-600 transition" />, label: "Redux" },
            { icon: <FaNodeJs className="hover:text-green-600 transition" />, label: "Node.js" },
            { icon: <FaPython className="hover:text-blue-600 transition" />, label: "Python" },
            { icon: <SiMongodb className="hover:text-green-500 transition" />, label: "MongoDB" },
            { icon: <SiMysql className="hover:text-blue-700 transition" />, label: "MySQL" },
            { icon: <SiTailwindcss className="hover:text-teal-400 transition" />, label: "Tailwind CSS" },
          ].map(({ icon, label }, index) => (
            <div key={index} className="flex flex-col items-center w-24">
              {icon}
              <span className="text-sm mt-2 text-gray-300">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;

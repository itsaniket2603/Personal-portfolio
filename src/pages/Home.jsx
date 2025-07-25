import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/portfolio2.jpeg"; // your photo here

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full px-6 py-16 bg-gray-900 text-gray-300 flex flex-col md:flex-row items-center justify-center gap-10"
    >
      {/* Photo with zoom-in animation */}
      <motion.div
        className="w-56 h-56 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px #22d3ee" }}
      >
        <img
          src={myPhoto}
          alt="Aniket Kumar"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text content */}
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-cyan-400">
          Hi, I'm Aniket Kumar
        </h1>
        <p className="mb-6 leading-relaxed text-lg">
          A passionate Full-Stack Developer who loves building clean, responsive, and user-friendly websites using modern technologies.
        </p>
        <p className="mb-6 leading-relaxed text-lg">
          Skilled in React, Tailwind CSS, JavaScript, and constantly learning new tools to create seamless digital experiences.
        </p>
        <a
          href="#contact"
          className="inline-block bg-cyan-400 text-gray-900 px-6 py-3 rounded-md font-semibold shadow-md hover:bg-cyan-500 transition"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
};

export default Home;

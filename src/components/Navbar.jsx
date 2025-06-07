import React from "react";
import Resume from "../assets/Resume.pdf";

const Navbar = () => {
  return (
    <nav className="bg-[#0F172A] text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Aniket</h1>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
        <a
          href={Resume}
          download="Aniket_Kumar_Resume"
          className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

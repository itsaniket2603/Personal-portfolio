import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-8">
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center pt-6 text-sm space-x-6">
          <p>&copy; {new Date().getFullYear()} Aniket Kumar. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a
              href="https://github.com/itsaniket2603"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="GitHub"
            >
              <i className="uil uil-github-alt text-lg"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/aniket-kumar-377897215/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              <i className="uil uil-linkedin-alt text-lg"></i>
            </a>

            <a
              href="https://www.instagram.com/its.aniket26/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition"
              aria-label="Instagram"
            >
              <i className="uil uil-instagram text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

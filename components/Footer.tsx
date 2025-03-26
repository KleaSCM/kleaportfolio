import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        {/* Left: Copyright */}
        <p className="text-center md:text-left tracking-wide">
          &copy; {new Date().getFullYear()} <span className="text-blue-400 font-semibold">Klea</span>. All rights reserved.
        </p>

        {/* Right: Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/KleaSCM"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 flex items-center space-x-2 group"
          >
            <FaGithub className="text-lg group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline border-b border-transparent group-hover:border-gray-400">
              GitHub
            </span>
          </a>

          <a
            href="https://linkedin.com/in/KleaSCM"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 flex items-center space-x-2 group"
          >
            <FaLinkedin className="text-lg group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline border-b border-transparent group-hover:border-gray-400">
              LinkedIn
            </span>
          </a>

          <a
            href="mailto:klea@klea.com"
            className="hover:text-white transition duration-300 flex items-center space-x-2 group"
          >
            <FaEnvelope className="text-lg group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline border-b border-transparent group-hover:border-gray-400">
              Email
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

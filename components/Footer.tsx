"use client"
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-black text-gray-400 py-8 mt-12 border-t border-white/10 transition-shadow duration-500 ${
        isHovered ? 'shadow-[0_0_60px_rgba(0,255,255,0.2)]' : ''
      }`}
    >
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none bg-cyan-400/10 blur-2xl rounded-xl transition duration-500" />
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <p className="text-center md:text-left tracking-wide">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-blue-400 font-semibold">Klea</span>. All rights reserved.
        </p>

        <div className="flex space-x-6">
          {[
            {
              href: 'https://github.com/KleaSCM',
              label: 'GitHub',
              icon: <FaGithub />,
            },
            {
              href: 'https://linkedin.com/in/KleaSCM',
              label: 'LinkedIn',
              icon: <FaLinkedin />,
            },
            {
              href: 'mailto:klea@klea.com',
              label: 'Email',
              icon: <FaEnvelope />,
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-white transition duration-300 flex items-center space-x-2"
            >
              <span className="text-xl group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-300 ease-out">
                {icon}
              </span>
              <span className="hidden sm:inline border-b border-transparent group-hover:border-gray-400">
                {label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p>&copy; 2025 Klea Portfolio. All Rights Reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="https://github.com/KleaSCM" className="hover:text-gray-400">GitHub</a>
        <a href="https://linkedin.com/in/KleaSCM" className="hover:text-gray-400">LinkedIn</a>
        <a href="mailto:klea@klea.com" className="hover:text-gray-400">Email</a>
      </div>
    </footer>
  );
};

export default Footer;

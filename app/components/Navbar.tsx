import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Corrected Link Usage */}
        <Link href="/" className="text-lg font-bold">
          Klea Portfolio
        </Link>
        <div className="space-x-4">
          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="#projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-gray-300">
            Skills
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

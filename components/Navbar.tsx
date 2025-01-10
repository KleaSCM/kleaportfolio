import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 bg-opacity-80 text-white px-4 py-3 rounded-full shadow-lg backdrop-blur-md">
      <div className="flex items-center space-x-6">
        {/* Home Button */}
        <Link href="/" className="hover:text-gray-300">
          <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 10.5l8.25-7.5 8.25 7.5m-14.25 0v10.5h6v-7.5h6v7.5h6v-10.5"
              />
            </svg>
            <span className="text-sm font-semibold">Home</span>
          </div>
        </Link>

        {/* GitHub */}
        <Link
          href="https://github.com/your-profile"
          target="_blank"
          className="hover:text-gray-300"
        >
          <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110">
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
              alt="GitHub"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold">GitHub</span>
          </div>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          className="hover:text-gray-300"
        >
          <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold">LinkedIn</span>
          </div>
        </Link>

        {/* CurseForge */}
        <Link
          href="https://www.curseforge.com/"
          target="_blank"
          className="hover:text-gray-300"
        >
          <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110">
            <img
              src="https://img.icons8.com/windows/32/ffffff/curseforge.png"
              alt="CurseForge"
              className="w-6 h-6"
            />
            <span className="text-sm font-semibold">CurseForge</span>
          </div>
        </Link>

        {/* Skills */}
        <Link href="#skills" className="hover:text-gray-300">
          <div className="flex flex-col items-center transition-transform duration-200 hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5v7.5m-3-10.5v10.5m-3-13.5v13.5m-3-16.5v16.5"
              />
            </svg>
            <span className="text-sm font-semibold">Skills</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

"use client";

import React from "react";
import { motion } from "framer-motion";

const techLogos = [
  { id: 1, name: "js", position: { top: "10%", left: "8%" } },
  { id: 2, name: "ts", position: { top: "20%", left: "60%" } },
  { id: 3, name: "nextjs", position: { top: "3%", left: "50%" } },
  { id: 4, name: "firebase", position: { top: "25%", left: "72%" } },
  { id: 5, name: "mysql", position: { top: "1%", left: "20%" } },
  { id: 6, name: "react", position: { top: "2%", left: "40%" } },
  { id: 7, name: "nodejs", position: { top: "4%", left: "30%" } },
];

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white text-center py-2 relative">
      <div className="max-w-4xl mx-auto px-4 z-10">
        <h1 className="text-3xl font-extrabold">
          Hi, I’m <span className="text-yellow-300">Klea</span>
        </h1>
        <p className="mt-2 text-base">
          Software Engineer | Full Stack Developer | Problem Solver
        </p>
      </div>

      {/* Invisible Bounding Container */}
      <div className="relative mx-auto w-[400px] h-[200px] border border-transparent overflow-hidden">
        {/* Animated Tech Cards */}
        {techLogos.map((tech) => (
          <motion.div
            key={tech.id}
            initial={{
              opacity: 0,
              scale: 0.2,
              x: "100vw", 
              y: "100vh",
            }}
            animate={{
              opacity: 1,
              scale: 0.7,
              x: 0,
              y: 0,
              top: tech.position.top,
              left: tech.position.left,
            }}
            transition={{
              delay: tech.id * 0.3,
              duration: 1,
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className="absolute w-12 h-12 border border-white rounded-lg overflow-hidden shadow-lg"
          >
            {/* Image filling the icon */}
            <img
              src="/images/project.png"
              alt={`${tech.name} logo`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Neon Text */}
            <span className="absolute bottom-0 w-full text-center text-white text-sm font-bold bg-black bg-opacity-50">
              <span
                className="text-white"
                style={{
                  textShadow:
                    "0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 15px #00FF00, 0 0 20px #00FF00, 0 0 25px #00FF00, 0 0 30px #00FF00",
                }}
              >
                {tech.name}
              </span>
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Hero;

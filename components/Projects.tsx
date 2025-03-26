"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { id: 1, title: "GipityLauncher", image: "/images/project.png", link: "/projects/GipityLauncher", blurb: "A sleek launcher for apps built with Go and Fyne." },
  { id: 2, title: "Armanda", image: "/images/project.png", link: "/projects/Armanda", blurb: "Real-time fleet strategy simulation with smart unit AI." },
  { id: 3, title: "ArtScape", image: "/images/project.png", link: "/projects/ArtScape", blurb: "A digital art gallery showcasing generative visuals." },
  { id: 4, title: "BlueFrog", image: "/images/project.png", link: "/projects/BlueFrog", blurb: "Privacy-first messaging built with encryption in mind." },
  { id: 5, title: "Kdeamon", image: "/images/project.png", link: "/projects/Kdeamon", blurb: "A blazing-fast fuzzy launcher daemon for Linux." },
  { id: 6, title: "GeoGO", image: "/images/project.png", link: "/projects/GeoGO", blurb: "Meteorite geolocation and spatial search API using PostGIS." },
  { id: 7, title: "ShandrisAI", image: "/images/project.png", link: "/projects/ShandrisAI", blurb: "An LLM-powered identity-aware AI assistant with memory." },
  { id: 8, title: "VulSCAN", image: "/images/project.png", link: "/projects/VulSCAN", blurb: "Lightweight vulnerability scanner with plugin architecture." },
  { id: 9, title: "Physics Engine", image: "/images/project.png", link: "/projects/PhysicsEngine", blurb: "C++ physics simulation core with 3D collisions and forces." },
];

const positions: Record<number, { top: string; left: string }> = {
  1: { top: "18%", left: "15%" },
  2: { top: "11%", left: "8%" },
  3: { top: "18%", left: "65%" },
  4: { top: "10%", left: "72%" },
  6: { top: "60%", left: "65%" },
  7: { top: "60%", left: "15%" },
  8: { top: "67%", left: "8%" },
  9: { top: "67%", left: "72%" },
};


const Projects = () => {
  const [centerCard, setCenterCard] = useState<number>(5);
  const [hoverDelay, setHoverDelay] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCardHover = (id: number) => {
    if (!hoverDelay && id !== centerCard) {
      setCenterCard(id);
      setHoverDelay(true);
      setTimeout(() => setHoverDelay(false), 300);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 to-black text-gray-100 relative"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-400">Projects</h2>
      </div>

      <div className="absolute inset-0 backdrop-blur-[2px] z-0" />

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative mx-auto w-[640px] h-[720px] z-10 rounded-2xl bg-black bg-opacity-30 border border-cyan-500/20 shadow-[0_0_60px_rgba(0,255,255,0.1)] p-6 hover:shadow-[0_0_80px_rgba(0,255,255,0.3)] transition duration-300 ease-in-out"
      >
        <AnimatePresence>
          {projects.map((project) => {
            const isCenter = project.id === centerCard;
            const defaultPos = positions[project.id] || { top: "40%", left: "40%" };
            const rotateX = ((mousePos.y - 300) / 20) * (isCenter ? 1 : 0.2);
            const rotateY = ((mousePos.x - 300) / 20) * (isCenter ? -1 : -0.2);

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => handleCardHover(project.id)}
                drag
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                className={`absolute w-40 h-40 border rounded-lg cursor-pointer overflow-hidden transition-shadow duration-300 ${
                  isCenter
                    ? "shadow-[0_0_30px_10px_rgba(0,255,255,0.4)] border-cyan-400"
                    : "border-gray-700 shadow-lg"
                }`}
                animate={{
                  top: isCenter ? "40%" : defaultPos.top,
                  left: isCenter ? "40%" : defaultPos.left,
                  scale: isCenter ? 1.45 : 1,
                  opacity: isCenter ? 1 : 0.6,
                  zIndex: isCenter ? 100 : 10,
                  rotateX,
                  rotateY,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                whileHover={{
                  scale: isCenter ? 2.6 : 1.1,
                  boxShadow: isCenter
                    ? "0 0 50px rgba(0,255,255,0.6)"
                    : "0 0 15px rgba(255,255,255,0.4)",
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 py-2 px-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold hover:underline block text-sm"
                  >
                    {project.title}
                  </a>
                  {isCenter && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.5 }}
                      className="text-xs text-cyan-200 mt-1 px-1 whitespace-nowrap overflow-hidden [text-wrap:balance]"
                    >
                      {project.blurb.split("").map((char, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.01 * index }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;

"use client";

import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "GipityLauncher", image: "/images/project.png", link: "/projects/GipityLauncher", blurb: "A sleek launcher for apps built with Go and Fyne." },
  { id: 2, title: "Armanda", image: "/images/project.png", link: "/projects/Armanda", blurb: "Real-time fleet strategy simulation with smart unit AI." },
  { id: 3, title: "ArtScape", image: "/images/project.png", link: "/projects/ArtScape", blurb: "A digital art gallery showcasing generative visuals." },
  { id: 4, title: "BlueFrog", image: "/images/bf.png", link: "/projects/BlueFrog", blurb: "Privacy-first messaging built with encryption in mind." },
  { id: 5, title: "Kdeamon", image: "/images/project.png", link: "/projects/Kdeamon", blurb: "A blazing-fast fuzzy launcher daemon for Linux." },
  { id: 6, title: "GeoGO", image: "/images/Geogo.png", link: "/projects/GeoGO", blurb: "Meteorite geolocation and spatial search API using PostGIS." },
  { id: 7, title: "ShandrisAI", image: "/images/shandris.png", link: "/projects/ShandrisAI", blurb: "An LLM-powered identity-aware AI assistant with memory." },
  { id: 8, title: "VulSCAN", image: "/images/vulnscan.png", link: "/projects/VulSCAN", blurb: "Lightweight vulnerability scanner with plugin architecture." },
  { id: 9, title: "Physics Engine", image: "/images/physEng.png", link: "/projects/PhysicsEngine", blurb: "C++ physics simulation core with 3D collisions and forces." },
];

const fanLayout = [
  { left: "10%", rotate: -20 },
  { left: "18%", rotate: -15 },
  { left: "26%", rotate: -10 },
  { left: "34%", rotate: -5 },
  { left: "42%", rotate: 0 },
  { left: "50%", rotate: 5 },
  { left: "58%", rotate: 10 },
  { left: "66%", rotate: 15 },
  { left: "74%", rotate: 20 },
];

const Projects = () => {
  const [order, setOrder] = useState(projects.map((_, i) => i));
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const cycleProjects = () => {
    setOrder((prev) => [...prev.slice(1), prev[0]]);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative">
      <div className="absolute inset-0 backdrop-blur-[2px] z-0" />
      <div className="relative w-full max-w-6xl mx-auto h-[520px]">
        {order.map((projectIndex, positionIndex) => {
          const project = projects[projectIndex];
          const isTop = positionIndex === 0;
          const { left, rotate } = fanLayout[positionIndex];
          const rotateX = ((mousePos.y - 300) / 20) * (isTop ? 1 : 0.2);
          const rotateY = ((mousePos.x - 300) / 20) * (isTop ? -1 : -0.2);

          return (
            <motion.div
              key={project.id}
              onClick={isTop ? cycleProjects : undefined}
              animate={{
                left,
                rotateZ: rotate,
                rotateX,
                rotateY,
                scale: isTop ? 1.15 : 0.95,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{ zIndex: 100 - positionIndex }}
              className={`absolute top-20 w-52 h-72 rounded-xl overflow-hidden border border-cyan-400 cursor-pointer ${
                isTop
                  ? "shadow-[0_0_30px_10px_rgba(0,255,255,0.4)]"
                  : "shadow-lg border-gray-700"
              }`}
              whileHover={{
                scale: isTop ? 1.25 : 1.05,
                boxShadow: isTop
                  ? "0 0 50px rgba(0,255,255,0.6)"
                  : "0 0 15px rgba(255,255,255,0.3)",
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {isTop && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 left-0 w-full bg-black/70 p-3 text-center"
                >
                  <a
                    href={project.link}
                    className="text-md font-bold text-blue-300 hover:underline"
                  >
                    {project.title}
                  </a>
                  <p className="text-xs text-cyan-200 mt-1">
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
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

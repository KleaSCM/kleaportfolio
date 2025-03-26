"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { id: 1, title: "GipityLauncher", image: "/images/project.png", link: "/projects/GipityLauncher" },
  { id: 2, title: "Armanda", image: "/images/project.png", link: "/projects/Armanda" },
  { id: 3, title: "ArtScape", image: "/images/project.png", link: "/projects/ArtScape" },
  { id: 4, title: "BlueFrog", image: "/images/project.png", link: "/projects/BlueFrog" },
  { id: 5, title: "Kdeamon", image: "/images/project.png", link: "/projects/Kdeamon" },
  { id: 6, title: "GeoGO", image: "/images/project.png", link: "/projects/GeoGO" },
  { id: 7, title: "ShandrisAI", image: "/images/project.png", link: "/projects/ShandrisAI" },
  { id: 8, title: "VulSCAN", image: "/images/project.png", link: "/projects/VulSCAN" },
  { id: 9, title: "Physics Engine", image: "/images/project.png", link: "/projects/PhysicsEngine" },
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
      className="py-20 bg-gradient-to-br from-gray-900 to-black text-gray-100"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-400">Projects</h2>
      </div>

      <div className="relative mx-auto overflow-hidden w-[600px] h-[600px]">
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
                className="absolute w-40 h-40 border border-gray-700 shadow-lg rounded-lg cursor-pointer overflow-hidden"
                animate={{
                  top: isCenter ? "40%" : defaultPos.top,
                  left: isCenter ? "40%" : defaultPos.left,
                  scale: isCenter ? 1.35 : 1,
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
                  scale: isCenter ? 2.3 : 1.1,
                  transition: { duration: 0.25 },
                }}
              >
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 py-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold hover:underline"
                  >
                    {project.title}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;

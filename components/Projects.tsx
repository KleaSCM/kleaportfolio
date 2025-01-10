"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "GipityLauncher", image: "/images/project.png", link: "/projects/GipityLauncher" },
  { id: 2, title: "Armanda", image: "/images/project.png", link: "/projects/Armanda" },
  { id: 3, title: "ArtScape", image: "/images/project.png", link: "/projects/ArtScape" },
  { id: 4, title: "BlueFrog", image: "/images/project.png", link: "/projects/BlueFrog" },
  { id: 5, title: "Kdeamon", image: "/images/project.png", link: "/projects/Kdeamon" },
  { id: 6, title: "SylvDA", image: "/images/project.png", link: "/projects/SylvDA" },
  { id: 7, title: "Valeera", image: "/images/project.png", link: "/projects/Valeera" },
  { id: 8, title: "VulSCAN", image: "/images/project.png", link: "/projects/VulSCAN" },
  { id: 9, title: "EncryptDcrypt", image: "/images/project.png", link: "/projects/EncryptDcrypt" },
];

const Projects = () => {
  const [centerCard, setCenterCard] = useState<number>(5); // Default center card is Project 5

  const positions: { [key: number]: { top: string; left: string } } = {
    1: { top: "18%", left: "15%" },
    2: { top: "11%", left: "8%" },
    3: { top: "18%", left: "65%" },
    4: { top: "10%", left: "72%" },
    6: { top: "60%", left: "65%" },
    7: { top: "60%", left: "15%" },
    8: { top: "67%", left: "8%" },
    9: { top: "67%", left: "72%" },
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 to-black text-gray-100"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-400">Projects</h2>
      </div>

      {/* Card Container */}
      <div className="relative mx-auto overflow-hidden w-[600px] h-[600px]">
        {projects.map((project) => {
          const isCenterCard = project.id === centerCard;

          return (
            <motion.div
              key={project.id}
              onClick={() => setCenterCard(project.id)} // Set clicked card as the center card
              className="absolute w-40 h-40 border border-gray-700 shadow-lg rounded-lg cursor-pointer overflow-hidden"
              style={{
                top: isCenterCard
                  ? "40%"
                  : positions[project.id]?.top || "40%",
                left: isCenterCard
                  ? "40%"
                  : positions[project.id]?.left || "40%",
                zIndex: isCenterCard ? 100 : 10,
              }}
              animate={{
                scale: isCenterCard ? 1.15 : 1,
                opacity: centerCard === project.id || centerCard === null ? 1 : 0.5,
              }}
              whileHover={{
                scale: isCenterCard ? 2.2 : 1.1, // Slight zoom effect on hover
                transition: { duration: 0.2 },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.5,
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
      </div>
    </section>
  );
};

export default Projects;

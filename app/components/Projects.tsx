"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A cool project about X.",
    link: "https://github.com/kleascm/project1",
    image: "/images/project.png",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A cool project about Y.",
    link: "https://github.com/kleascm/project2",
    image: "/images/project.png",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A cool project about Z.",
    link: "https://kleascm-link.com/project3",
    image: "/images/project.png",
  },
  {
    id: 4,
    title: "Project 4",
    description: "A cool project about A.",
    link: "https://github.com/kleascm/project4",
    image: "/images/project.png",
  },
  {
    id: 5,
    title: "Project 5",
    description: "A cool project about B.",
    link: "https://kleascm/project5",
    image: "/images/project.png",
  },
  {
    id: 6,
    title: "Project 6",
    description: "A cool project about C.",
    link: "https://github.com/kleascm/project6",
    image: "/images/project.png",
  },
  {
    id: 7,
    title: "Project 7",
    description: "A cool project about D.",
    link: "https://github.com/kleascm/project7",
    image: "/images/project.png",
  },
  {
    id: 8,
    title: "Project 8",
    description: "A cool project about E.",
    link: "https://kleascm/project8",
    image: "/images/project.png",
  },
  {
    id: 9,
    title: "Project 9",
    description: "A cool project about F.",
    link: "https://github.com/kleascm/project9",
    image: "/images/project.png",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelected(selected === id ? null : id);
  };

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
      {/* Invisible Outer Card Container */}
      <div className="relative mx-auto overflow-hidden w-[600px] h-[600px]">
        {/* Project Cards */}
        {projects.map((project) => {
          const isCenterProject = project.id === 5;

          return (
            <motion.div
              key={project.id}
              onClick={() => handleCardClick(project.id)}
              className={`absolute w-40 h-40 border border-gray-700 shadow-lg rounded-lg cursor-pointer overflow-hidden ${
                isCenterProject ? "" : ""
              }`}
              style={{
                top: isCenterProject
                  ? "40%"
                  : selected === project.id
                  ? "40%"
                  : positions[project.id]?.top,
                left: isCenterProject
                  ? "40%"
                  : selected === project.id
                  ? "40%"
                  : positions[project.id]?.left,
                zIndex: selected === project.id
                  ? 100 // Ensure clicked project is on top
                  : isCenterProject
                  ? 50 // Default high zIndex for center project
                  : 10, // Default for others
              }}
              animate={{
                scale: selected === project.id || (isCenterProject && selected === null) ? 2.2 : 1,
                opacity: selected === project.id || selected === null ? 1 : 0.5,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 left-0 w-full text-center text-white bg-black bg-opacity-50 py-2"
              >
                View Project
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

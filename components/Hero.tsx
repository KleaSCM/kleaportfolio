"use client";

import React from "react";
import { motion } from "framer-motion";

const techLogos = [
  // Top Left Group
  {
    id: 1,
    name: "JavaScript",
    badge: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    position: { top: "5%", left: "10%" },
  },
  {
    id: 2,
    name: "TypeScript",
    badge: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    link: "https://www.typescriptlang.org/",
    position: { top: "10%", left: "15%" },
  },
  {
    id: 3,
    name: "Next.js",
    badge: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    link: "https://nextjs.org/",
    position: { top: "15%", left: "20%" },
  },
  {
    id: 4,
    name: "Firebase",
    badge: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
    link: "https://firebase.google.com/",
    position: { top: "20%", left: "25%" },
  },

  // Top Right Group
  {
    id: 5,
    name: "MySQL",
    badge: "https://img.shields.io/badge/mysql-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
    link: "https://www.mysql.com/",
    position: { top: "5%", left: "70%" },
  },
  {
    id: 6,
    name: "React",
    badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    link: "https://reactjs.org/",
    position: { top: "10%", left: "75%" },
  },
  {
    id: 7,
    name: "C++",
    badge: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    link: "https://isocpp.org/",
    position: { top: "15%", left: "80%" },
  },
  {
    id: 8,
    name: "Python",
    badge: "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
    link: "https://www.python.org/",
    position: { top: "20%", left: "85%" },
  },

  // Middle Group (Row 1)
  {
    id: 9,
    name: "Electron",
    badge: "https://img.shields.io/badge/electron-%2347848F.svg?style=for-the-badge&logo=electron&logoColor=white",
    link: "https://www.electronjs.org/",
    position: { top: "40%", left: "30%" },
  },
  {
    id: 10,
    name: "Go",
    badge: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
    link: "https://go.dev/",
    position: { top: "40%", left: "50%" },
  },
  {
    id: 11,
    name: "SASS",
    badge: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
    link: "https://sass-lang.com/",
    position: { top: "40%", left: "70%" },
  },
  {
    id: 12,
    name: "SQLite",
    badge: "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
    link: "https://sqlite.org/index.html",
    position: { top: "45%", left: "50%" },
  },

  // Middle Group (Row 2)
  {
    id: 13,
    name: "MongoDB",
    badge: "https://img.shields.io/badge/mongodb-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    link: "https://www.mongodb.com/",
    position: { top: "50%", left: "30%" },
  },
  {
    id: 14,
    name: "TailwindCSS",
    badge: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    link: "https://tailwindcss.com/",
    position: { top: "50%", left: "70%" },
  },
  {
    id: 15,
    name: "Material-UI",
    badge: "https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white",
    link: "https://mui.com/",
    position: { top: "55%", left: "50%" },
  },
  {
    id: 16,
    name: "GraphQL",
    badge: "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white",
    link: "https://graphql.org/",
    position: { top: "60%", left: "60%" },
  },

  // Bottom Group
  {
    id: 17,
    name: ".NET",
    badge: "https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white",
    link: "https://dotnet.microsoft.com/",
    position: { top: "75%", left: "15%" },
  },
  {
    id: 18,
    name: "Azure",
    badge: "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
    link: "https://azure.microsoft.com/",
    position: { top: "75%", left: "35%" },
  },
  {
    id: 19,
    name: "Lua",
    badge: "https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white",
    link: "https://www.lua.org/",
    position: { top: "75%", left: "65%" },
  },
  {
    id: 20,
    name: "YAML",
    badge: "https://img.shields.io/badge/yaml-%23000000.svg?style=for-the-badge&logo=yaml&logoColor=white",
    link: "https://yaml.org/",
    position: { top: "75%", left: "85%" },
  },
];


const Hero = () => {
  return (
    <section className="pt-20 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white text-center py-2 relative">
      {/* Hero Text */}
      <div className="max-w-4xl mx-auto px-4 z-10">
        <h1 className="text-3xl font-extrabold">
          Hi, I’m <span className="text-yellow-300">Klea</span>
        </h1>
        <p className="mt-2 text-base">
          Software Engineer | Full Stack Developer | Problem Solver
        </p>
      </div>

      {/* Invisible Bounding Container - Matching Hero Section Width */}
      <div className="relative mx-auto max-w-4xl h-[200px] border border-transparent overflow-hidden">
        {techLogos.map((tech, index) => (
          <motion.a
            key={tech.id}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              scale: 0.5,
              x: "100vw",
              y: "100vh",
            }}
            animate={{
              opacity: 1,
              scale: 0.9,
              x: 0,
              y: 0,
              top: tech.position.top,
              left: tech.position.left,
            }}
            transition={{
              delay: index * 0.2,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute w-auto h-auto rounded-lg overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={tech.badge}
              alt={`${tech.name} badge`}
              className="w-full h-full object-cover"
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
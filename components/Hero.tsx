"use client";

import React from "react";
import { motion } from "framer-motion";

const clamp = (value: string, min = -20, max = 90) => {
  const num = parseFloat(value);
  return `${Math.min(Math.max(num, min), max)}%`;
};

const techLogos = [
  {
    id: 1,
    name: "JavaScript",
    badge: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    position: { top: "-20%", left: "5%" },
  },
  {
    id: 2,
    name: "TypeScript",
    badge: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    link: "https://www.typescriptlang.org/",
    position: { top: "-10%", left: "-1%" },
  },
  {
    id: 3,
    name: "Next.js",
    badge: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    link: "https://nextjs.org/",
    position: { top: "2%", left: "5%" },
  },
  {
    id: 4,
    name: "Firebase",
    badge: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
    link: "https://firebase.google.com/",
    position: { top: "18%", left: "3%" },
  },

  {
    id: 5,
    name: "MySQL",
    badge: "https://img.shields.io/badge/mysql-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
    link: "https://www.mysql.com/",
    position: { top: "30%", left: "1%" },
  },
  {
    id: 6,
    name: "React",
    badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    link: "https://reactjs.org/",
    position: { top: "30%", left: "1%" },
  },
  {
    id: 7,
    name: "C++",
    badge: "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
    link: "https://isocpp.org/",
    position: { top: "-12%", left: "18%" },
  },
  {
    id: 8,
    name: "Python",
    badge: "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
    link: "https://www.python.org/",
    position: { top: "-12%", left: "37%" },
  },
  {
    id: 9,
    name: "Electron",
    badge: "https://img.shields.io/badge/electron-%2347848F.svg?style=for-the-badge&logo=electron&logoColor=white",
    link: "https://www.electronjs.org/",
    position: { top: "-8%", left: "55%" },
  },
  {
    id: 10,
    name: "Go",
    badge: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white",
    link: "https://go.dev/",
    position: { top: "-20%", left: "75%" },
  },
  {
    id: 11,
    name: "SASS",
    badge: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white",
    link: "https://sass-lang.com/",
    position: { top: "-3%", left: "78%" },
  },
  {
    id: 12,
    name: "SQLite",
    badge: "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white",
    link: "https://sqlite.org/index.html",
    position: { top: "12%", left: "78%" },
  },

  // Middle Group (Row 2)
  {
    id: 13,
    name: "MongoDB",
    badge: "https://img.shields.io/badge/mongodb-%2347A248.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    link: "https://www.mongodb.com/",
    position: { top: "5%", left: "48%" },
  },
  {
    id: 14,
    name: "TailwindCSS",
    badge: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    link: "https://tailwindcss.com/",
    position: { top: "5%", left: "28%" },
  },
  {
    id: 15,
    name: "Material-UI",
    badge: "https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white",
    link: "https://mui.com/",
    position: { top: "16%", left: "25%" },
  },
  {
    id: 16,
    name: "GraphQL",
    badge: "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white",
    link: "https://graphql.org/",
    position: { top: "14%", left: "60%" },
  },

  // Bottom Group
  {
    id: 17,
    name: ".NET",
    badge: "https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white",
    link: "https://dotnet.microsoft.com/",
    position: { top: "18%", left: "43%" },
  },
  {
    id: 18,
    name: "Azure",
    badge: "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
    link: "https://azure.microsoft.com/",
    position: { top: "26%", left: "77%" },
  },
  {
    id: 19,
    name: "Lua",
    badge: "https://img.shields.io/badge/lua-%232C2D72.svg?style=for-the-badge&logo=lua&logoColor=white",
    link: "https://www.lua.org/",
    position: { top: "32%", left: "53%" },
  },
  {
    id: 20,
    name: "YAML",
    badge: "https://img.shields.io/badge/yaml-%23000000.svg?style=for-the-badge&logo=yaml&logoColor=white",
    link: "https://yaml.org/",
    position: { top: "32%", left: "28%" },
  },
];


const Hero = () => {
  return (
    <section className="pt-20 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white text-center py-2 relative">
      {/* Hero Text */}
      <div className="max-w-4xl mx-auto px-4 z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
          Hi, I’m <span className="text-yellow-300">Klea</span>
        </h1>
        <motion.p
  className="mt-2 text-sm md:text-base font-mono inline-block whitespace-nowrap"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
      },
    },
  }}
>
  {"Software Engineer | Full Stack Developer | Problem Solver".split("").map((char, i) => (
    <motion.span
      key={i}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      {char}
    </motion.span>
  ))}
  <motion.span
    className="inline-block ml-1 animate-pulse"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{
      repeat: Infinity,
      duration: 1,
      ease: "easeInOut",
    }}
  >
    |
  </motion.span>
</motion.p>

      </div>

      {/* Badge Display Box */}
      <div className="relative mx-auto max-w-4xl mt-8 px-4">

      <div className="relative w-full h-[140px] sm:h-[160px] md:h-[180px] overflow-hidden">
      {techLogos.map((tech, index) => (
            <motion.a
              key={tech.id}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                scale: 0.3,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 0.85,
              }}
              transition={{
                delay: index * 0.04,
                duration: 1,
                type: "spring",
                stiffness: 180,
                damping: 20,
              }}
              className="absolute transition-transform hover:scale-110"
              style={{
                top: clamp(tech.position.top),
                left: clamp(tech.position.left),
                transform: "translate(-50%, -50%)",
                width: "8vw",
                maxWidth: "90px",
                minWidth: "50px",
                pointerEvents: "auto",
              }}
            >
              <img
                src={tech.badge}
                alt={`${tech.name} badge`}
                className="w-full h-auto object-contain"
                style={{ display: "block", pointerEvents: "none" }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Hero;
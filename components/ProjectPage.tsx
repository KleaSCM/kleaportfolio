"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ProjectPageProps {
  title: string;
  description: string;
  details: Array<{ name: string; reason: string; badge: string }>;
  codeSnippet: string;
  screenshot: string;
  buttons: Array<{
    label: string;
    link: string;
    icon: string;
  }>;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};

const fadeInStagger = (delayMultiplier: number) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, delay: delayMultiplier * 0.1, ease: "easeInOut" },
});

const ProjectPage: React.FC<ProjectPageProps> = ({
  title,
  description,
  details,
  codeSnippet,
  screenshot,
  buttons,
}) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < codeSnippet.length) {
        setTypedText((prev) => prev + codeSnippet[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 5);

    return () => clearInterval(typingInterval);
  }, [codeSnippet]);

  return (
    <div
      className="project-page px-6 py-10 text-white mt-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(120deg, #0f2027, #203a43, #2c5364)",
        backgroundSize: "200% 200%",
        animation: "gradientShift 6s ease infinite",
        minHeight: "100vh",
      }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 blur-md opacity-50">
          <SyntaxHighlighter
            language="cpp"
            style={vscDarkPlus}
            customStyle={{
              background: "transparent",
              padding: "3rem",
              whiteSpace: "pre-wrap",
              fontSize: "0.75rem",
              lineHeight: "1.25rem",
            }}
          >
            {typedText}
          </SyntaxHighlighter>
        </div>
      </motion.div>

      <div className="relative z-10">
        <motion.div {...fadeInUp} className="text-center">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-lg text-gray-300 mt-4">{description}</p>
        </motion.div>

        <motion.div {...fadeInUp} className="details-section mt-8">
          <h2 className="text-2xl font-bold text-blue-400 text-center">
            Technologies Used
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {details.map((tech, index) => (
              <motion.div
                key={tech.name}
                {...fadeInStagger(index)}
                whileHover={{
                  scale: 1.15,
                  backgroundColor: "#1e3a8a",
                  transition: { duration: 0.2 },
                }}
                className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center space-x-4 transition-transform duration-200"
              >
                <img
                  src={tech.badge}
                  alt={`${tech.name} badge`}
                  className="w-12 h-12 transform hover:scale-110 transition-transform duration-200"
                />
                <div>
                  <h3 className="text-lg font-semibold">{tech.name}</h3>
                  <p className="text-sm text-gray-300">{tech.reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          whileHover={{
            scale: 1.1,
            rotate: 2,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
          className="hero-section mt-10 rounded-lg shadow-lg w-full max-w-3xl mx-auto border-4 border-blue-500 hover:border-blue-300 transition-all duration-200"
        >
          <img
            src={screenshot}
            alt={`${title} screenshot`}
            className="rounded-lg w-full"
          />
        </motion.div>
        <motion.div
  className="code-snippet mt-10 relative overflow-hidden rounded-lg"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
>
  {/* in progress */}
  <motion.div
    aria-hidden="true"
    className="absolute inset-0 z-0 pointer-events-none opacity-20 blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
  >
    <SyntaxHighlighter
      language="cpp"
      style={vscDarkPlus}
      customStyle={{
        background: "transparent",
        padding: "1rem",
        whiteSpace: "pre-wrap",
        fontSize: "0.75rem",
        lineHeight: "1.25rem",
      }}
    >
      {typedText}
    </SyntaxHighlighter>
  </motion.div>

 
  <div className="relative z-10">
    <h2 className="text-2xl font-bold mb-4 text-blue-400">Code Snippet</h2>
    <SyntaxHighlighter
      language="cpp"
      style={vscDarkPlus}
      customStyle={{
        background: "#1e293b",
        borderRadius: "0.375rem",
        padding: "1rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {typedText}
    </SyntaxHighlighter>
  </div>
</motion.div>
 {/* in progress*/}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="links-section mt-10 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Links</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {(buttons || []).map((button, index) => (
              <motion.a
                key={index}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#1e40af",
                  transition: { duration: 0.2 },
                }}
                href={button.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-200"
              >
                <img
                  src={button.icon}
                  alt={`${button.label} icon`}
                  className="w-6 h-6"
                />
                <span className="text-sm font-semibold mt-1">
                  {button.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;

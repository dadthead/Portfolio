import React from "react";
import assets from "../assets/assets";

const projects = [
  {
    title: "Branding Agency",
    description:
      "A creative ad-based website showcasing campaigns with interactive UI.",
    image: assets.dad, 
    tech: ["React", "Vite", "Gsap", "TailwindCSS"],
    live: "https://dadthead.com/", 
    code: "https://github.com/SRIVIDYAGOLLAMUDI/Dad-The-AD.git", 
  },
  {
    title: "Real Estate",
    description:
      "A modern website project with smooth UI and animations built with React and Tailwind.",
    image: assets.dream,
    tech: ["React", "Vite", "TailwindCSS"],
    live: "https://dreamlandprojects.in/",
    code: "#",
  },
  {
    title: "E-Commerce",
    description:
      "Smart home website with responsive design and modern frontend technologies.",
    image: assets.hitech,
    tech: ["React",  "MongoDB", "TailwindCSS", ],
    live: "https://hitechstationery.com/",
    code: "#",
  },
];

const Projects = () => {
  return (
    <div id="projects"className="bg-gray-50 dark:bg-slate-900 py-20 px-5 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-full text-center mb-10">

        <span className="relative text-2xl font-bold text-white  ">
          My <span className="text-purple-500 cursor-pointer"> Projects</span>
          <svg
            className="absolute -bottom-2 left-0   w-full h-3 fill-current"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7F00FF" />
                <stop offset="100%" stopColor="#E100FF" />
              </linearGradient>
            </defs>

            <path
              d="M10 5 C 25 15, 75 0, 100 5"
              stroke="url(#strokeGradient)"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        </span>
      </div>

        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
          
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                
                <div className="flex gap-4 text-sm">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:underline"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-12">
          <button className="inline-block px-6 py-3 border rounded-lg text-purple-500   border-purple-500 hover:text-white transition">
            <a
            href="#">
            View All Projects →
            </a>
          </button>
          
           
        </div>
      </div>
    </div>
  );
};

export default Projects;

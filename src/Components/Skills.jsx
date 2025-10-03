
import {  Laptop } from "lucide-react";


import { SiReact, SiTailwindcss, SiJavascript, SiVite, SiMysql, SiGithub, SiGit, SiHtml5, SiCss3} from "react-icons/si";

const skills = [
  { name: "HTML ", icon: <SiHtml5 className="text-[#1572B6] w-10 h-10" /> },
  { name: "CSS", icon: <SiCss3 className="text-teal-400 w-10 h-10" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] w-10 h-10" /> },
  { name: "React", icon: <SiReact className="text-[#61DAFB] w-10 h-10" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] w-10 h-10" /> },
  { name: "Vite", icon: <SiVite className="text-[#646CFF] w-10 h-10" /> },
  { name: "Responsive Design", icon: <Laptop className="text-teal-400 w-10 h-10" /> },
  { name: "MySql", icon: <SiMysql className="text-[#4479A1] w-10 h-10" /> },

  
  
  { name: "Git", icon: <SiGit className="text-[#F05032] w-10 h-10" /> },
  { name: "GitHub", icon: <SiGithub className="text-[#181717] w-10 h-10" /> },
  
  
];

export default function Skills() {
  return (
    <div id="skills"  className="py-16 bg-slate-900 text-white text-center ">
      <div className="w-full text-center mb-10">

        <span className="relative text-2xl font-bold text-white  ">
          My <span className="text-purple-500 cursor-pointer"> SkillS</span>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 flex flex-col items-center shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="font-semibold mb-3">{skill.name}</h3>
            <div className="w-full ">
              <div
                className={`${skill.color} h-2 rounded-full`}

              ></div>
            </div>
          </div>
        ))}
      </div>
    </div  >
  );
}

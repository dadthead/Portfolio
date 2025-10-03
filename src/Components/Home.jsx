

// import React from 'react'
// import assets from '../assets/assets'
// import {motion} from 'framer-motion'

// const Home = () => {
//   return (
//     <div id="home" className="bg-slate-900 py-10 px-4 md:py-30 md:px-35 overflow-x-hidden">
//       <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-16">

//         {/* Left side text */}
//         <div className="text-center md:text-left flex-1 px-2 sm:px-6 md:px-0">
//           <motion.h1
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1  }}

//            className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">
//             Hi, I'm{" "}
//             <span className="text-purple-500 cursor-pointer">
//               Srividya
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2 }}
//            className="py-2 text-sm sm:text-base md:text-lg text-white">
//             I'm a <span className="font-semibold text-purple-300">Full Stack Developer</span>
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.9 }}
//            className="py-2 text-gray-400 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
//             I build exceptional digital experiences with modern web technologies.
//             Focused on creating beautiful, functional, and user-friendly
//             applications.
//           </motion.p>

//           {/* Buttons */}
//           <div
//            className="flex  md:flex-row sm:flex-row justify-center md:justify-start gap-4 mt-4">
//             <motion.a
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.9 }}a
//               href="/resume.pdf"
//               download="resume.pdf"
//               className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-6 rounded-lg cursor-pointer text-center"
//             >
//               Download CV
//             </motion.a>

//             <motion.button
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.9 }}
//              className="border-2 border-purple-500 text-purple-500 hover:text-white py-2 px-6 rounded-lg cursor-pointer ">
//               <a href="#projects">Projects </a>
//             </motion.button>
//           </div>
//         </div>

//         {/* Right side image */}
//         <div className="flex justify-center md:justify-end flex-1">
//           <div className="relative w-42 h-42 sm:w-60 sm:h-60 md:w-76 md:h-76 lg:w-82 lg:h-82">
//             <motion.img
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 2.9 }}

//               src={assets.img}
//               alt="profile"
//               className="rounded-full border-4 border-purple-300 w-full h-full object-cover shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home





// import React, { useState } from "react";

// export default function ResumeViewer({ resumePath = "/resume.pdf", filename = "resume.pdf" }) {
//   const [showResume, setShowResume] = useState(false);

//   // Download handler
//   const handleDownload = () => {
//     const a = document.createElement("a");
//     a.href = resumePath;
//     a.download = filename;
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 py-30">
//       {/* Main Download button */}
//       <button
//         onClick={() => setShowResume(true)}
//         className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
//       >
//         Open Resume
//       </button>

//       {/* Overlay Modal */}
//       {showResume && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <div className="relative bg-white rounded-xl shadow-xl w-[90%] h-[90%] flex flex-col">
            
//             {/* Top bar with buttons */}
//             <div className="flex justify-between items-center p-3 border-b">
//               <h2 className="font-bold text-violet-500">Sri Vidya Resume</h2>
//               <div className="flex gap-3">
//                 <button
//                   onClick={handleDownload}
//                   className="px-4 py-2 bg-violet-500 text-white rounded-lg hover:text-violet-700 hover:bg-white border border-violet-500"
//                 >
//                   Download
//                 </button>
//                 <button
//                   onClick={() => setShowResume(false)}
//                   className="px-4 py-2 bg-violet-500 text-white rounded-lg  hover:text-violet-600 hover:bg-white border border-violet-500"
//                 >
//                    Close
//                 </button>
//               </div>
//             </div>

//             {/* Resume Preview */}
//             <div className="flex-1 overflow-hidden">
//               <iframe
//                 src={resumePath}
//                 title="Resume Preview"
//                 className="w-full h-full"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }










// import React, { useState } from "react";
// import assets from "../assets/assets";
// import { motion } from "framer-motion";

// const Home = () => {
//   const [showResume, setShowResume] = useState(false);

//   const resumePath = "/resume.pdf"; // make sure resume.pdf is in public/
//   const filename = "Srividya_Resume.pdf";

//   // Download handler
//   const handleDownload = () => {
//     const a = document.createElement("a");
//     a.href = resumePath;
//     a.download = filename;
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//   };

//   return (
//     <div
//       id="home"
//       className="bg-slate-900 py-10 px-4 md:py-30 md:px-35 overflow-x-hidden"
//     >
//       <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-16">
//         {/* Left side text */}
//         <div className="text-center md:text-left flex-1 px-2 sm:px-6 md:px-0">
//           <motion.h1
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1 }}
//             className="text-2xl sm:text-3xl md:text-4xl text-white font-bold"
//           >
//             Hi, I'm{" "}
//             <span className="text-purple-500 cursor-pointer">Srividya</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2 }}
//             className="py-2 text-sm sm:text-base md:text-lg text-white"
//           >
//             I'm a{" "}
//             <span className="font-semibold text-purple-300">
//               Full Stack Developer
//             </span>
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.9 }}
//             className="py-2 text-gray-400 max-w-lg mx-auto md:mx-0 text-sm sm:text-base"
//           >
//             I build exceptional digital experiences with modern web
//             technologies. Focused on creating beautiful, functional, and
//             user-friendly applications.
//           </motion.p>

//           {/* Buttons */}
//           <div className="flex md:flex-row sm:flex-row justify-center md:justify-start gap-4 mt-4">
//             {/* Open Resume Button */}
//             <motion.button
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.9 }}
//               onClick={() => setShowResume(true)}
//               className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-6 rounded-lg cursor-pointer text-center"
//             >
//               Open Resume
//             </motion.button>

//             <motion.button
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.9 }}
//               className="border-2 border-purple-500 text-purple-500 hover:text-white py-2 px-6 rounded-lg cursor-pointer"
//             >
//               <a href="#projects">Projects</a>
//             </motion.button>
//           </div>
//         </div>

//         {/* Right side image */}
//         <div className="flex justify-center md:justify-end flex-1">
//           <div className="relative w-42 h-42 sm:w-60 sm:h-60 md:w-76 md:h-76 lg:w-82 lg:h-82">
//             <motion.img
//               initial={{ opacity: 0, scale: 0 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 2.9 }}
//               src={assets.img}
//               alt="profile"
//               className="rounded-full border-4 border-purple-300 w-full h-full object-cover shadow-lg"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Resume Modal */}
//       {showResume && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           {/* <div className="relative bg-white rounded-xl shadow-xl w-[90%] h-[90%] flex flex-col"> */}
//             <div className="relative bg-white rounded-xl shadow-xl w-[95%] h-[95%] md:w-[90%] md:h-[90%] flex flex-col">

//             {/* Top bar */}
//             <div className="flex justify-between items-center p-3 border-b">
//               <h2 className="font-semibold text-violet-500">Sri Vidya Resume</h2>
//               <div className="flex gap-3">
//                 <button
//                   onClick={handleDownload}
//                   className="px-4 py-2 bg-violet-500 text-white rounded-lg hover:text-violet-700 hover:bg-white border-2 border-violet-500"
//                 >
//                   Download
//                 </button>
//                 <button
//                   onClick={() => setShowResume(false)}
//                   className="px-4 py-2 font-bold text-violet-700 "
//                 >
//                   ✕
//                 </button>
//               </div>
//             </div>

//             {/* PDF Preview */}
//             <div className="flex-1 overflow-hidden">
//               <iframe
//                 src={resumePath}
//                 title="Resume Preview"
//                 className="w-full h-full"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;





import React, { useState } from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [showResume, setShowResume] = useState(false);

  const resumePath = "/resume.pdf"; // make sure resume.pdf is in public/
  const filename = "Srividya_Resume.pdf";

  // Download handler
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = resumePath;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div
      id="home"
      className="bg-slate-900 py-10 px-4 md:py-30 md:px-35 overflow-x-hidden"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between py-15 gap-12 md:gap-8 lg:gap-16">
        {/* Left side text */}
        <div className="text-center md:text-left flex-1 px-2 sm:px-6 md:px-0">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl text-white font-bold"
          >
            Hi, I'm{" "}
            <span className="text-purple-500 cursor-pointer">Srividya</span>
          </motion.h1>

          {/* Animated Titles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="py-2 text-sm sm:text-base md:text-lg text-white"
          >
            I'm a{" "}
            <span className="font-semibold text-purple-300">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer", 2000,
                  "Full Stack Developer", 2000,
                  "React Developer", 2000,
                  "Backend Developer", 2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.9 }}
            className="py-2 text-gray-400 max-w-lg mx-auto md:mx-0 text-sm sm:text-base"
          >
            I build exceptional digital experiences with modern web
            technologies. Focused on creating beautiful, functional, and
            user-friendly applications.
          </motion.p>

          {/* Buttons */}
          <div className="flex md:flex-row sm:flex-row justify-center md:justify-start gap-4 mt-4">
            {/* Open Resume Button */}
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.9 }}
              onClick={() => setShowResume(true)}
              className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-2 px-6 rounded-lg cursor-pointer text-center"
            >
              Open Resume
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.9 }}
              className="border-2 border-purple-500 text-purple-500 hover:text-white py-2 px-6 rounded-lg cursor-pointer"
            >
              <a href="#projects">Projects</a>
            </motion.button>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex justify-center md:justify-end flex-1">
          <div className="relative w-42 h-42 sm:w-60 sm:h-60 md:w-76 md:h-76 lg:w-82 lg:h-82">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2.9 }}
              src={assets.img}
              alt="profile"
              className="rounded-full border-4 border-purple-300 w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-xl shadow-xl w-[95%] h-[95%] md:w-[90%] md:h-[90%] flex flex-col">
            {/* Top bar */}
            <div className="flex justify-between items-center p-3 border-b">
              <h2 className="font-semibold text-violet-500">Sri Vidya Resume</h2>
              <div className="flex gap-3">
                <button
                  onClick={handleDownload}
                  className="px-4 py-2 bg-violet-500 text-white rounded-lg hover:text-violet-700 hover:bg-white border-2 border-violet-500"
                >
                  Download
                </button>
                <button
                  onClick={() => setShowResume(false)}
                  className="px-4 py-2 font-bold text-violet-700 "
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={resumePath}
                title="Resume Preview"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

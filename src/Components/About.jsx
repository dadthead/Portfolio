
import React from "react";
import assets from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div  id="about" className=" dark:bg-gray-900  px-5 md:px-20">

            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full text-center mb-10"> 
                <span className="relative text-2xl font-bold text-white mb-5">
                        About <span className="text-purple-500 cursor-pointer"> Me </span>
                        <svg
                            className="absolute -bottom-2 left-0 w-full h-3 fill-current"
                            viewBox="0 0 100 10"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#a855f7" />
                                    <stop offset="100%" stopColor="#a5b4fc" />
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
                    </motion.div>
            
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

                {/* image */}
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="w-80 md:w-100 lg:w-100 mx-auto relative">
                    <video
                        src={assets.portvideo}
                        autoPlay
                        loop
                        muted
                        className="object-cover w-full h-full z-10"
                    />
                </motion.div>

                {/*  text */}
                <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="flex-1 text-center md:text-left ">
                   
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed py-5">
                        Hello! I’m <span className="font-semibold">Srividya Gollamudi</span>, a
                        <span className="font-semibold"> Web Designer & React Developer</span>. I specialize in building
                        dynamic, responsive, and visually appealing websites using <span className="font-medium text-purple-500 ">React.js, Vite, Tailwind CSS</span> and other modern libraries.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        I have worked on projects like <span className="font-medium text-purple-500 ">Dad The Ad</span>,
                        <span className="font-medium text-purple-500"> Dream Land</span>, and
                        <span className="font-medium text-purple-500 "> Abhi Smart Home</span>, all built as fully functional websites with React, Vite, and Tailwind CSS.
                        I am passionate about creating seamless digital experiences that combine functionality and creativity.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto py-20">

                {/* cards */}
                <motion.h2 
                initial={{ opacity: 0, scale: 0.5}}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full text-center mb-10"> 


                {/* // className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"> */}
                <span className="relative text-2xl font-bold text-white mb-5">
                        Education & Experience
                    <svg
                            className="absolute -bottom-2 left-0 w-full h-3 fill-current"
                            viewBox="0 0 100 10"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#a855f7" />
                                    <stop offset="100%" stopColor="#a5b4fc" />
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
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* education */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-purple-500  mb-3">Education</h3>
                        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                            <li>
                                <span className="font-semibold">St. Mary's Women's Engineering College</span> - B.Tech in AI & Data Science
                            </li>
                            <li>
                                <span className="font-semibold">Diploma in Computer Science</span> - Ongole
                            </li>
                            <li>
                                Schooling in Ponnuru
                            </li>
                        </ul>
                    </div>

                    {/* experience  */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold text-purple-500 mb-3">Experience</h3>
                        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                            <li>
                                Worked on <span className="font-medium text-purple-500 ">Dad The Ad</span>, <span className="font-medium text-purple-500 ">Dream Land</span>, and <span className="font-medium text-purple-500 ">Abhi Smart Home</span> projects as a Web Designer & React Developer
                            </li>
                            <li>
                                Skilled in <span className="font-medium text-purple-500 ">React.js, Vite, Tailwind CSS, Python, Django, SQL</span> and other web technologies
                            </li>
                            <li>
                                Internship experience Web Designer at Dad The Ad <br></br>  AWS at College
                            </li>
                        </ul>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default About;

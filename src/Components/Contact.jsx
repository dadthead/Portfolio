
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="bg-slate-900  items-center justify-center text-white py-16 px-6">

      <div className="w-full text-center mb-10">
        <span className="relative text-2xl font-bold text-white mb-5">
          Contact <span className="text-purple-500 cursor-pointer"> Me </span>
          <svg
            className="absolute -bottom-2 left-0 w-full h-3 fill-current"
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

      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl text-center font-bold mb-4">Contact Information</h2>
        <p className="text-gray-300 text-center mb-10">
          Feel free to reach out to me for project inquiries, collaborations, or just to say hello.
          I'll get back to you as soon as possible.
        </p>

<div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-11">
  {/* Contact Info */}
  <div className="space-y-6 flex flex-col px-6 sm:px-10 md:px-16 lg:px-20">
    {/* Email */}
    <div className="flex items-start gap-4">
      <span className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
        <FaEnvelope className="text-slate-400 w-6 h-6" />
      </span>
      <div className="text-left">
        <p className="font-semibold leading-tight">Email</p>
        <p className="text-slate-300 break-all">vidyagollamudi@gmail.com</p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-start gap-4">
      <span className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
        <FaPhone className="text-slate-400 w-6 h-6" />
      </span>
      <div className="text-left">
        <p className="font-semibold leading-tight">Mobile Number</p>
        <p className="text-gray-300">+91 7032196697</p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-start gap-4">
      <span className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
        <FaMapMarkerAlt className="text-slate-400 w-6 h-6" />
      </span>
      <div className="text-left">
        <p className="font-semibold leading-tight">Location</p>
        <p className="text-gray-300">Guntur, Andhra Pradesh</p>
      </div>
    </div>
  </div>

  {/* Socials */}
  <div className="px-6 sm:px-10 md:px-16 lg:px-20">
    <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
    <div className="flex gap-4 flex-wrap">
      <a
        href="https://github.com/SRIVIDYAGOLLAMUDI"
        className="bg-gray-800 p-3 rounded-full hover:bg-slate-600 transition"
      >
        <FaGithub className="w-5 h-5" />
      </a>
      <a
        href="https://www.linkedin.com/in/srividya-gollamudi-883705267"
        className="bg-gray-800 p-3 rounded-full hover:bg-slate-600 transition"
      >
        <FaLinkedin className="w-5 h-5" />
      </a>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default Contact;

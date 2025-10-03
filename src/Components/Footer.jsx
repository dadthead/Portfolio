import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-6 px-6 sm:px-10 lg:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        
        {/* Left side */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-sm">&copy; 2024 All Rights Reserved</p>
        </div>

        {/* Right side */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6">
          <p className="text-md font-semibold">
            <a href="#home">Home</a>
          </p>
          <p className="text-md font-semibold">
            <a href="#about">About</a>
          </p>
          <p className="text-md font-semibold">
            <a href="#projects">Projects</a>
          </p>
          <p className="text-md font-semibold">
            <a href="#contact">Contact</a>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer


// import React, { useState, useEffect } from "react";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // disable/enable scroll when menu opens (mobile)
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden"; // stop scrolling
//     } else {
//       document.body.style.overflow = "auto"; // enable scrolling
//     }
//   }, [isOpen]);

//   // ✅ Menu items with labels + ids
//   const menuItems = [
//     { label: "Home", id: "home" },
//     { label: "About", id: "about" },
//     { label: "Projects", id: "projects" },
//     { label: "Skills", id: "skills" },
//     { label: "Contact", id: "contact" },
//   ];

//   return (
// <header className="fixed top-0 left-0 w-full bg-slate-900 h-20 flex items-center justify-between px-16 md:px-34 z-50">
//       {/* Logo */}
//       <p className="font-bold text-white cursor-pointer text-xl hover:text-purple-500">
//         Portfolio
//       </p>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-6">
//         {menuItems.map((item) => (
//           <li key={item.id}>
//             <a
//               href={`#${item.id}`} // ✅ same-page scroll
//               className="font-bold text-white cursor-pointer hover:text-purple-500"
//             >
//               {item.label}
//             </a>
//           </li>
//         ))}
//       </ul>

//       {/* Right side + Hamburger */}
//       <div className="flex items-center gap-4">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white font-bold focus:outline-none text-2xl"
//         >
//           {isOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="absolute top-20 left-0 w-full h-screen bg-slate-900 flex flex-col items-center gap-6 py-10 md:hidden z-50">
//           {menuItems.map((item) => (
//             <li key={item.id}>
//               <a
//                 href={`#${item.id}`} // ✅ same-page scroll
//                 className="font-bold text-lg text-purple-500 cursor-pointer"
//                 onClick={() => setIsOpen(false)} // close menu after click
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home"); // track active section

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  // disable/enable scroll when menu opens (mobile)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // track active section with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900 h-20 flex items-center justify-between px-6 md:px-16 z-50">
      {/* Logo */}
      <p className="font-bold text-white cursor-pointer text-xl hover:text-purple-500">
       Vidya Portfolio
      </p>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => setActiveId(item.id)} // 🔥 click lo kooda active
              className={`font-bold cursor-pointer transition ${
                activeId === item.id
                  ? "text-purple-500 underline underline-offset-4"
                  : "text-white hover:text-purple-500"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger (mobile) */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white font-bold focus:outline-none text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-20 left-0 w-full h-screen bg-slate-900 flex flex-col items-center gap-6 py-10 md:hidden z-50">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => {
                  setActiveId(item.id); // 🔥 mobile lo click chesinappudu kooda active
                  setIsOpen(false);
                }}
                className={`font-bold text-lg cursor-pointer ${
                  activeId === item.id
                    ? "text-purple-500 underline underline-offset-4"
                    : "text-white hover:text-purple-500"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;

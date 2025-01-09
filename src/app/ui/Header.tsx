"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "Recent", id: "project" },
    { label: "Feedback", id: "testimonial" },
    { label: "Objective", id: "function" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="bg-transparent text-white p-4 fixed top-3 left-1/2 transform -translate-x-1/2 w-11/12 shadow-md z-50 rounded-full">
      <div className="container flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-bold flex-shrink-0">
        </div>

        {/* Hamburger Icon */}
        <button
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-green-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Navigation as Drawer */}
      <nav className={`fixed top-5 transform w-full sm:w-11/12 bg-transparent z-40 rounded-full transition-transform duration-300 overflow-hidden ${isMenuOpen ? "max-h-screen" : "max-h-0"}`}>
        <ul className="flex flex-wrap justify-center sm:justify-end space-x-3 sm:space-x-6 mr-4">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold absolute left-0 top-1/2 transform -translate-y-1/2 ml-12">
        Hazim Shakri
        </p>
          {navItems.map((item) => (
            <li
              key={item.id} 
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="hover:text-yellow-500 font-bold transition-colors duration-300 text-normal"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

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

  // Navigation links
  const navItems = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "Recent", id: "project" },
    { label: "Feedback", id: "testimonial" },
    { label: "Objective", id: "function" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="bg-white text-green-800 p-4 fixed top-3 left-1/2 transform -translate-x-1/2 w-11/12 shadow-lg z-50 rounded-full">
      <div className="container flex flex-wrap justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl sm:text-3xl font-bold flex-shrink-0">
          <a href="/" className="hover:text-yellow-500">
            Haz Devep
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl text-green-800 hover:text-yellow-500 focus:outline-none"
          >
            <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Navigation */}
        <nav className={`w-full sm:w-auto mt-4 sm:mt-0 ${isMenuOpen ? "block" : "hidden"} sm:block`}>
          <ul className="flex flex-wrap justify-center sm:justify-end space-x-3 sm:space-x-6">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="transform transition-transform duration-300 hover:scale-105 hover:translateX-2"
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="hover:text-yellow-500 font-bold transition-colors duration-300 text-sm sm:text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

"use client"

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-white text-green-800 p-4 fixed top-3 left-1/2 transform -translate-x-1/2 w-11/12 shadow-lg z-50 rounded-full">
      <div className="container flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <a href="/" className="hover:text-yellow-500">
            Haz Devep
          </a>
        </div>
  
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li className="transform transition-transform duration-300 hover:scale-105 hover:translateX-2">
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                className="hover:text-yellow-500 font-bold transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-105 hover:translateX-2">
              <a
                href="#skills"
                onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
                className="hover:text-yellow-500 font-bold transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-105 hover:translateX-2">
              <a
                href="#project"
                onClick={(e) => { e.preventDefault(); scrollToSection('project'); }}
                className="hover:text-yellow-500 font-bold transition-colors duration-300"
              >
                Recent
              </a>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-105 hover:translateX-2">
              <a
                href="#testimonial"
                onClick={(e) => { e.preventDefault(); scrollToSection('testimonial'); }}
                className="hover:text-yellow-500 font-bold transition-colors duration-300"
              >
                Feedback
              </a>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-105 hover:translateX-2">
              <a
                href="#function"
                onClick={(e) => { e.preventDefault(); scrollToSection('function'); }}
                className="hover:text-yellow-500 font-bold transition-colors duration-300"
              >
                Objective
              </a>
            </li>
            <li className="transform transition-transform duration-300 hover:scale-105 hover:translateX-2">
              <a
                href="#service"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="hover:text-yellow-500 font-bold transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

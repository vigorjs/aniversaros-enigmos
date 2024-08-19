import React, { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY); // atau document.documentElement.scrollTop
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`transition-colors duration-500 ${
          scrollPosition > 0
            ? "shadow-lg bg-white text-blue-800"
            : "bg-transparent text-white"
        } w-full fixed top-0 ${
          scrollPosition > 0 ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold flex">
            <a href="/" className="w-48 hover:text-gray-400">
              <img src="./src/assets/enigma.png" />
            </a>
          </div>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden flex items-center px-3 py-2 border rounded text-gray-200 border-gray-700 hover:text-gray-400 hover:border-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Navigation */}
          <nav className={`lg:flex ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-6">
              <li>
                <a
                  href="/#home"
                  className="block px-4 py-2 hover:bg-blue-900 hover:text-blue-50 rounded"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="block px-4 py-2  hover:bg-blue-900 hover:text-blue-50 rounded"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#Quotes"
                  className="block px-4 py-2  hover:bg-blue-900 hover:text-blue-50 rounded"
                >
                  Quotes
                </a>
              </li>
              <li>
                <a
                  href="/#Gallery"
                  className="block px-4 py-2  hover:bg-blue-900 hover:text-blue-50 rounded"
                >
                  Galerry
                </a>
              </li>
              <li>
                <a
                  href="/#Team"
                  className="block px-4 py-2  hover:bg-blue-900 hover:text-blue-50 rounded"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

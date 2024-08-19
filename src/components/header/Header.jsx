import { useState, useEffect } from "react";
import logo from "../../assets/enigma.png";
import logo1 from '../../assets/HutRiLogoPutih.png';


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
            ? "shadow-lg bg-white text-red-800 "
            : "bg-transparent text-white"
        } w-full fixed z-10 top-0 ${
          scrollPosition > 0 ? "bg-white" : "bg-transparent"
        }
        `}
      >
        
        <div className="container mx-auto px-4 py-3 flex justify-between items-center h-[100px]">
          {/* Logo */}
          <div className="text-2xl font-bold flex">
            <a href="/" className="w-48 hover:text-gray-400 duration-500">
            {scrollPosition > 0 ? <img src={logo} /> : <img src={logo1} /> }
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
                  className="block px-4 py-2 hover:bg-red-900 hover:text-blue-50 rounded text-lg font-medium"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="block px-4 py-2  hover:bg-red-900 hover:text-blue-50 rounded text-lg font-medium"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#Quotes"
                  className="block px-4 py-2  hover:bg-red-900 hover:text-blue-50 rounded text-lg font-medium"
                >
                  Quotes
                </a>
              </li>
              <li>
                <a
                  href="/#Gallery"
                  className="block px-4 py-2  hover:bg-red-900 hover:text-blue-50 rounded text-lg font-medium"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/#Team"
                  className="block px-4 py-2  hover:bg-red-900 hover:text-blue-50 rounded text-lg font-medium"
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

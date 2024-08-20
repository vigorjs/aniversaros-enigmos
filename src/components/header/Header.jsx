import { useState, useEffect } from "react";
import logo from "../../assets/whiteEnigma.png";
import logo1 from "../../assets/HutRiLogoPutih.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
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
            ? "shadow-lg bg-[#00072D] text-white"
            : "bg-transparent text-white"
        } w-full fixed z-10 top-0 ${
          scrollPosition > 0 ? "bg-[#00072D]" : "bg-transparent"
        }
        `}
      >
        <div className="container mx-auto px-4 flex justify-between items-center h-[100px]">
          {/* Logo */}
          <div className="text-2xl font-bold flex">
            <a href="/" className="w-48 hover:text-gray-400 duration-500">
              {scrollPosition > 0 ? <img src={logo} /> : <img src={logo1} />}
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
                  className="block px-4 py-2 hover:bg-red-900 hover:text-blue-50 rounded text-lg font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="block px-4 py-2  hover:bg-red-900 hover:text-blue-50 rounded text-lg font-semibold"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#quotes"
                  className="block px-4 py-2  hover:bg-red-900 hover:text-blue-50 rounded text-lg font-semibold"
                >
                  Quotes
                </a>
              </li>
              <li>
                <a
                  href="/#gallery"
                  className="block px-4 py-2  hover:bg-red-900 hover:text-blue-50 rounded text-lg font-semibold"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/#guess"
                  className="block px-4 py-2  hover:bg-red-900 hover:text-blue-50 rounded text-lg font-semibold"
                >
                  Guess
                </a>
              </li>
              <li>
                <a
                  href="/#team"
                  className="block px-4 py-2  hover:bg-red-900 hover:text-blue-50 rounded text-lg font-semibold"
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

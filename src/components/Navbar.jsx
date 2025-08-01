import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Use React Router to get current route

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  // Define your nav links and paths in one location for DRY code
  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <nav className="bg-gray-950 bg-opacity-80 shadow-md px-4 sm:px-8 py-4 relative z-20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-blue-400">RELISH</div>

        {/* Hamburger for mobile */}
        <button
          className="sm:hidden flex items-center justify-center text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-md p-2 transition-all duration-200"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // X icon
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex items-center gap-6 text-base lg:text-lg">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`
                    transition-colors duration-200 py-2
                    ${location.pathname === link.path
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-400 text-white"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 px-6 py-2 rounded text-white font-semibold ml-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            onClick={handleLinkClick}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="mt-4 animate-fadeIn">
          <ul className="flex flex-col gap-1 text-base bg-gray-950 bg-opacity-95 rounded-lg shadow-lg py-4 px-4 border border-gray-800">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`
                    block py-3 px-3 rounded-md transition-colors duration-200 focus:outline-none
                    ${location.pathname === link.path
                      ? "bg-blue-500 text-white font-semibold"
                      : "hover:bg-blue-500 hover:text-white text-white"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-700 mt-2">
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-200 px-4 py-3 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                onClick={handleLinkClick}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

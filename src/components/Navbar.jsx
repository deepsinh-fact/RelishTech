import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/home' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Our Work', href: '/our-work' },
    {name: 'Our Team' , href: '/our-team'},
    { name: 'Contact', href: '/contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#0A1F44] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/home" className="text-2xl font-bold text-white">
              Relish
            </NavLink>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                    ? 'text-white bg-white/10'
                    : 'text-white hover:bg-white hover:text-[#005A9C] hover:shadow-lg transform hover:scale-105'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Get a Quote Button */}
          {/* <div className="hidden lg:block">
            <a
              href="#"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Sign In
            </a>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0E3386]" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `block px-4 py-3 mx-2 rounded-full text-base font-medium transition-all duration-300 ${isActive
                    ? 'text-white bg-white/10'
                    : 'text-white hover:bg-white hover:text-[#005A9C] hover:shadow-lg'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-5">
              <a
                href="#"
                className="block w-full text-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};


export default Navbar;


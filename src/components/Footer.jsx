import React from 'react';
import { Link } from 'react-router-dom';

// Icon components
function Shield({ size, className }) {
  return (
    <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function ChevronRight({ size }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function MapPin({ size, className }) {
  return (
    <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function Mail({ size, className }) {
  return (
    <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function Phone({ size, className }) {
  return (
    <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function Footer() {
    const navLinks = [
        { name: "Home", href: "/home" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" }
    ];

    return (
      <footer className="bg-gray-800 text-gray-300 border-t border-gray-300">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* About */}
                  <div className="space-y-4">
                      <Link to="/home" className="flex items-center gap-2 text-white text-2xl font-bold">
                        <Shield size={28} className="text-blue-400" />
                        <span>RELISH</span>
                      </Link>
                      <p className="text-sm">Providing top-tier cybersecurity solutions to protect your digital assets and ensure peace of mind.</p>
                  </div>
  
                  {/* Quick Links */}
                  <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                      <ul className="space-y-2">
                          {navLinks.map(link => (
                              <li key={link.name}>
                                  <Link to={link.href} className="hover:text-white transition-colors flex items-center gap-2">
                                      <ChevronRight size={16} /> {link.name}
                                  </Link>
                              </li>
                          ))}
                      </ul>
                  </div>
  
                  {/* Contact Info */}
                   <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                      <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                              <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                              <span>123 Security Lane, Cyber City, 12345</span>
                          </li>
                          <li className="flex items-center gap-3">
                              <Mail size={20} className="text-blue-400 flex-shrink-0" />
                              <a href="mailto:contact@relishtech.com" className="hover:text-white">contact@relishtech.com</a>
                          </li>
                          <li className="flex items-center gap-3">
                              <Phone size={20} className="text-blue-400 flex-shrink-0" />
                              <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a>
                          </li>
                      </ul>
                  </div>
  
                  {/* Newsletter */}
                  <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
                      <p className="mb-4 text-sm">Stay updated with the latest cyber threats and news.</p>
                      <form className="flex">
                          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-l-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
                          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 rounded-r-md">&rarr;</button>
                      </form>
                  </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-600 text-center text-sm">
                  <p>&copy; {new Date().getFullYear()} Relish Tech Global. All Rights Reserved.</p>
              </div>
          </div>
      </footer>
    );
}

export default Footer;
import React from 'react';
import facebookIcon from '../assets/icons/facebook.png';
import instagramIcon from '../assets/icons/instagram.png';
import linkedInIcon from '../assets/icons/linkedIn.png';
import twitterIcon from '../assets/icons/twitter.png';
import Logo from '../assets/Logo.png';


const Footer = () => {
    return (
        <footer className="bg-[#191970] text-white bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center">

                            <img
                                src={Logo}
                                alt="Logo"
                                className="h-28 w-auto brightness-0 invert"
                            />

                            <h3 className=" font-bold">RELISH TECH GLOBAL</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Relish Tech Global Solutions Pvt. Ltd. is a cybersecurity and IT risk advisory firm helping small and mid-sized enterprises achieve digital resilience and regulatory confidence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    {/* <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                            <li><a href="/restaurants" className="text-gray-300 hover:text-white transition-colors"> Restaurants</a></li>
                            <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div> */}

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>

                            <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                            <li><a href="/why-choose-us" className="text-gray-300 hover:text-white transition-colors">Why Choose Us</a></li>
                            <li><a href="/our-work" className="text-gray-300 hover:text-white transition-colors">Our Work</a></li>
                            <li><a href="contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-3">
                            <div className="flex items-center">

                                <span className="text-gray-300">+91 99250 98997
                                </span>
                            </div>
                            <div className="flex items-center">
                                {/* <span className="text-white mr-2">📍</span> */}
                                <span className="text-gray-300">E-248, Sumel-11, Near Namaste Circle,
                                    Shahibaug, Ahmedabad – 380004,
                                    Gujarat, India</span>
                            </div>
                            <div className="flex items-center">
                                {/* <span className="text-white mr-2">✉️</span> */}
                                <span className="text-gray-300">support@relish.com</span>
                            </div>
                            <div className="flex items-center">
                                {/* <span className="text-white mr-2">🕒</span> */}
                                <span className="text-gray-300">Mon-Fri: 9:00 AM – 6:00 PM</span>
                            </div>
                            <div className="flex items-center">
                                {/* <span className="text-white mr-2">📅</span> */}
                                <span className="text-gray-300">Sunday: Closed</span>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Find Us</h4>
                        <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-600">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5234567890123!2d72.5678901234567!3d23.0456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzQ0LjQiTiA3MsKwMzQnMDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=E-248,+Sumel-11,+Near+Namaste+Circle,+Shahibaug,+Ahmedabad+380004,+Gujarat,+India"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Relish Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t mt-4 border-gray-600 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="max-w-7xl mx-auto px-6  flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-300 text-sm">
                        © 2025 Relish Platform. All Rights Reserved.
                    </p>



                    <div className="flex space-x-3 mt-3 md:mt-0">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-[#191970] border border-white rounded flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_10px_#ffffff]"
                            aria-label="Facebook"
                        >
                            <img src={facebookIcon} alt="Facebook" className="w-4 h-4" />
                        </a>
                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-[#191970] border border-white rounded flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_10px_#ffffff]"
                            aria-label="X (Twitter)"
                        >
                            <img src={twitterIcon} alt="Twitter" className="w-4 h-4" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-[#191970] border border-white rounded flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_10px_#ffffff]"
                            aria-label="Instagram"
                        >
                            <img src={instagramIcon} alt="Instagram" className="w-4 h-4" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-[#191970] border border-white rounded flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_10px_#ffffff]"
                            aria-label="LinkedIn"
                        >
                            <img src={linkedInIcon} alt="LinkedIn" className="w-4 h-4" />
                        </a>
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;
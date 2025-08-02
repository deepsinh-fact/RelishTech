import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#000000] border-t border-gray-700">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4">Relish Tech</h3>
                        <p className="text-gray-400 mb-4">
                            Cybersecurity and IT risk advisory firm helping enterprises achieve digital resilience and regulatory confidence.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Cybersecurity</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Compliance</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Risk Management</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Our Work</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-700">
                    <p className="text-center text-gray-400">
                        © 2025 Relish Tech Global Solutions Pvt. Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
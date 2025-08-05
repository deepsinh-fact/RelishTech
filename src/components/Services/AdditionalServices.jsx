import React, { useState } from "react";
import { additionalServices } from '../../data'

const AdditionalServices = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);


    return (
        <section className="py-8 sm:py-12 lg:py-16 bg-[#0A1F44] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="inline-block bg-[#191970] text-white text-sm font-semibold py-1 px-3 rounded-full mb-4 border border-white hover:shadow-[0_0_10px_#ffffff]">
                        Core Services
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4 sm:mb-6 tracking-tight">
                        Additional Core Services
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                        Comprehensive solutions to enhance your cybersecurity posture and regulatory compliance.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {additionalServices.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative bg-[#1a2b4a]/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl 
                                       hover:shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 
                                       overflow-hidden border border-blue-400/20 hover:border-blue-400/50 
                                       transform hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer
                                       hover:bg-[#1a2b4a] p-6 sm:p-8 ${hoveredIndex === index ? 'sm:scale-105' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-600/10 to-purple-700/10 
                                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 
                                             group-hover:text-blue-300 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {service.description && (
                                    <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed 
                                                 group-hover:text-gray-200 transition-colors duration-300">
                                        {service.description}
                                    </p>
                                )}

                                <ul className="space-y-3">
                                    {(service.items || service.features || []).map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start group/item">
                                            <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 
                                                           group-hover/item:bg-blue-300 transition-colors duration-300"></div>
                                            <span className="text-gray-300 leading-relaxed 
                                                           group-hover:text-gray-200 transition-colors duration-300">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover indicator */}
                            <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r 
                                           from-blue-400 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 
                                           transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default AdditionalServices;
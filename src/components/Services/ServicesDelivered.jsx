import React, { useState } from 'react';
import { servicesDelivered } from '../../../src/data';

const ServicesDelivered = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section className="py-8 sm:py-12 lg:py-16 bg-[#0A1F44] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-pink-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}


                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="inline-block bg-[#191970] text-white text-sm font-semibold py-1 px-3 rounded-full mb-4 border border-white hover:shadow-[0_0_10px_#ffffff]">
                        Services Delivered
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4 sm:mb-6 tracking-tight">
                        Services Delivered
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
                        Explore our comprehensive solutions designed to secure, streamline, and strengthen your business operations.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {servicesDelivered.map((service, index) => (
                        <div
                            key={service.id}
                            className={`group relative bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl 
                                       hover:shadow-pink-500/20 hover:shadow-2xl transition-all duration-500 
                                       overflow-hidden border border-white/20 hover:border-pink-300 
                                       transform hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer
                                       hover:bg-white ${hoveredIndex === index ? 'sm:scale-105' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 
                                           opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                            {/* Service Image */}
                            <div className="h-32 sm:h-40 lg:h-44 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                                {service.image ? (
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                ) : null}
                                {/* Fallback placeholder */}
                                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center"
                                    style={{ display: service.image ? 'none' : 'flex' }}>
                                    <div className="text-center">
                                        <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-xs text-gray-500 font-medium">Service</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-6 relative z-10">
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 leading-tight 
                                             group-hover:text-blue-900 transition-colors duration-300 line-clamp-2">
                                    {service.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 
                                             group-hover:text-gray-700 transition-colors duration-300">
                                    {service.description}
                                </p>
                                <div className="mt-3 sm:mt-4 flex items-center text-blue-900 opacity-0 
                                               group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-xs sm:text-sm font-medium">Learn more</span>
                                    <svg className="w-3 sm:w-4 h-3 sm:h-4 ml-1 transform group-hover:translate-x-1 
                                                   transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Hover indicator */}
                            <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r 
                                           from-pink-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 
                                           transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesDelivered;
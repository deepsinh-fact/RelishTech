import React, { useState } from "react";
import bankingImg from "../../assets/Service/banking.jpg";
import fintechImg from "../../assets/Service/fintech.jpg";
import healthcareImg from "../../assets/Service/healthcare.jpg";
import automobileImg from "../../assets/Service/automobile.jpg";
import itServiceImg from "../../assets/Service/IT service.jpg";
import startupImg from "../../assets/Service/startup.jpg";
import { industries } from "../../data";
const IndustriesWeServe = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);


    return (
        <div className="py-10 px-4 relative overflow-hidden" style={{ backgroundColor: '#0A1F44' }}>
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Enhanced Header */}
                <div className="text-center mb-16">
                    <div className="inline-block">
                        <h2 className="text-3xl font-medium text-white sm:text-4xl">Industries We Serve</h2>
                    </div>
                    <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
                        Delivering specialized cybersecurity solutions across diverse sectors with industry-specific expertise
                    </p>
                </div>

                {/* Enhanced Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className={`group relative bg-gradient-to-br from-[#1a2f5a] to-[#0f1d3a] backdrop-blur-sm p-8 rounded-2xl border-2 border-blue-400/20 
                                       hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 
                                       transform hover:-translate-y-2 cursor-pointer overflow-hidden
                                       hover:from-[#1e3461] hover:to-[#132040] hover:border-blue-300/50 ${hoveredIndex === index ? 'scale-105' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 
                                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Image container */}
                            <div className="relative z-10 w-full h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-blue-800/50 to-purple-800/50">
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback placeholder */}
                                <div className="w-full h-full bg-gradient-to-br from-blue-800/50 to-purple-800/50 flex items-center justify-center"
                                    style={{ display: 'none' }}>
                                    <div className="text-center">
                                        <div className="w-16 h-16 mx-auto mb-3 bg-blue-600 rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-blue-200 font-medium">Industry</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 
                                             transition-colors duration-300 leading-tight">
                                    {industry.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 
                                             transition-colors duration-300">
                                    {industry.description}
                                </p>
                            </div>

                            {/* Hover indicator */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
                                           from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 
                                           transition-transform duration-300 origin-left"></div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 
                                   text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg 
                                   hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer 
                                   transform hover:scale-105 group">
                        <span>Explore Our Solutions</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustriesWeServe;
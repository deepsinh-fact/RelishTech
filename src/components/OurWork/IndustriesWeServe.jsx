import React, { useState } from "react";
import bankingImg from "../../assets/Service/banking.jpg";
import fintechImg from "../../assets/Service/fintech.jpg";
import healthcareImg from "../../assets/Service/healthcare.jpg";
import automobileImg from "../../assets/Service/automobile.jpg";
import itServiceImg from "../../assets/Service/IT service.jpg";
import startupImg from "../../assets/Service/startup.jpg";

const IndustriesWeServe = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const industries = [
        {
            title: "Banking, NBFCs & Financial Institutions",
            description: "Specialized solutions for the highly regulated financial sector",
            image: bankingImg,
            gradient: "from-blue-500 to-blue-700",
            borderColor: "border-blue-200"
        },
        {
            title: "FinTech & Stock Broking",
            description: "Security for innovative financial technology companies",
            image: fintechImg,
            gradient: "from-green-500 to-green-700",
            borderColor: "border-green-200"
        },
        {
            title: "Healthcare & Insurance",
            description: "Protecting sensitive patient and policyholder data",
            image: healthcareImg,
            gradient: "from-red-500 to-red-700",
            borderColor: "border-red-200"
        },
        {
            title: "Automobile",
            description: "Securing manufacturing and dealership operations",
            image: automobileImg,
            gradient: "from-purple-500 to-purple-700",
            borderColor: "border-purple-200"
        },
        {
            title: "Software Development & IT Services",
            description: "Ensuring secure development and service delivery",
            image: itServiceImg,
            gradient: "from-indigo-500 to-indigo-700",
            borderColor: "border-indigo-200"
        },
        {
            title: "Startups & Private Enterprises",
            description: "Building security foundations for growing businesses",
            image: startupImg,
            gradient: "from-orange-500 to-orange-700",
            borderColor: "border-orange-200"
        }
    ];

    return (
        <div className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#0A1F44' }}>
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
                            className={`group relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl border-2 ${industry.borderColor} 
                                       hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 
                                       transform hover:-translate-y-2 cursor-pointer overflow-hidden
                                       hover:bg-white ${hoveredIndex === index ? 'scale-105' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 
                                           group-hover:opacity-5 transition-opacity duration-500`}></div>

                            {/* Image container */}
                            <div className="relative z-10 w-full h-48 mb-6 rounded-xl overflow-hidden bg-gray-100">
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback placeholder when image fails to load */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center" style={{ display: 'none' }}>
                                    <span className="text-gray-500 text-sm">Image placeholder</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-900 
                                             transition-colors duration-300 leading-tight">
                                    {industry.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 
                                             transition-colors duration-300">
                                    {industry.description}
                                </p>
                            </div>

                            {/* Hover indicator */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
                                           from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 
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
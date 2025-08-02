import React from "react";
import { services } from "../../data";

const WhatWeDo = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-[#0A1F44] to-[#1a365d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        What We Do
                    </h2>
                    
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We offer a full spectrum of services across 7 key domains, providing comprehensive cybersecurity and compliance solutions tailored to your business needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-2xl group-hover:bg-blue-500/30 transition-colors">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-3 mb-4">
                                        <span className="text-blue-400 font-semibold text-lg">
                                            {service.id}.
                                        </span>
                                        <h3 className="text-xl font-semibold text-white">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-300 mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    {service.details.length > 0 && (
                                        <ul className="space-y-2">
                                            {service.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start space-x-2 text-gray-400">
                                                    <span className="text-blue-400 mt-1">•</span>
                                                    <span className="text-sm">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                        Ready to Enhance Your Security Posture?
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Let us help you navigate the complex landscape of cybersecurity and compliance with our comprehensive suite of services.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                        Get Started Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;

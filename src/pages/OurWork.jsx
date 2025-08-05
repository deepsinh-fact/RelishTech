import React from 'react';
import Hero from '../components/Hero';
import { heroData } from '../data';
import IndustriesWeServe from '../components/OurWork/IndustriesWeServe';
import WhatWeDo from '../components/OurWork/WhatWeDo';

const OurWork = () => {
    return (
        <div className="min-h-screen bg-[#0A1F44]">
            {/* Hero Section */}
            <Hero data={heroData.ourWork} />

            {/* Stats Section */}
            <section className="py-8 bg-[#0A1F44]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                            <div className="text-3xl font-bold text-white mb-2">100+</div>
                            <div className="text-gray-300 text-sm">Projects Delivered</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                            <div className="text-3xl font-bold text-white mb-2">30+</div>
                            <div className="text-gray-300 text-sm">BFSI Clients</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                            <div className="text-3xl font-bold text-white mb-2">40%</div>
                            <div className="text-gray-300 text-sm">Time Reduction</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                            <div className="text-3xl font-bold text-white mb-2">3+</div>
                            <div className="text-gray-300 text-sm">Years Experience</div>
                        </div>
                    </div>
                </div>

                <IndustriesWeServe />
                <WhatWeDo />
        
            </section>
      
        </div>
    );
};

export default OurWork;
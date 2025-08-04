import React from 'react';

const Hero = ({ data }) => {
    return (
        <section className="relative py-20 lg:py-32 flex items-center justify-center bg-gradient-to-br from-[#0A1F44] via-[#1a2f5a] to-[#2a4f7a] overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Tag */}
                <div className="inline-block bg-[#191970] text-white text-sm font-semibold py-2 px-4 rounded-full mb-4 border border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                    {data.tag}
                </div>

                {/* Main heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                    <span className="block">{data.titleLine1}</span>
                    <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {data.titleLine2}
                    </span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                    {data.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105">
                        <span className="relative z-10">{data.primaryCta}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                        {data.secondaryCta}
                    </button>
                </div>


            </div>
        </section>
    );
};

export default Hero;
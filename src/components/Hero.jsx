import React from 'react';

const Hero = ({ data }) => {
    return (
        <div className="bg-[#0A1F44] py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="inline-block bg-[#191970] text-white text-sm font-semibold py-1 px-3 rounded-full mb-4 border border-white hover:shadow-[0_0_10px_#ffffff]">
                        {data.tag}
                    </div>
                    <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                        <span className="block">{data.titleLine1}</span>
                        <span className="block text-blue-300">{data.titleLine2}</span>
                    </h1>
                    <p className="mt-4 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
                        {data.description}
                    </p>
                    <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
                        <div className="rounded-md shadow">
                            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                {data.primaryCta}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
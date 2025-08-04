import React from 'react';
import { teamData } from '../../data';

const Details = () => {
    return (
        <section className="py-16 bg-[#0A1F44] to-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">

                <div className="inline-block bg-[#191970] text-white text-sm font-semibold py-2 px-4 rounded-full mb-6 border border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                   Leaders
                </div>
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Our Leaders
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Meet the cybersecurity experts driving innovation and excellence in digital protection
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {teamData.leadership.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-slate-600"
                        >
                            {/* Card Header */}
                            <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>

                            <div className="p-8">
                                {/* Name and Position */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {member.name}
                                    </h3>
                                    <p className="text-lg text-slate-300 font-medium">
                                        {member.position}
                                    </p>
                                </div>

                                {/* Experience Badge */}
                                <div className="mb-6">
                                    <span className="inline-flex items-center bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full border border-blue-500/30">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {member.experience} Experience
                                    </span>
                                </div>

                                {/* Credentials */}
                                <div className="mb-6">
                                    <div className="flex items-center mb-3">
                                        <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                                            Credentials
                                        </h4>
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed pl-7">
                                        {member.credentials}
                                    </p>
                                </div>

                                {/* Specializations */}
                                <div>
                                    <div className="flex items-center mb-3">
                                        <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                                            Specializations
                                        </h4>
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed pl-7">
                                        {member.specializations}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Details;
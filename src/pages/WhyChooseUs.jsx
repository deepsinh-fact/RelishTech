import React from 'react';
import Hero from '../components/Hero';
import { heroData, whyChooseUsData } from '../data';
import Footer from '../components/Footer';

const WhyChooseUs = () => {
    return (
        <div className="min-h-screen bg-[#0A1F44]">
            {/* Hero Section */}
            <Hero data={heroData.whyChooseUs} />

            {/* Main Content */}
            <div className="py-8 bg-[#0A1F44]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Reasons Grid */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            What Sets Us Apart
                        </h2>
                        <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                            Discover why leading organizations trust us with their cybersecurity needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {whyChooseUsData.reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                                style={{
                                    animationDelay: `${index * 150}ms`
                                }}
                            >
                                {/* Background gradient effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Animated border effect */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>

                                <div className="relative z-10 flex items-start space-x-4">
                                    <div className={`${reason.iconColor} flex-shrink-0 p-3 rounded-lg bg-gray-50 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md`}>
                                        {reason.icon === "🎯" && (
                                            <svg className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                            </svg>
                                        )}
                                        {reason.icon === "📋" && (
                                            <svg className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                                            </svg>
                                        )}
                                        {reason.icon === "🔌" && (
                                            <svg className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        )}
                                        {reason.icon === "📊" && (
                                            <svg className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                                            {reason.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                            {reason.description}
                                        </p>

                                    </div>
                                </div>

                                <div className="absolute bottom-6 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            </div>
                        ))}
                    </div>

                    {/* Testimonials Section */}
                    <div className="bg-gray-800/50 rounded-2xl p-8 lg:p-12 border border-gray-700">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white sm:text-4xl">
                                What Our Clients Say
                            </h2>
                            <p className="mt-4 text-lg text-gray-300">
                                Real feedback from organizations we've protected
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyChooseUsData.testimonials.map((testimonial, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mb-4 italic">
                                        "{testimonial.quote}"
                                    </p>
                                    <div>
                                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                                        <p className="text-sm text-blue-600">{testimonial.company}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16">
                        <div className="bg-[#0A1F44] rounded-2xl p-8 lg:p-12">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Ready to Secure Your Future?
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                                Join the growing number of organizations that trust us with their cybersecurity needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                                    Get Started Today
                                </button>
                                <button className="border border-white text-white hover:bg-white hover:text-[#0A1F44] font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                                    Schedule Consultation
                                </button>
                            </div>
                        </div>
                       
                    </div>
                  
                </div>
                
            </div>
            <Footer/>
        </div>
    );
};


export default WhyChooseUs;
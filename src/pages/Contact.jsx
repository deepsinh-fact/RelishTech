import React from "react";
import Footer from "../components/Footer";
const Contact = () => {
    return (
        <div className="bg-[#0A1F44] min-h-screen">
            <div className="pt-12 px-4 sm:px-6 lg:px-8 pb-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Relish Tech Global Solutions Private Limited
                        </h1>
                        <p className="text-xl text-gray-300">
                            Simplifying IT Security for Modern Enterprises.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-4">
                        <h2 className="text-2xl font-semibold text-white mb-8 text-center">Get in Touch</h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Contact Details */}
                            <div className="space-y-8">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-2">Address</h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            E-248, Sumel-11, Near Namaste Circle,<br />
                                            Shahibaug, Ahmedabad – 380004,<br />
                                            Gujarat, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                                        <a href="mailto:dhaval@relishtechglobal.com" className="text-blue-400 hover:text-blue-300 transition duration-200">
                                            dhaval@relishtechglobal.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-2">Phone</h3>
                                        <a href="tel:+919925098997" className="text-blue-400 hover:text-blue-300 transition duration-200">
                                            +91 99250 98997
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-white mb-2">Website</h3>
                                        <a href="https://www.relishtechglobal.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-200">
                                            www.relishtechglobal.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                                <h3 className="text-xl font-semibold text-white mb-6">Send us a Message</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
                                            placeholder="How can we help?"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm resize-none"
                                            placeholder="Tell us about your IT security needs..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transition duration-200 font-medium"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Business Hours */}
                    {/* <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Business Hours</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-3">Office Hours</h3>
                                <div className="space-y-2 text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday:</span>
                                        <span>9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday:</span>
                                        <span>10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday:</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-3">Support</h3>
                                <p className="text-gray-600">
                                    24/7 emergency support available for critical security incidents.
                                    Contact us immediately for urgent matters.
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Contact;

import React from 'react';
import { servicesData } from '../../data.jsx';

// Icon components
const ShieldIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const DocumentIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const CybersecurityIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
);

const iconMap = {
    ShieldIcon,
    DocumentIcon,
    CybersecurityIcon
};

const ServiceCard = ({ service }) => {
    const IconComponent = iconMap[service.icon];

    return (
        <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-[#0E2A5B] border border-gray-700 rounded-2xl overflow-hidden h-full hover:border-blue-500 transition-all duration-300">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = service.fallbackImage;
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A5B] via-transparent to-transparent"></div>


                </div>

                {/* Content Section */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {service.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-4">
                        {service.description}
                    </p>

                    <div className="mt-auto">
                        <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
                            Learn More
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OurService = () => {
    return (
        <section className="bg-[#0A1F44] py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-block bg-[#191970] text-white text-sm font-semibold py-1 px-3 rounded-full mb-4 border border-white hover:shadow-[0_0_10px_#ffffff]">
                        Our Services
                    </div>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                        Comprehensive Security Solutions
                    </h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        We provide end-to-end cybersecurity services to protect your business from evolving digital threats and ensure regulatory compliance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="/services" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                        View All Services
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurService;

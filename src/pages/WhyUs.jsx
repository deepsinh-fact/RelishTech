import React from "react";
import Hero from "../components/Hero";

// Simple icon components
function HomeIcon({ className }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    );
}

function Award({ size, className }) {
    return (
        <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
    );
}

function TrendingUp({ size, className }) {
    return (
        <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
    );
}

function HeartHandshake({ size, className }) {
    return (
        <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    );
}

function WhyUs() {
    const breadcrumbs = [
        { label: "Home", href: "/home", icon: <HomeIcon className="w-4 h-4" /> },
        { label: "Why Us", active: true },
    ];

    return (
        <div className="bg-gray-50 text-gray-800">
            <Hero title="Why Choose Trustevo?" breadcrumbs={breadcrumbs}>
            </Hero>
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Our Commitment to Your Security</h2>
                    <p className="max-w-3xl mx-auto text-gray-600 mb-16">We're not just a vendor; we're your partner in defense. Our philosophy is built on three core pillars that ensure your organization's resilience against cyber threats.</p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300">
                            <Award size={40} className="text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Unmatched Expertise</h3>
                            <p className="text-gray-600">Our certified professionals bring decades of combined industry experience from diverse sectors. We don't just follow best practices—we help define them.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300">
                            <TrendingUp size={40} className="text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Proactive & Adaptive</h3>
                            <p className="text-gray-600">The threat landscape is always evolving, and so are we. We stay ahead of threats with continuous research and adaptive solutions that prevent issues before they start.</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300">
                            <HeartHandshake size={40} className="text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">True Partnership</h3>
                            <p className="text-gray-600">Your security is our priority. We work closely with you to understand your unique challenges and goals, tailoring our services to become a seamless extension of your team.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WhyUs;
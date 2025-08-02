import React from "react";
import FeatureCard from "./FeaturedCard.jsx";
import { featuresData } from "../../data.js";

const WhyUs = () => {


    return (
        <section className="bg-[#0A1F44] py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-block bg-[#191970] text-white text-sm font-semibold py-1 px-3 rounded-full mb-4 border border-white hover:shadow-[0_0_10px_#ffffff]">
                        Why Choose Us
                    </div>
                    <h2 className="text-3xl font-medium text-white sm:text-4xl">
                    Why Choose Us
                    </h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                        Discover what makes us the trusted choice for cybersecurity solutions
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {featuresData.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            imageSrc={feature.imageSrc}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
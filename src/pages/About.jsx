import React from "react";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import { heroData, aboutData } from "../data.js";       


const ShieldIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const About = () => {
  return (
    <>
      <Hero data={heroData.about} />
      <div className="bg-[#0A1F44] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl">

            <div className="inline-block bg-[#191970] text-white text-sm font-semibold py-1 px-3 rounded-full mb-4 border border-white hover:shadow-[0_0_10px_#ffffff]">
            {aboutData.tag}
              </div>

            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{aboutData.title}</h2>
            <p className="mt-4 text-lg text-gray-400">{aboutData.description}</p>
            <p className="mt-4 text-lg text-gray-300">We are a dedicated team of cybersecurity professionals committed to protecting your digital assets with cutting-edge technology and industry expertise.</p>
            <p className="mt-2 text-lg text-gray-300">Our mission is to provide comprehensive security solutions that adapt to the ever-evolving threat landscape, ensuring your business stays secure and resilient.</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              {aboutData.features.map((feature, index) => (
                <div key={index} className="relative p-8 border border-gray-700 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <ShieldIcon className="h-8 w-8 text-blue-500" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      <p className="mt-2 text-base text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 text-5xl font-bold text-gray-800">0{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-xl w-full h-auto object-cover text-white"
                src={aboutData.image}
                alt="Cyber security team"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/111827/4d5bce?text=Image+Not+Found'; }}
              />
            </div>

        
          </div>

          <div className="mt-[50px]">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">About Us</h2>
            <p className="mt-2 text-base text-gray-400">
            Relish Tech Global Solutions Pvt. Ltd. is a cybersecurity and IT risk advisory firm helping small and mid-sized enterprises achieve digital resilience and regulatory confidence. With over 3 years of experience, 100+ completed engagements, and a skilled team of 20+ professionals, we specialize in delivering business-aligned security, governance, and compliance solutions. Whether you're navigating RBI audits, DPDP implementation, or SOC 2 readiness, we bring domain depth, practical execution, and industry-specific insight.

            </p>

            </div>
        </div>
            
      </div>

      <Footer />
    </>
  );
}

export default About;


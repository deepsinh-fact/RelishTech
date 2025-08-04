import React from "react";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";
import { heroData, aboutData } from "../data.jsx";


const ShieldIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const About = () => {
  return (
    <>
      <Hero data={heroData.about} />
      <div className="bg-[#0A1F44] pt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* about us */}

          <div className="">
            <div className="inline-block bg-[#191970] text-white text-sm font-semibold py-1 px-3 rounded-full mb-4 border border-white hover:shadow-[0_0_10px_#ffffff]">
              About Us
            </div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl leading-tight">About Us</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
              Relish Tech Global Solutions Pvt. Ltd. is a cybersecurity and IT risk advisory firm helping small and mid-sized enterprises achieve digital resilience and regulatory confidence. With over 3 years of experience, 100+ completed engagements, and a skilled team of 20+ professionals, we specialize in delivering business-aligned security, governance, and compliance solutions. Whether you're navigating RBI audits, DPDP implementation, or SOC 2 readiness, we bring domain depth, practical execution, and industry-specific insight.
            </p>
          </div>
          {/* about us  */}
          <div className="text-left max-w-3xl mt-10">

            <div className="inline-block bg-[#191970] text-white text-sm font-semibold py-1 px-3 rounded-full mb-4 border border-white hover:shadow-[0_0_10px_#ffffff]">
              {aboutData.tag}
            </div>

            <h2 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl leading-tight">{aboutData.title}</h2>
            <p className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed">{aboutData.description}</p>
            <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">We are a dedicated team of cybersecurity professionals committed to protecting your digital assets with cutting-edge technology and industry expertise.</p>
            <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">Our mission is to provide comprehensive security solutions that adapt to the ever-evolving threat landscape, ensuring your business stays secure and resilient.</p>
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24 grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="space-y-8 sm:space-y-10 mb-30">
              {aboutData.features.map((feature, index) => (
                <div key={index} className="relative p-6 sm:p-8 border border-gray-700 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <ShieldIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
                    </div>
                    <div className="ml-3 sm:ml-4 pr-12 sm:pr-16">
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{feature.title}</h3>
                      <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white ">0{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <img
                className="rounded-lg shadow-xl w-full h-auto object-cover text-white"
                src={aboutData.image}
                alt="Cyber security team"
              />
            </div>


          </div>


        </div>
        <Footer />
      </div>
  
    </>
  );
}

export default About;


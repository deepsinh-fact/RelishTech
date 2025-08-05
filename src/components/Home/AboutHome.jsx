import React from "react";
import { homeData } from "../../data";
// import aboutHomeImage from "../../assets/about-Home.png";
import cyber from "../../assets/cyber.jpg";

const AboutHome = () => {
    return (
        <div className="bg-[#0A1F44] py-12 sm:py-18">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pr-8">
                        <div className="text-left max-w-3xl">
                            <div className="inline-block bg-[#191970] text-white text-sm font-semibold py-1 px-3 rounded-full mb-4 border border-white hover:shadow-[0_0_10px_#ffffff]">
                                {homeData.about.tag}
                            </div>
                            <h2 className="text-3xl font-medium text-white sm:text-4xl">{homeData.about.titleLine1}</h2>
                            <p className="mt-4 text-lg text-gray-400">{homeData.about.shortDesc}</p>
                            <p className="mt-4 text-lg text-gray-300">We are a dedicated team of cybersecurity professionals committed to protecting your digital assets with cutting-edge technology and industry expertise.</p>
                            <p className="mt-2 text-lg text-gray-300">Our mission is to provide comprehensive security solutions that adapt to the ever-evolving threat landscape, ensuring your business stays secure and resilient.</p>
                        </div>
                    </div>

                    <div className="md:w-1/2 mt-8 md:mt-0 text-white">
                        <img
                            src={cyber}
                            alt="About Us"
                            className="rounded-lg shadow-xl w-full h-auto object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/0A1F44/ffffff?text=About+Us'; }}
                        />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default AboutHome;
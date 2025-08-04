import React from "react";
import AboutHome from '../components/Home/AboutHome.jsx';
import OurWork from '../components/Home/OurWork.jsx';
import OurService from '../components/Home/OurService.jsx'
import Footer from "../components/Footer.jsx";
import WhyUs from "../components/Home/WhyUs.jsx";
import { heroData } from '../data'

const Home = () => {
    return (
        // <main className="bg-[#0E3386]">
        <main className="bg-[#0A1F44]">
            <div className="max-w-7xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                        <span className="block">Consult. Protect. Succeed.
                        </span>
                        <span className="block text-blue-300 font-[12px]">Securing tomorrow, together.
                        </span>
                    </h1>
                    <p className="mt-4 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
                        {heroData.home.description}
                    </p>
                    <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
                        <div className="rounded-md shadow">
                            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                Start your free trial
                            </a>
                        </div>

                    </div>
                </div>

                <AboutHome />
                <OurWork />
                <OurService />
                <WhyUs />



            </div>
            <Footer />
        </main>
    );
};

export default Home;

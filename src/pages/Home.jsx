import React from "react";
import HeroImg from '../assets/HeroImg.jpg';

function Home() {
  return (
    <div className="relative font-sans min-h-screen text-white bg-gray-900">
      {/* Background Image  */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url(${HeroImg})`,
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Hero Section */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-12 sm:px-8 sm:py-24 flex-grow">
          <div className="max-w-xl w-full text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
              Protect Your Business with{" "}
              <span className="text-blue-400">Top Security</span> Solutions
            </h1>
            <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
              Advanced cyber security services and solutions to keep your data and infrastructure safe.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded text-white font-semibold text-base sm:text-lg w-full sm:w-auto">
              Get Free Quote
            </button>
          </div>
          <div className="flex justify-center md:block w-full md:w-auto">
            {/* <img
              className="w-64 sm:w-80 md:w-96 max-w-full rounded-lg shadow-lg object-cover"
              src={HeroImg}
              alt="Cyber Security"
              loading="lazy"
            /> */}
          </div>
        </header>

        {/* Services Section */}
        <section className="bg-gray-800 bg-opacity-90 py-10 px-4 sm:py-16 sm:px-8 rounded-t-lg shadow-inner mx-4 sm:mx-8 mb-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Services</h2>
            <p className="text-gray-300 mt-2 sm:mt-3">
              Dummy services description goes here.
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            <div className="bg-gray-900 bg-opacity-90 p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-2">Threat Analysis</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Identify potential threats and stay protected.
              </p>
            </div>
            <div className="bg-gray-900 bg-opacity-90 p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-2">Network Defence</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Secure your network from unwanted access.
              </p>
            </div>
            <div className="bg-gray-900 bg-opacity-90 p-6 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-lg sm:text-xl font-bold text-blue-400 mb-2">Incident Response</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Quick and effective solutions to cyber incidents.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-950 bg-opacity-90 py-6 sm:py-8 mt-auto text-center text-gray-400 text-sm sm:text-base rounded-t-lg shadow-inner mx-4 sm:mx-8">
          &copy; {new Date().getFullYear()} Trustevo. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Home;

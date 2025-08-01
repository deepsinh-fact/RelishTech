import React from "react";
import Hero from "../components/Hero";

const breadcrumbs = [
  {
    label: "Home",
    href: "/home",
    icon: (
      <svg
        className="w-4 h-4 text-white"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
  },
  {
    label: "About",
    active: true,
  },
];

function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <Hero title="About" breadcrumbs={breadcrumbs} />

      {/* Content Section */}
      <div className="px-4 pb-12 sm:px-8 sm:pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-800 p-6 rounded-lg mt-10">
              <h2 className="text-2xl font-bold text-blue-400 mb-4 ">Our Mission</h2>
              <p className="text-gray-300">
                To protect businesses and individuals from cyber threats through
                innovative security solutions and expert guidance.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg mt-10">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To be the leading cybersecurity partner, creating a safer digital
                world for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

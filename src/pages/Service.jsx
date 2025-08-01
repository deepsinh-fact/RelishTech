import React from 'react';
import Hero from '../components/Hero';
import vision from '../assets/vision.jpg';
import Footer from '../components/Footer'

function HomeIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

// About Page
function About() {
  const breadcrumbs = [
    { label: "Home", href: "#home", icon: <HomeIcon className="w-4 h-4" /> },
    { label: "Services", active: true },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      <Hero title="Services" breadcrumbs={breadcrumbs}>
      </Hero>
     


        <Footer />
    </div>
  );
}

export default About;
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
    { label: "About", active: true },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      <Hero title="About Us" breadcrumbs={breadcrumbs}>
      </Hero>
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Our Mission & Vision</h2>
              <p className="text-gray-600 mb-6">
                Our mission is to protect businesses and individuals from the ever-growing landscape of cyber threats through innovative security solutions and expert guidance. We envision a future where everyone can operate online with confidence and security.
              </p>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Our Mission</h3>
                  <p className="text-gray-700">To deliver proactive, intelligent, and comprehensive security services that empower our clients to thrive securely.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Our Vision</h3>
                  <p className="text-gray-700">To be the most trusted and respected cybersecurity partner, pioneering a safer digital world for all.</p>
                </div>
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              <img src={vision} alt="Our team" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
            </div>
          </div>
        </div>


      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-6">
              At Relish Tech Global, we specialize in providing top-tier cybersecurity, risk management, and compliance solutions
              to help businesses safeguard their digital infrastructure. Our team of experts works diligently to identify vulnerabilities,
              assess potential threats, and implement proactive security measures. By ensuring adherence to global security
              standards, we help organizations maintain compliance while minimizing cyber risks that could impact their operations.
            </p>

            <p className="text-gray-600 mb-6">
              With a client-focused approach, we tailor our solutions to meet the unique needs of every business. Whether it's
              strengthening network security, mitigating risks, or enhancing data protection, our customized strategies ensure that
              your digital assets remain secure. We stay ahead of evolving cyber threats, offering comprehensive solutions that
              protect businesses from financial losses, data breaches, and regulatory penalties

            </p>

            <p className="text-gray-600 mb-6">
              Secure your business with Relish Tech Global – your trusted cybersecurity partner. Our commitment to innovation and
              excellence allows us to provide reliable and effective security solutions that give you peace of mind. Partner with us
              today and take the first step towards a safer, more resilient digital future.
            </p>

          </div>


        </div>
      </div>

        {/* <Footer /> */}
    </div>
  );
}

export default About;
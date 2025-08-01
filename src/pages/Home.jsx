import React from 'react';
import Hero from '../components/Hero';

// Star icon component
function Star({ fill, ...props }) {
  return (
    <svg className="w-5 h-5" fill={fill} viewBox="0 0 20 20" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// Sample services data
const servicesData = [
  {
    title: "Threat Assessment",
    description: "Comprehensive analysis of your security vulnerabilities and potential threats.",
    icon: <div className="w-8 h-8 bg-blue-500 rounded"></div>
  },
  {
    title: "Security Monitoring",
    description: "24/7 monitoring and real-time threat detection for your systems.",
    icon: <div className="w-8 h-8 bg-green-500 rounded"></div>
  },
  {
    title: "Incident Response",
    description: "Rapid response and recovery services for security incidents.",
    icon: <div className="w-8 h-8 bg-red-500 rounded"></div>
  },
  {
    title: "Compliance Audit",
    description: "Ensure your business meets industry security standards and regulations.",
    icon: <div className="w-8 h-8 bg-purple-500 rounded"></div>
  }
];


const testimonialsData = [
  {
    quote: "Trustevo helped us identify and fix critical vulnerabilities before they became problems.",
    name: "John Smith",
    company: "Tech Corp"
  },
  {
    quote: "Their 24/7 monitoring service gives us peace of mind knowing our systems are protected.",
    name: "Sarah Johnson",
    company: "Digital Solutions"
  },
  {
    quote: "Professional, reliable, and incredibly knowledgeable. Highly recommended!",
    name: "Mike Davis",
    company: "StartupXYZ"
  }

];

function Home({ onNavigate }) {
  return (
    <div>
      <Hero title="Your Shield in the Digital World">
        <p>We provide cutting-edge cybersecurity solutions to protect your business from evolving threats. Secure your future with us.</p>
        <button onClick={() => onNavigate('services')} className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105">
          Explore Our Services
        </button>
      </Hero>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-800 sm:text-4xl">
              What We Offer
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              A comprehensive suite of services to cover all your security needs.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service) => (
              <div key={service.title} className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white mb-6 shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">What Our Clients Say</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
              Real stories from businesses we've helped secure.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="mt-6">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
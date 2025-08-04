import React from 'react';
import Hero from '../components/Hero';
import ServicesDelivered from '../components/Services/ServicesDelivered';
import { heroData } from '../data';
import AdditionalServices from '../components/Services/AdditionalServices';
import Footer from '../components/Footer';
const Services = () => {
    return (
        <main className="bg-[#0A1F44]">
            <Hero data={heroData.services} />
            <ServicesDelivered />
            <AdditionalServices />
            <Footer />
        </main>
    );
};

export default Services;
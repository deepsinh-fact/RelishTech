import React from 'react';
import Hero from '../components/Hero';
import ServicesDelivered from '../components/Services/ServicesDelivered';
import { heroData } from '../data';
import AdditionalServices from '../components/Services/AdditionalServices';

const Services = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <main className="bg-[#0A1F44]">
            <Hero data={heroData.services} />
            <ServicesDelivered />
            <AdditionalServices />
          
        </main>
    );
};

export default Services;
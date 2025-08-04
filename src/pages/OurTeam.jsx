import React from 'react';
import { heroData } from '../data';
import Hero from '../components/Hero';
import Details from '../components/OurTeam/Details';
import Footer from '../components/Footer';

const OurTeam = () => {
    return (
        <main className="bg-[#0A1F44]">
            <Hero data={heroData.team} />
            <Details />
            <Footer />
        </main>
    );
};

export default OurTeam;

import React from 'react';
import { heroData } from '../data';
import Hero from '../components/Hero';
import Details from '../components/OurTeam/Details';

const OurTeam = () => {
    return (
        <main className="bg-[#0A1F44]">
            <Hero data={heroData.team} />
            <Details />
           
        </main>
    );
};

export default OurTeam;

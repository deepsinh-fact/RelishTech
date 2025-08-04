import React, { useState, useEffect, useRef } from 'react';
import { statsData } from '../../data.jsx';

// Custom hook for intersection observer
const useIntersectionObserver = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return [ref, isIntersecting];
};

const useCountUp = (end, shouldStart) => {
    const [count, setCount] = useState(0);
    const endValue = parseInt(end, 10);

    useEffect(() => {
        if (!shouldStart) return;

        const duration = 2000;
        const increment = endValue / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= endValue) {
                setCount(endValue);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [endValue, shouldStart]);

    return count;
};

// SVG Icon for the decorative circle
const DecorativeCircleIcon = () => (
    <svg className="w-full h-full" viewBox="0 0 100 100">
        <path d="M 95,50 A 45,45 0 1 1 50,5" stroke="currentColor" strokeWidth="1.5" fill="none" className="opacity-80" strokeLinecap="round" />
        <circle cx="95" cy="50" r="1.5" fill="currentColor" className="opacity-80" />
        <circle cx="50" cy="5" r="1.5" fill="currentColor" className="opacity-80" />
    </svg>
);

// Reusable component for each individual statistic
const StatItem = ({ value, unit, label, description, shouldAnimate }) => {
    const animatedValue = useCountUp(value, shouldAnimate);
    const unitMargin = unit === '+' ? 'ml-1' : '';

    return (
        <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 flex items-center justify-center">
                <DecorativeCircleIcon />
                <div className="absolute flex items-end">
                    <span className="text-3xl lg:text-4xl font-semibold">{animatedValue}</span>
                    <span className={`font-semibold text-xl ${unitMargin}`}>{unit}</span>
                </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">{label}</h3>
            <p className="mt-1 text-sm text-gray-400 max-w-xs">{description}</p>
        </div>
    );
};

// Main component that maps over the data and renders the section
const OurWork = () => {
    const [sectionRef, isIntersecting] = useIntersectionObserver();

    return (
        <section ref={sectionRef} className="bg-[#0a1942] text-white py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-block bg-[#191970] text-white text-sm font-semibold py-1 px-3 rounded-full mb-4 border border-white hover:shadow-[0_0_10px_#ffffff]">
                        Our Work
                    </div>
                    <h2 className="text-3xl font-medium text-white sm:text-4xl">Proven Track Record</h2>
                </div>

                <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6">
                    {statsData.map((stat, index) => (
                        <StatItem
                            key={index}
                            value={stat.value}
                            unit={stat.unit}
                            label={stat.label}
                            description={stat.description}
                            shouldAnimate={isIntersecting}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurWork;
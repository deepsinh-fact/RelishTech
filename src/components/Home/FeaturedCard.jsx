
import React from "react";

const FeatureCard = ({ imageSrc, title, description }) => {
    return (
        <div className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-56 object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300" 
            />
            <div className="mt-5">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">{title}</h3>
                <p className="mt-2 text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
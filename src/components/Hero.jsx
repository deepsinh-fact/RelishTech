import React from 'react';
import bgImg from '../assets/bgImg.jpg';

function Hero({ title, breadcrumbs = [], children }) {


  return (
    <section className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] flex items-center bg-blue-50 text-gray-800">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/80 to-indigo-100/80" aria-hidden="true" />
      <div className="relative z-10 w-full h-full flex flex-col justify-center px-4 py-16 sm:px-8 md:px-12 lg:px-16">
        {breadcrumbs?.length > 0 && (
          <nav className="absolute left-4 top-4 sm:left-8 sm:top-6 flex items-center flex-wrap gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-600" aria-label="Breadcrumb">
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="opacity-50">/</span>}
                <a href={bc.href} className={`flex items-center gap-1.5 transition-colors ${bc.active ? "text-gray-800 font-bold" : "hover:text-gray-800"}`}>
                  {bc.icon}
                  <span>{bc.label}</span>
                </a>
              </React.Fragment>
            ))}
          </nav>
        )}
        <div className="max-w-4xl  mt-5">
          <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-6xl font-extrabold text-gray-800 drop-shadow-sm">
            {title}
          </h1>
          {children && (
            <div className="mt-4 max-w-2xl text-gray-700 text-base md:text-lg">
              {children}
            </div>
          )}
        </div>
      </div>

    
    </section>
  );
}

export default Hero;
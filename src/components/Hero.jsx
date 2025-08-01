import React from "react";
import bgImg from "../assets/bgImg.jpg";

function Hero({ title, breadcrumbs = [], children }) {
  return (
    <section
      className="
        relative w-full
        min-h-[280px] sm:min-h-[340px] md:min-h-[400px]
        flex items-center 
        bg-gray-900 text-white
      "
    >
      {/* Background Image & Darkening Overlay.
        A separate overlay div ensures better contrast for the text.
      */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-black/60" 
        aria-hidden="true" 
      />

      {/* Main Content Container */}
      <div
        className="
          relative z-10 w-full h-full
          flex flex-col justify-center
          px-4 py-16 sm:px-8 md:px-12 lg:px-16
        "
      >
        {/* Breadcrumbs: Positioned at the top.
          'flex-wrap' allows it to wrap gracefully on small screens if needed.
        */}
        {breadcrumbs?.length > 0 && (
          <nav
            className="absolute left-4 top-4 sm:left-8 sm:top-6 flex items-center flex-wrap gap-x-2 gap-y-1 text-xs sm:text-sm text-gray-300"
            aria-label="Breadcrumb"
          >
            {breadcrumbs.map((bc, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="opacity-50">/</span>}
                <a
                  href={bc.href}
                  className={`
                    flex items-center gap-1.5 transition-colors
                    ${bc.active 
                      ? "text-white font-bold" 
                      : "hover:text-white"
                    }
                  `}
                >
                  {bc.icon}
                  <span>{bc.label}</span>
                </a>
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Title and Children */}
        <div className="max-w-3xl text-left">
          <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-extrabold text-white drop-shadow-md
          ">
            {title}
          </h1>
          {children && (
            <div className="mt-4 max-w-xl text-gray-200 text-sm sm:text-base md:text-lg">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
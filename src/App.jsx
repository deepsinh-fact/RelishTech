import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"; 
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import WhyChooseUs from "./pages/WhyChooseUs";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";

function App() {
  return (
    <div className="relative font-sans min-h-screen text-gray-800 bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
        

          <Route path="*" element={<div className="p-8 text-center">Page Not Found</div>} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;

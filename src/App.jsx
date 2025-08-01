import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="relative font-sans min-h-screen text-white bg-gray-900 flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
          {/* 404 fallback */}
          <Route path="*" element={<div className="p-8 text-center">Page Not Found</div>} />
        </Routes>
      </main>

    </div>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
    <section className="flex flex-col items-center justify-center text-center  py-20 bg-gradient-to-b from-white to-blue-50">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-2">
        Your Health
      </h1>
      <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Our Responsibility
      </h2>

  
      <p className="mt-6 max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed">
        "Embrace the art of self-care, for a healthy mind and body forge the
        foundation of a vibrant life. Wellness is not just a destination; it's a
        journey of mindful choices and daily transformations. Nurture your
        health with love, and watch it bloom into a beacon of joy and vitality."
      </p>


      <div className="mt-10">
       <Link to="/services">
        <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
         >
          
          Get Started
        </button>
       </Link>
      </div>
    </section>
  );
}

export default LandingPage;
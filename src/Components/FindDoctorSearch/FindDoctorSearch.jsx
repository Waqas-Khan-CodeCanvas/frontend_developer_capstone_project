import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const searchOptions = [
  'Dentist',
  'Gynecologist/Obstetrician',
  'General Physician',
  'Dermatologist',
  'Ear-Nose-Throat Specialist',
  'Homeopath',
  'Ayurveda'
];

const FindDoctorSearch = () => {
  const [seeResults, setSeeResults] = useState(true);
  const [searchDoctor, setSearchDoctor] = useState('');
  const [specialities, setSpecialities] = useState(searchOptions);
  const navigate = useNavigate();

  const handleSearch = (specialty) => {
    setSearchDoctor(specialty);
    setSeeResults(true);
    navigate(`/booking-consultation?specialty=${specialty}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8 text-center">
        🔍 Find a Doctor and Consult Instantly
      </h1>

      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-full py-3 px-5 pr-12 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          placeholder="Search for a doctor or specialty..."
          onFocus={() => setSeeResults(false)}
          onBlur={() => setTimeout(() => setSeeResults(true), 200)} // Delay to allow click
          value={searchDoctor}
          onChange={(e) => setSearchDoctor(e.target.value)}
        />

        {/* Search Icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m0 0a7.5 7.5 0 1 0-10.61 0 7.5 7.5 0 0 0 10.61 0z"
            />
          </svg>
        </div>

        {/* Dropdown Results */}
        {!seeResults && (
          <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg mt-2 shadow-md">
            {specialities
              .filter((s) =>
                s.toLowerCase().includes(searchDoctor.toLowerCase())
              )
              .map((specialty) => (
                <div
                  key={specialty}
                  className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
                  onMouseDown={() => handleSearch(specialty)}
                >
                  {specialty}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDoctorSearch;

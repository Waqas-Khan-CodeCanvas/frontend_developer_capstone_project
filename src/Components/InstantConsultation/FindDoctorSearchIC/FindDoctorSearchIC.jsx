import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const initSpeciality = [
  "Dentist",
  "Gynecologist/obstetrician",
  "General Physician",
  "Dermatologist",
  "Ear-nose-throat (ent) Specialist",
  "Homeopath",
  "Ayurveda",
];

const FindDoctorSearchIC = () => {
  const [doctorResultHidden, setDoctorResultHidden] = useState(true);
  const [searchDoctor, setSearchDoctor] = useState("");
  const [specialities, setSpecialities] = useState(initSpeciality);
  const navigate = useNavigate();
  const handleDoctorSelect = (speciality) => {
    setSearchDoctor(speciality);
    setDoctorResultHidden(true);
    navigate(`/instant-consultation?speciality=${speciality}`);
    window.location.reload();
  };
  return (
    <div className="w-full py-12 bg-white flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
        Find a doctor and Consult instantly
      </h1>

      <div className="text-black text-[10rem] md:text-[20rem] mb-10">
        <i className="fa fa-user-md"></i>
      </div>

      {/* Search Section */}
      <div className="flex justify-center items-center w-full">
        <div className="relative w-[90%] md:w-1/2">
          <input
            type="text"
            placeholder="Search doctors, clinics, hospitals, etc."
            onFocus={() => setDoctorResultHidden(false)}
            onBlur={() => setDoctorResultHidden(true)}
            value={searchDoctor}
            onChange={(e) => setSearchDoctor(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-full py-3 px-5 pr-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400"
          />

          {/* Search Icon */}
          {/* Search Icon */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 opacity-70" />
          </div>

          {/* Dropdown Results */}
          <div
            hidden={doctorResultHidden}
            className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto"
          >
            {specialities.map((speciality) => (
              <div
                key={speciality}
                onMouseDown={() => handleDoctorSelect(speciality)}
                className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 cursor-pointer transition"
              >
                <img
                  src="/frontend_developer_capstone_project/search-icon.webp"
                  alt=""
                  className="w-3 h-3"
                />
                <span className="text-gray-700 font-medium">{speciality}</span>
                <span className="ml-auto text-xs text-gray-400">
                  SPECIALITY
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindDoctorSearchIC;

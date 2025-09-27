import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import FindDoctorSearch from "../Components/FindDoctorSearch/FindDoctorSearch";
import Notification from "../Components/Notification/Notification";
import DoctorCard from "../Components/DoctorCard/DoctorCard";
import { DoctorFiles } from "../Components/DoctorCard/DisplayDoctors";
import { UserGroupIcon } from "@heroicons/react/24/outline";

function BookingConsultation() {
  const [searchParams] = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [notify, setNotify] = useState(false);
  const navigate = useNavigate();

  const getDoctorsDetails = () => {
    const data = DoctorFiles;
    if (searchParams.get("specialty")) {
      const filtered = data.filter(
        (doctor) =>
          doctor.specialty.toLowerCase() ===
          searchParams.get("specialty").toLowerCase()
      );
      setFilteredDoctors(filtered);
      setIsSearched(true);
    } else {
      setFilteredDoctors([]);
      setIsSearched(false);
    }
    setDoctors(data);
  };

  const handleSearch = (searchText) => {
    if (searchText.trim() === "") {
      setFilteredDoctors([]);
      setIsSearched(false);
    } else {
      const filtered = doctors.filter((doctor) =>
        doctor.specialty.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredDoctors(filtered);
      setIsSearched(true);
    }
  };

  useEffect(() => {
    getDoctorsDetails();
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    }
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      {/* Search Section */}
      <div className="max-w-5xl mx-auto">
        <FindDoctorSearch onSearch={handleSearch} />
      </div>

      {/* Results Section */}
      <div className="max-w-6xl mx-auto mt-12 px-6">
        {isSearched ? (
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 text-center mb-2">
              {filteredDoctors.length} doctors found
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Book appointments with verified doctors & minimum wait-time
            </p>

            {filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard
                    key={doctor.name}
                    {...doctor}
                    setNotify={setNotify}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 text-lg">
                No doctors found.
              </p>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20">
            <UserGroupIcon className="w-32 h-32 text-blue-400 opacity-80" />
            <p className="mt-4 text-gray-600 text-lg font-medium">
              Search by specialty to find your doctor
            </p>
          </div>
        )}
      </div>

      <Notification setNotify={setNotify} />
    </div>
  );
}

export default BookingConsultation;

import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FindDoctorSearchIC from './FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCardIC from './DoctorCardIC/DoctorCardIC';

const InstantConsultation = () => {
  const [searchParams] = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [isSearched, setIsSearched] = useState(false);

  const getDoctorsDetails = () => {
    fetch('https://api.npoint.io/9a5543d36f1460da2f63')
      .then(res => res.json())
      .then(data => {
        if (searchParams.get('speciality')) {
          const filtered = data.filter(doctor =>
            doctor.speciality.toLowerCase() === searchParams.get('speciality').toLowerCase()
          );
          setFilteredDoctors(filtered);
          setIsSearched(true);
        } else {
          setFilteredDoctors([]);
          setIsSearched(false);
        }
        setDoctors(data);
      })
      .catch(err => console.log(err));
  };

  const handleSearch = (searchText) => {
    if (searchText === '') {
      setFilteredDoctors([]);
      setIsSearched(false);
    } else {
      const filtered = doctors.filter(
        doctor => doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredDoctors(filtered);
      setIsSearched(true);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    getDoctorsDetails();
    const authtoken = sessionStorage.getItem("auth-token");
    if (!authtoken) {
      navigate("/login");
    }
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Search Section */}
        <div className="mb-8">
          <FindDoctorSearchIC onSearch={handleSearch} />
        </div>

        {/* Search Results */}
        <div className="text-center">
          {isSearched ? (
            <div>
              <h2 className="text-2xl font-bold text-blue-700 mb-2">
                {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} available
              </h2>
              <p className="text-gray-600 mb-8">
                Book appointments with minimum wait-time & verified doctor details
              </p>

              {filteredDoctors.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2">
                  {filteredDoctors.map(doctor => (
                    <DoctorCardIC
                      key={doctor.name}
                      {...doctor}
                      className="transition-transform transform hover:scale-105"
                    />
                  ))}
                </div>
              ) : (
                <p className="text-red-500 text-lg font-medium">No doctors found.</p>
              )}
            </div>
          ) : (
            <div className="mt-8 flex flex-col items-center">
              <img
                src="https://cdn.pixabay.com/photo/2021/11/09/05/44/doctor-6780685_1280.png"
                alt="Doctors Illustration"
                className="w-64 mb-4 opacity-90"
              />
              <p className="text-gray-600 text-lg font-medium">
                Search for your preferred doctor to start consultation
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InstantConsultation;

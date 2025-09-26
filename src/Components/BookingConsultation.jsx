import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import DoctorCard from './DoctorCard/DoctorCard';
import { DoctorFiles } from './DoctorCard/DisplayDoctors'
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import Notification from './Notification/Notification';
import './BookingConsultation.css'

function BookingConsultation() {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const [notify, setNotify] = useState(false);
    
    const getDoctorsDetails = () => {
        const data = DoctorFiles;
        if (searchParams.get('specialty')) {
            const filtered = data.filter(doctor =>
                doctor.specialty.toLowerCase() === searchParams.get('specialty').toLowerCase());
                setFilteredDoctors(filtered);
                setIsSearched(true);
            } else {
                setFilteredDoctors([]);
                setIsSearched(false);
            }
            setDoctors(data);
        };

    const handleSearch = (searchText) => {

        if (searchText === '') {
            setFilteredDoctors([]);
            setIsSearched(false);
            } else {
                
            const filtered = doctors.filter(
                (doctor) =>
                doctor.specialty.toLowerCase().includes(searchText.toLowerCase())
                
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
            navigate("/frontend_developer_capstone_project/login");
        }
    }, [searchParams, navigate]);

    return (
        <div>
            <div  className="searchpage-container">
                <FindDoctorSearch onSearch={handleSearch} />
                <div className="search-results-container">
                    {isSearched ? (
                    <div className=''>
                        <h2>{filteredDoctors.length} doctors are available {searchParams.get('location')}</h2>
                        <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                        <div className='filtered-doctors'>
                            {filteredDoctors.length > 0 ? (
                            filteredDoctors.map(doctor =>
                            <DoctorCard className="doctorcard" {...doctor} key={doctor.name} setNotify={setNotify}/>)
                        ) : (
                        <p>No doctors found.</p>
                        )}
                        </div>
                    </div>
                    ) : (
                        <><div className='search-bar-image-container'><img className='search-bar-image' src="https://cdn.pixabay.com/photo/2021/11/09/05/44/doctor-6780685_1280.png" alt="doctors" /></div></>
                    )}
                </div>
            </div>
            <Notification setNotify={setNotify}></Notification>
        </div>
    )
};

export default BookingConsultation;

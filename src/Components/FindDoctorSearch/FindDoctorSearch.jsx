import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate, Navigate } from 'react-router-dom';


const searchOptions = [
    'Dentist',
    'Gynecologist/obstetrician',
    'General Physician',
    'Dermatologist',
    'Ear-nose-throat Specialist',
    'Homeopath',
    'Ayurveda'
]

const FindDoctorSearch = () => {
    const [seeResults, setSeeResults] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(searchOptions);
    const navigate = useNavigate();

    const handleSearch = (specialty) => {
        setSearchDoctor(specialty);
        setSeeResults(true);
        navigate(`/frontend_developer_capstone_project/booking-consultation?specialty=${specialty}`);
    }

    return (
        <div className='BC-finddoctor'>
            <div className='BC-search_container'>
                <h1>Search for a Doctor</h1>
                <div className="BC-home-search-container" 
                style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div className="BC-doctor-search-box">

                        <input
                            type="text"
                            className="BC-search-doctor-input-box"
                            placeholder="Search for a doctor"
                            onFocus={() => setSeeResults(false)}
                            onBlur={() => setSeeResults(true)}
                            value={searchDoctor}
                            onChange={(e) => setSearchDoctor(e.target.value)}
                        />
                        
                        <div className="BC-search-doctor-input-results" hidden={seeResults}>
                            {
                                specialities.map(specialty =>
                                <div className="BC-search-doctor-result-item" key={specialty} onMouseDown={() => handleSearch(specialty)}>
                                    <span>{specialty}</span>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindDoctorSearch
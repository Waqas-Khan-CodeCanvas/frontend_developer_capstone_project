import React from "react";
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {

    return(
        <div className="get_started_container">
            <div className="image-container">
                <Link to="/frontend_developer_capstone_project/instant-consultation" className="link_box">
                    <img src="/frontend_developer_capstone_project/service_image_1.webp" className="service_image" alt="instant consultation" />
                    <h4>Instant Consultation</h4>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/frontend_developer_capstone_project/booking-consultation" className="link_box">
                <img src="/frontend_developer_capstone_project/service_image_2.webp" className="service_image" alt="instant consultation" />
                    <h4>Booking Consultation</h4>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/frontend_developer_capstone_project/self-checkup" className="link_box">
                <img src="/frontend_developer_capstone_project/service_image_3.webp" className="service_image" alt="instant consultation" />
                    <h4>Self Checkup</h4>
                </Link>
            </div>
            <div className="image-container">
                <Link to="/frontend_developer_capstone_project/health-tips" className="link_box">
                <img src="/frontend_developer_capstone_project/service_image_4.webp" className="service_image" alt="instant consultation" />
                    <h4>Health Tips and Guidance</h4>
                </Link>
            </div>
        </div>
    )
}

export default Services;
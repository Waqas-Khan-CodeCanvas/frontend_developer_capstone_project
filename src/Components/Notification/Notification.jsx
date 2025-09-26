import React, { useEffect, useState, useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { NotificationContext } from './NotificationContext';
import './Notification.css';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const { notification } = useContext(NotificationContext);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);

  return (
    <div>
      <Navbar />
      {children}
      {notification && (
        <div className="notification">
          {notification.appointmentDetails && (
            <div>
              <p><strong>Appointment booked successfully!</strong></p>
              {/* Add doctor's name and specialty */}
              <p><strong>Doctor:</strong> {notification.appointmentDetails.doctorName}</p>
              <p><strong>Specialty:</strong> {notification.appointmentDetails.doctorSpecialty}</p>
              <p><strong>Name:</strong> {notification.appointmentDetails.name}</p>
              <p><strong>Phone Number:</strong> {notification.appointmentDetails.phoneNumber}</p>
              <p><strong>Date of Appointment:</strong> {notification.appointmentDetails.bookingDate}</p>
              <p><strong>Time Slot:</strong> {notification.appointmentDetails.timeSlot}</p>
            </div>
          )}
        </div>
      )}
      {isLoggedIn && appointmentData && (
        <div className="appointment-card">
          <div className="appointment-card__content">
            <h3 className="appointment-card__title">Appointment Details</h3>
            <p className="appointment-card__message">
              <strong>Doctor:</strong> {doctorData?.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;

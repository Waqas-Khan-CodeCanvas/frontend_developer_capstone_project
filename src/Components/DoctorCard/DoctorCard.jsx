import React, { useState, useContext } from 'react';
import './DoctorCard.css';
import Popup from 'reactjs-popup';
//import { v4 as uuidv4 } from 'uuid';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import { NotificationContext } from '../Notification/NotificationContext';

function DoctorCard({ image, name, specialty, experience, rating }) {
  const [showForm, setShowForm] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const { showNotification, clearNotification } = useContext(NotificationContext);

  const handleBooking = () => {
    setShowForm(true);
  };

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments);
    clearNotification();
  };

  const handleSubmit = (appointmentData) => {
    const newAppointment = {
//      id: uuidv4(),
      doctorName: name, // Add doctor's name
      doctorSpecialty: specialty, // Add doctor's specialty
      ...appointmentData,
    };

    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    setShowForm(false);
    showNotification('Appointment booked successfully!', newAppointment);
  };

  return (
    <div className='container'>
      <div className=''>
        <div><img src={image} alt="doctor" className="doctor_image" /></div>
        <div className="name">{name}</div>
        <div>{specialty}</div>
        <div>{experience} years of experience</div>
        <div>Ratings: {rating}</div>
      </div>

      <div className=''>
        <Popup
          trigger={
            <button className={`book-appointment-btn ${appointments.length > 0 ? 'cancel-appointment' : ''}`}>
              {appointments.length > 0 ? (
                <div>Cancel Appointment</div>
              ) : (
                <div>Book Appointment</div>
              )}
              <div>No Booking Fee</div>
            </button>
          }
          modal
          open={showForm}
          onClose={() => setShowForm(false)}
        >
          {(close) => (
            <div style={{ height: '100vh', overflow: 'scroll' }}>
              <div className='form-doctor-section'>
                <div><img src={image} alt='doctor' className='doctor_image' /></div>
                <div className='doctor-section-info'>
                    <div className='name'>{name}</div>
                    <div>{specialty}</div>
                    <div>{experience} years of experience</div>
                    <div>Ratings: {rating}</div>
                </div>
              </div>

              {appointments.length > 0 ? (
                <>
                  <h3>Appointment Booked!</h3>
                  {appointments.map((appointment) => (
                    <div className='' key={appointment.id}>
                      <p>Name: {appointment.name}</p>
                      <p>Phone Number: {appointment.phoneNumber}</p>
                      <p>Date of Appointment: {appointment.bookingDate}</p>
                      <p>Time Slot: {appointment.timeSlot}</p>
                      <button onClick={() => { handleCancel(appointment.id) }}>
                        Cancel Appointment
                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <AppointmentForm doctorName={name} doctorspecialty={specialty} onSubmit={handleSubmit} />
              )}
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}

export default DoctorCard;

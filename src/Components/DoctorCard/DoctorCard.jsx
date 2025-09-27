import React, { useState, useContext } from "react";
import Popup from "reactjs-popup";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import { NotificationContext } from "../Notification/NotificationContext";

function DoctorCard({ image, name, specialty, experience, rating }) {
  const [showForm, setShowForm] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const { showNotification, clearNotification } = useContext(NotificationContext);

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((a) => a.id !== appointmentId);
    setAppointments(updatedAppointments);
    clearNotification();
  };

  const handleSubmit = (appointmentData) => {
    const newAppointment = {
      doctorName: name,
      doctorSpecialty: specialty,
      ...appointmentData,
    };

    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    setShowForm(false);
    showNotification("Appointment booked successfully!", newAppointment);
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center gap-4 border border-gray-100 hover:shadow-lg transition duration-300">
      {/* Doctor Info */}
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt="doctor"
          className="w-28 h-28 rounded-full object-cover border-4 border-blue-100 shadow-md"
        />
        <div className="mt-3 font-semibold text-lg text-gray-900">{name}</div>
        <div className="text-blue-600 font-medium">{specialty}</div>
        <div className="text-sm text-gray-500">{experience} years of experience</div>
        <div className="text-yellow-500 font-semibold">⭐ {rating}</div>
      </div>

      {/* Button & Popup */}
      <div className="w-full">
        <Popup
          trigger={
            <button
              className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-all ${
                appointments.length > 0
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={() => setShowForm(true)}
            >
              {appointments.length > 0 ? "Cancel Appointment" : "Book Appointment"}
              <p className="text-xs text-blue-100">No Booking Fee</p>
            </button>
          }
          modal
          open={showForm}
          onClose={() => setShowForm(false)}
        >
          {(close) => (
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10 mb-10">
              {/* Doctor Header */}
              <div className="flex items-center gap-4 border-b pb-4 mb-4">
                <img
                  src={image}
                  alt="doctor"
                  className="w-20 h-20 rounded-full object-cover border-2 border-blue-100"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
                  <p className="text-blue-600">{specialty}</p>
                  <p className="text-sm text-gray-500">{experience} years experience</p>
                  <p className="text-yellow-500">⭐ {rating}</p>
                </div>
              </div>

              {/* Appointment Section */}
              {appointments.length > 0 ? (
                <div>
                  <h3 className="text-xl font-semibold text-green-600 mb-3">
                    Appointment Booked!
                  </h3>
                  {appointments.map((appointment, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-3 mb-3 bg-green-50 text-sm"
                    >
                      <p><strong>Name:</strong> {appointment.name}</p>
                      <p><strong>Phone:</strong> {appointment.phoneNumber}</p>
                      <p><strong>Date:</strong> {appointment.bookingDate}</p>
                      <p><strong>Time:</strong> {appointment.timeSlot}</p>
                      <button
                        className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded-md text-sm"
                        onClick={() => handleCancel(appointment.id)}
                      >
                        Cancel Appointment
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <AppointmentForm
                  doctorName={name}
                  doctorspecialty={specialty}
                  onSubmit={handleSubmit}
                />
              )}
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}

export default DoctorCard;

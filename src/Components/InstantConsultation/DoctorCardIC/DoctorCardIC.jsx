import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import AppointmentFormIC from '../AppointmentFormIC/AppointmentFormIC'


const DoctorCardIC = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBooking = () => {
    setShowModal(true);
  };

  const handleCancel = (appointmentId) => {
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments);
  };

  const handleFormSubmit = (appointmentData) => {
    const newAppointment = {
//      id: uuidv4(),
      ...appointmentData,
    };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    setShowModal(false);
  };

  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-6 mx-auto hover:shadow-xl transition-shadow duration-300 flex   justify-between gap-6">
      {/* Left: Doctor Info */}
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{speciality}</p>
          <p className="text-sm text-gray-500">{experience}+ years experience</p>
          <p className="text-sm text-yellow-500 font-medium">⭐ {ratings} / 5.0</p>
        </div>
      </div>

      {/* Right: Book/Cancel Button */}
      <div className="flex justify-center mt-4 md:mt-0">
        <Popup
          trigger={
            <button
              className={`px-4 py-2 rounded-lg text-white font-medium text-sm shadow-md transition duration-300 ${
                appointments.length > 0
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {appointments.length > 0 ? "Cancel Appointment" : "Book Appointment"}
              <div className="text-xs text-white opacity-80">No Booking Fee</div>
            </button>
          }
          modal
          open={showModal}
          onClose={() => setShowModal(false)}
        >
          {(close) => (
            <div className="bg-white p-6 rounded-lg shadow-lg  mt-12">
              {/* Doctor Info in Modal */}
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                  <p className="text-sm text-gray-600">{speciality}</p>
                  <p className="text-sm text-gray-500">{experience}+ years experience</p>
                  <p className="text-sm text-yellow-500 font-medium">⭐ {ratings} / 5.0</p>
                </div>
              </div>

              {/* Conditional: Appointment List or Form */}
              {appointments.length > 0 ? (
                <>
                  <h4 className="text-center text-lg font-semibold text-green-600 mb-4">
                    Appointment Booked!
                  </h4>
                  {appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="bg-gray-100 rounded-md p-4 mb-3 flex flex-col gap-1"
                    >
                      <p className="text-gray-800 text-sm">
                        <span className="font-semibold">Name:</span> {appointment.name}
                      </p>
                      <p className="text-gray-800 text-sm">
                        <span className="font-semibold">Phone:</span> {appointment.phoneNumber}
                      </p>
                      <button
                        onClick={() => handleCancel(appointment.id)}
                        className="mt-2 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded transition"
                      >
                        Cancel Appointment
                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <AppointmentFormIC
                  doctorName={name}
                  doctorSpeciality={speciality}
                  onSubmit={handleFormSubmit}
                />
              )}
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default DoctorCardIC;

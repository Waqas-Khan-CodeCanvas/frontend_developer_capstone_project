import React, { useState } from 'react';

function AppointmentForm({ doctorName, doctorSpecialty, onSubmit }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleSelection = (e) => {
    setTimeSlot(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointmentData = { name, phoneNumber, bookingDate, timeSlot };
    sessionStorage.setItem('appointmentData', JSON.stringify(appointmentData));
    onSubmit(appointmentData);
    setName('');
    setPhoneNumber('');
    setBookingDate('');
    setTimeSlot('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 space-y-6 border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Book Appointment
        </h2>

        {doctorName && (
          <div className="text-center text-gray-600">
            <p className="font-medium">Doctor: {doctorName}</p>
            {doctorSpecialty && (
              <p className="text-sm text-gray-500">{doctorSpecialty}</p>
            )}
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="e.g. John Doe"
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            placeholder="e.g. 8885551234"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="bookingDate" className="block text-gray-700 font-medium">
            Appointment Date
          </label>
          <input
            type="date"
            id="bookingDate"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="timeSlot" className="block text-gray-700 font-medium">
            Time Slot
          </label>
          <select
            id="timeSlot"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={timeSlot}
            onChange={handleSelection}
            required
          >
            <option value="" disabled hidden>
              Select an available time:
            </option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="2:30 PM">2:30 PM</option>
            <option value="4:30 PM">4:30 PM</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;

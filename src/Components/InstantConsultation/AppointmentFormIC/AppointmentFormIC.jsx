import React, { useState } from 'react';

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, phoneNumber });
    setName('');
    setPhoneNumber('');
  };

  return (
    <div className="flex justify-center  bg-gradient-to-br from-blue-50 to-blue-100 p-2">
      <form
        onSubmit={handleFormSubmit}
        className="bg-white shadow-xl rounded-2xl w-full  p-3 space-y-6 border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Book Appointment
        </h2>

        {doctorName && (
          <div className="text-center text-gray-600">
            <p className="font-medium">Doctor: {doctorName}</p>
            {doctorSpeciality && (
              <p className="text-sm text-gray-500">{doctorSpeciality}</p>
            )}
          </div>
        )}

        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Waqas Khan"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Phone Number Field */}
        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="e.g. 034596677474"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg 
                     font-semibold hover:bg-blue-700 transition-all duration-200"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default AppointmentFormIC;

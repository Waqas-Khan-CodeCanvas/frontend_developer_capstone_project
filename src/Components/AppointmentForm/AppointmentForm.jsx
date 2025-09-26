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

    return(
        <form onSubmit={handleSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder='e.g. John Doe'
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            placeholder='e.g. 8885551234'
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookingDate">Date of Appointment:</label>
          <input
            type="date"
            id="date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
          />
          </div>
          <div className="form-group">
            <label htmlFor="timeSlot">Time Slot:</label>
            <select id="timeSlot" className="time-slot" value={timeSlot} onChange={handleSelection} required>
                <option value="" disabled hidden>Select an available time:</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="2:30 PM">2:30 PM</option>
                <option value="4:30 PM">4:30 PM</option>
            </select>
          </div>
        <button type="submit">Book Now</button>
      </form>
    );
};

export default AppointmentForm;

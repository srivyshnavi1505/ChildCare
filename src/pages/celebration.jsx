// src/pages/celebration.jsx

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './celebration.css';

const Celebration = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({ name: '', occasion: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const celebrationData = { ...formData, date: selectedDate };

    try {
      const res = await fetch('http://localhost:5000/api/celebrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(celebrationData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', occasion: '', message: '' });
        setSelectedDate(null);
      }
    } catch (err) {
      console.error('Error submitting celebration:', err);
    }
  };

  return (
    <div className="celebration-container">
      <h2 className="celebration-title">Celebrate With Us</h2>

      <div className="calendar-form-section">
        <div className="calendar-wrapper">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
          />
        </div>

        <div className="form-wrapper">
          {selectedDate && (
            <>
              <h3>Selected Date: {selectedDate}</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="occasion"
                  placeholder="Occasion (e.g., Birthday)"
                  value={formData.occasion}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Submit Celebration</button>
              </form>
            </>
          )}
          {submitted && <p className="success-msg">Thank you! We'll notify the NGO about your celebration.</p>}
        </div>
      </div>
    </div>
  );
};

export default Celebration;

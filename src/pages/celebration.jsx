import React, { useState } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './celebration.css';

const Celebration = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({ name: '', occasion: '', message: '', number: '' });
  // const [submitted, setSubmitted] = useState(false);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!selectedDate) {
      alert("Select a date first!");
    }
    if(formData.number.length!=10) {
      alert("Mobile number should be 10 digits long");
      return;
    }
    const celebrationData = { ...formData, date: selectedDate };

    axios.post('http://localhost:3000/celebrations', celebrationData)
      .then(res=> {
        alert("Thank you! We'll notify the NGO about your celebration.");
        setSelectedDate(null);
        setFormData({ name: '', occasion: '', message: '' });
      })
      .catch(err=> console.error('Error submitting celebration:', err));

    // try {
    //   const res = await fetch('http://localhost:3000/celebrations', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(celebrationData),
    //   });
    //   if (res.ok) {
    //     setSubmitted(true);
    //     setFormData({ name: '', occasion: '', message: '' });
    //     setSelectedDate(null);
    //   }
    // } catch (err) {
    //   console.error('Error submitting celebration:', err);
    // }
  };

  return (
    <div className="celebration-container">
      <h2 className="celebration-title">Celebrate With Us</h2>

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
                <input
                  type="number"
                  name="number"
                  placeholder="Contact Number"
                  value={formData.number}
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
          {/* {submitted && <p className="success-msg">Thank you! We'll notify the NGO about your celebration.</p>} */}
        </div>

      <div className="calendar-form-section">
        <div className="calendar-wrapper">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            dateClick={handleDateClick}
          />
        </div>

      </div>
    </div>
  );
};

export default Celebration;

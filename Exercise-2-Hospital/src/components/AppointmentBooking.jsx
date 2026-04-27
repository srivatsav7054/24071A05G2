import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentBooking.css';

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    doctorName: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: '',
  });

  const navigate = useNavigate();

  const doctors = [
    'Dr. ramesh',
    'Dr. suresh',
    'Dr. ram reddy',
    'Dr. micheal',
    'Dr. jackson',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment booked successfully!\n\nDoctor: ${formData.doctorName}\nDate: ${formData.appointmentDate}\nTime: ${formData.appointmentTime}\nReason: ${formData.reason}`
    );
    setFormData({
      doctorName: '',
      appointmentDate: '',
      appointmentTime: '',
      reason: '',
    });
    navigate('/patient-details');
  };

  return (
    <div className="appointment-container">
      <div className="appointment-box">
        <h2>Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="doctorName">Select Doctor</label>
            <select
              id="doctorName"
              name="doctorName"
              value={formData.doctorName}
              onChange={handleChange}
              required
            >
              <option value="">-- Select a Doctor --</option>
              {doctors.map((doctor) => (
                <option key={doctor} value={doctor}>
                  {doctor}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="appointmentDate">Appointment Date</label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="appointmentTime">Appointment Time</label>
            <input
              type="time"
              id="appointmentTime"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason for Visit</label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="4"
              placeholder="Describe your reason for the appointment"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Book Appointment
          </button>
        </form>

        <button
          className="back-btn"
          onClick={() => navigate('/patient-details')}
        >
          Back to Details
        </button>
      </div>
    </div>
  );
}

import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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
      `Thank you for your message!\n\nWe will get back to you soon at ${formData.email}`
    );
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact Us</h2>

        <div className="contact-sections">
          <div className="contact-info">
            <h3>Hospital Information</h3>
            <div className="info-item">
              <strong>Address:</strong>
              <p>Hospital Management Center<br/>
              123 Medical Street<br/>
              Healthcare City, HC 12345</p>
            </div>
            <div className="info-item">
              <strong>Phone:</strong>
              <p>+1-800-HOSPITAL (800-4678)</p>
            </div>
            <div className="info-item">
              <strong>Email:</strong>
              <p>info@hospitalmanagement.com</p>
            </div>
            <div className="info-item">
              <strong>Hours:</strong>
              <p>Monday - Friday: 8:00 AM - 8:00 PM<br/>
              Saturday: 9:00 AM - 5:00 PM<br/>
              Sunday: 10:00 AM - 4:00 PM<br/>
              Emergency: 24/7</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <h3>Send us a Message</h3>

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Enter subject"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import './PatientDetails.css';

export default function PatientDetails() {
  const navigate = useNavigate();

  const patientData = {
    name: 'K Srivatsav Reddy',
    age: 25,
    gender: 'Male',
    bloodType: 'b+',
    email: 'vatsav3d@email.com',
    phone: '9876543210',
    address: '123 Main Street, Healthcare City',
    appointmentDate: '2026-05-15',
    doctor: 'Dr. ramesh',
    medicalHistory: 'Diabetes, High Blood Pressure',
  };

  return (
    <div className="patient-details-container">
      <div className="patient-details-box">
        <h2>Patient Details</h2>
        
        <div className="details-section">
          <h3>Personal Information</h3>
          <div className="details-grid">
            <div className="detail-item">
              <label>Name:</label>
              <p>{patientData.name}</p>
            </div>
            <div className="detail-item">
              <label>Age:</label>
              <p>{patientData.age}</p>
            </div>
            <div className="detail-item">
              <label>Gender:</label>
              <p>{patientData.gender}</p>
            </div>
            <div className="detail-item">
              <label>Blood Type:</label>
              <p>{patientData.bloodType}</p>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h3>Contact Information</h3>
          <div className="details-grid">
            <div className="detail-item">
              <label>Email:</label>
              <p>{patientData.email}</p>
            </div>
            <div className="detail-item">
              <label>Phone:</label>
              <p>{patientData.phone}</p>
            </div>
            <div className="detail-item full-width">
              <label>Address:</label>
              <p>{patientData.address}</p>
            </div>
          </div>
        </div>

        <div className="details-section">
          <h3>Medical Information</h3>
          <div className="details-grid">
            <div className="detail-item">
              <label>Assigned Doctor:</label>
              <p>{patientData.doctor}</p>
            </div>
            <div className="detail-item">
              <label>Next Appointment:</label>
              <p>{patientData.appointmentDate}</p>
            </div>
            <div className="detail-item full-width">
              <label>Medical History:</label>
              <p>{patientData.medicalHistory}</p>
            </div>
          </div>
        </div>

        <div className="button-group">
          <button className="primary-btn" onClick={() => navigate('/appointment')}>
            Book Appointment
          </button>
          <button className="secondary-btn" onClick={() => navigate('/')}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

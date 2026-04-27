import { useNavigate } from 'react-router-dom';
import './DoctorList.css';

export default function DoctorList() {
  const navigate = useNavigate();

  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Smith',
      specialization: 'Cardiology',
      experience: '12 years',
      phone: '9876543210',
      email: 'sarah.smith@hospital.com',
    },
    {
      id: 2,
      name: 'Dr. James Wilson',
      specialization: 'Orthopedics',
      experience: '8 years',
      phone: '9876543211',
      email: 'james.wilson@hospital.com',
    },
    {
      id: 3,
      name: 'Dr. Emily Johnson',
      specialization: 'Neurology',
      experience: '10 years',
      phone: '9876543212',
      email: 'emily.johnson@hospital.com',
    },
    {
      id: 4,
      name: 'Dr. Michael Brown',
      specialization: 'Pediatrics',
      experience: '7 years',
      phone: '9876543213',
      email: 'michael.brown@hospital.com',
    },
    {
      id: 5,
      name: 'Dr. Lisa Davis',
      specialization: 'Dermatology',
      experience: '9 years',
      phone: '9876543214',
      email: 'lisa.davis@hospital.com',
    },
  ];

  return (
    <div className="doctor-list-container">
      <h2>Available Doctors</h2>
      
      <div className="doctors-grid">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <div className="doctor-header">
              <h3>{doctor.name}</h3>
            </div>
            <div className="doctor-info">
              <p>
                <strong>Specialization:</strong> {doctor.specialization}
              </p>
              <p>
                <strong>Experience:</strong> {doctor.experience}
              </p>
              <p>
                <strong>Phone:</strong> {doctor.phone}
              </p>
              <p>
                <strong>Email:</strong> {doctor.email}
              </p>
            </div>
            <button
              className="doctor-btn"
              onClick={() => navigate('/appointment')}
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      <button
        className="logout-btn"
        onClick={() => navigate('/')}
      >
        Logout
      </button>
    </div>
  );
}

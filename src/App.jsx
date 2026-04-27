import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import PatientDetails from './components/PatientDetails';
import DoctorList from './components/DoctorList';
import AppointmentBooking from './components/AppointmentBooking';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/patient-details" element={<PatientDetails />} />
            <Route path="/doctor-list" element={<DoctorList />} />
            <Route path="/appointment" element={<AppointmentBooking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App

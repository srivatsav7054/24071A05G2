import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    if (userType === 'patient') {
      alert(`Login successful for patient!\nEmail: ${email}`);
      setEmail('');
      setPassword('');
      navigate('/patient-details');
    } else if (userType === 'doctor') {
      alert(`Login successful for doctor!\nEmail: ${email}`);
      setEmail('');
      setPassword('');
      navigate('/doctor-list');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Hospital Management System</h1>
        <h2>Login</h2>

        {!userType ? (
          <>
            <p className="login-subtitle">Select your login type:</p>
            <div className="login-options">
              <button
                className="login-btn patient-btn"
                onClick={() => setUserType('patient')}
              >
                Patient Login
              </button>
              <button
                className="login-btn doctor-btn"
                onClick={() => setUserType('doctor')}
              >
                Doctor Login
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login-submit-btn">
              Login as {userType === 'patient' ? 'Patient' : 'Doctor'}
            </button>

            <button
              type="button"
              className="back-btn"
              onClick={() => {
                setUserType('');
                setEmail('');
                setPassword('');
              }}
            >
              Back
            </button>
          </form>
        )}

        <p className="login-footer">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
}

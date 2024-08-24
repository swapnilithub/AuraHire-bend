import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';
import './Welcomepage.css';
import logo from './aurahire.png';

const WelcomePage = () => {
  const { setUserType } = useUser();
  const navigate = useNavigate();

  const handleUserTypeChange = (type) => {
    setUserType(type);
    if (type === 'student') {
      navigate('/login'); // Redirect to the Login page for students
    } else {
      navigate('/homehr'); // Redirect to the HomeHR page for recruiters
    }
  };

  return (
    <div className="container-wp">
      <div className="left-side">
        <img src={logo} alt="AuraHire Logo" className="logo-wp" />
        <h1>Welcome to <strong>AuraHire</strong></h1>
      </div>
      <div className="right-side">
        <h3>Your Gateway to <strong>Opportunities</strong></h3>
        <div className="button-container-wp">
          <button className="button-wp" onClick={() => handleUserTypeChange('student')}>
            Continue as Student
          </button>
          <button className="button-wp" onClick={() => handleUserTypeChange('recruiter')}>
            Continue as Recruiter
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

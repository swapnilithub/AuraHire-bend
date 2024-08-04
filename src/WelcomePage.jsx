import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Welcomepage.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate('/home'); 
  };

  const handleGoToHomehr = () => {
    navigate('/homehr');
  };

  return (
    <div className="container-wp">
      <h4>Welcome to AuraHire</h4>
      <div className="button-container-wp">
        <button className="button" onClick={handleGoToHome}>Student</button>
        <button className="button" onClick={handleGoToHomehr}>Recruiter</button>
      </div>
    </div>
  );
};

export default WelcomePage;

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import "../styles2/home.css";

const Homehr = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleCreateJobs = () => {
    navigate('/create-job'); // Use navigate to change routes
  };

  const handleViewApplicants = () => {
    // Logic for viewing applicants
    console.log('View Applicants button clicked');
  };

  return (
    <div className="container">
      <div className="button-container">
        <button className="button" onClick={handleCreateJobs}>Create Jobs</button>
        <button className="button" onClick={handleViewApplicants}>View Applicants</button>
      </div>
    </div>
  );
};

export default Homehr;

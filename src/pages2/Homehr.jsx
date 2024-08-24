import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles2/home.css";
import Sliderhr from './Sliderhr';

const Homehr = () => {
  const navigate = useNavigate(); 

  const handleCreateJobs = () => {
    navigate('/create-job');
  };

  const handleViewApplicants = () => {
    console.log('View Applicants button clicked');
  };

  return (
    <div className="sliderhr">
      <Sliderhr />
    <div className="container-hr">
      <div className="button-container-hr">
        <button className="button-hr" onClick={handleCreateJobs}>Create Jobs</button>
        <button className="button-hr" onClick={handleViewApplicants}>View Applicants</button>
      </div>
    </div>
    </div>
  );
};

export default Homehr;

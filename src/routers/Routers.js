import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home'; 
import About from '../pages/About';
import Alljobs from '../pages/Alljobs';
import Contact from '../pages/Contact';
import WelcomePage from '../WelcomePage';
import Profile from '../pages/Profile';
import Homehr from '../pages2/Homehr';
import CreateJob from '../pages2/CreateJob';
import Hrprofile from '../pages2/hrprofile';
import Aboutus from '../pages2/Aboutus';
import JobManagement from '../JobManagement';
import JobDetails from '../pages/JobDetails';
import EditProfile from '../pages/EditProfile';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import JobApplicantsPage from '../pages2/JobApplicants';
import Loginhr from '../pages2/Loginhr';
import Signuphr from '../pages2/Signuphr';
import EditProfile2 from '../pages2/EditProfile2';
import Me from '../pages/Me';

const Routers = ({ jobs, addJob }) => {
  return (
    <Routes>
      <Route path="/aboutme" element={<Me />} /> {/* Use the correct component */}
      <Route path="/jobs/:id/applicants" element={<JobApplicantsPage />} />
      <Route path='/Signup-Hr' element={<Signuphr />} />
      <Route path='/Login-Hr' element={<Loginhr />} />
      <Route path="/create-job" element={<CreateJob addJob={addJob} />} />
      <Route path="/jobs" element={<Alljobs jobs={jobs} />} />
      <Route path="/" element={<Navigate to="/welcome-page" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Contact-us" element={<Contact />} />
      <Route path="/welcome-page" element={<WelcomePage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/job-management" element={<JobManagement />} />
      <Route path="/homehr" element={<Homehr />} />
      <Route path="/hr-profile" element={<Hrprofile />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="*" element={<Navigate to="/welcome-page" />} />
      <Route path="/job-details/:id" element={<JobDetails />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/edit-profile-hr" element={<EditProfile2 />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routers;

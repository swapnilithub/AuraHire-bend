import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home'; 
import About from '../pages/About';
import Alljobs from '../pages/Alljobs';
import Contact from '../pages/Contact';
import Homehr from '../pages2/Homehr';
import CreateJob from '../pages2/CreateJob';
import WelcomePage from '../WelcomePage';

const Routers = ({ jobs, addJob }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome-page" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/jobs" element={<Alljobs jobs={jobs} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/homehr" element={<Homehr />} />
      <Route path="/create-job" element={<CreateJob addJob={addJob} />} />
      <Route path="/welcome-page" element={<WelcomePage />} />
    </Routes>
  );
};


export default Routers;

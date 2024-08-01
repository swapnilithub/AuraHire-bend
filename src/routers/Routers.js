import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home'; 
import About from '../pages/About';
import Alljobs from '../pages/Alljobs';
import Contact from '../pages/Contact';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Alljobs />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Routers;

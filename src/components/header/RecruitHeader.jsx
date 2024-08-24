import React from 'react';
import "../../styles/header.css";
import logo from "../assets/aurahire.png";
import backgroundImage from "../assets/hefo.jpg";

const RecruitHeader = () => {
  return (
    <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="Recruitment Team Logo" className="logo-image" />
          <span className="logo-title">Aura<strong>Hire</strong></span>
        </div>
        <div className="tagline">
          <span>Welcome to the <strong>AuraHire</strong> Recruitment Team Portal</span>
        </div>
        <nav>
          <ul>
            <li><a href="/homehr">Home</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/hr-profile">My Profile</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default RecruitHeader;

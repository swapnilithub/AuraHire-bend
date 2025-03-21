import React from 'react';
import "../../styles/header.css";
import backgroundImage from "../assets/hefo.jpg";
import logo from "../assets/aurahire.png";

const Header = () => {
  return (
    <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="Company Logo" className="logo-image" />
          <span className="logo-title">Aura<strong>Hire</strong></span>
        </div>
        <div className="tagline">
          <span>Welcome to <strong>AuraHire</strong></span>
        </div>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/jobs">All Jobs</a></li>
            <li><a href="/profile">My Profile</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

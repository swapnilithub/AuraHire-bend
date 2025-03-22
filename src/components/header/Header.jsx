import React from 'react';
import "../../styles/header.css";
import backgroundImage from "../assets/hefo.jpg";
import logo from "../assets/aurahire.png";
import { Dropdown } from 'react-bootstrap'; // Import Dropdown component

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
            <li><a href="/about">About</a></li>
            <li><a href="/contact-us">Contact</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/profile">Profile</a></li>

            {/* Resume Dropdown */}
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                  Resume
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/resume-builder">Create Resume</Dropdown.Item>
                  <Dropdown.Item href="/resume-score">Resume Score Check</Dropdown.Item>
                  {/* Add more options as needed */}
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

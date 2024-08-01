import React from 'react';
import "../../styles/footer.css";
import backgroundImage from "../assets/head-EDIT.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="footer-content">
        <div className="footer-logo">
          <span>@Company_Name</span>
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/account">My Account</a></li>
          </ul>
        </nav>
        <div className="footer-tagline">
          <p>Hey @user</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright &copy; {currentYear} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

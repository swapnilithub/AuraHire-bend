import React from 'react';
import "../../styles/footer.css";
import backgroundImage from "../assets/hefo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="footer-content">
        <div className="footer-logo">
          <span>AuraHire</span>
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/jobs">Jobs</a></li>
          </ul>
        </nav>
        <div className="footer-tagline">
          <p>Hey @Swapnil:]</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright &copy; {currentYear} AuraHire. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

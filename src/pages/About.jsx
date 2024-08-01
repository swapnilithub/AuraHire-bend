import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h1>About Us</h1>
        <p className="intro">
          Welcome to <strong>Our Company</strong>! We are committed to providing the best services and products to our customers. Our mission is to innovate and deliver top-quality solutions that exceed expectations.
        </p>
        
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to create impactful solutions that meet the evolving needs of our clients. We believe in pushing boundaries and embracing new challenges to drive success and growth.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Our team is composed of experienced professionals who are passionate about their work. We foster a collaborative environment that encourages creativity and professional development.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Contact Us</h2>
          <p>
            Thank you for visiting our About page. If you have any questions or need more information, feel free to <a href="/contact">contact us</a>!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

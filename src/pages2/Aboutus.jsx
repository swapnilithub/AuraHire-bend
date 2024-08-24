import React from 'react';
import '../styles/About.css';

const Aboutus = () => {
  return (
    <div className="container-ab">
      <section className="about">
        <h1>About Us</h1>
        <p className="intro">
          Welcome to <strong>AuraHire!</strong> We are an innovative application tracking system committed to streamlining the job application process for both applicants and employers. Our mission is to provide an efficient and user-friendly platform where individuals can apply for jobs and track their application status effortlessly.
        </p>
        
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to revolutionize the job application process by delivering a streamlined, efficient, and user-centric platform. We aim to simplify the job search experience for applicants while enhancing recruitment for employers. Our commitment to innovation drives us to continuously improve our platform with cutting-edge technology and features. We prioritize the security and confidentiality of personal information, ensuring a safe and trustworthy environment. By exceeding traditional expectations, we strive to make job searching and recruitment more accessible and effective for everyone.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            At AuraHire, we envision a world where job searching is simplified and accessible to everyone. We aim to empower job seekers with the tools they need to succeed and help employers find the best talent quickly and efficiently.
          </p>
        </div>
        
        <div className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We uphold the highest standards of integrity in all our actions.</li>
            <li><strong>Quality:</strong> We provide outstanding products and unsurpassed service that deliver premium value to our customers.</li>
            <li><strong>Teamwork:</strong> We work together, across boundaries, to meet the needs of our customers and to help the company win.</li>
            <li><strong>Innovation:</strong> We are constantly learning and trying new things to stay ahead of the market.</li>
          </ul>
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
      </section>
    </div>
  );
};

export default Aboutus;

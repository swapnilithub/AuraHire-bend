import React from 'react';
import '../styles/AboutMe.css'; // Ensure you style the page
import myPhoto from './mypic.png'; // Update with the correct path to your image

const Me = () => {
  return (
    <div className="container-ab">
      <div className="about-container">
        <div className="about-photo">
          <img src={myPhoto} alt="Swapnil Ranjan" className="profile-photo" />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, I'm Swapnil Ranjan, a passionate Software Engineer based in Bangalore. I graduated from Acharya Institute of Technology with a degree in Information Science and Engineering.
            I have a deep interest in web development, particularly working with React, Spring Boot, and AWS. I am constantly looking to expand my knowledge and skills in software engineering,
            and I enjoy taking on new challenges in this fast-evolving industry.
          </p>
          <p>
            Feel free to connect with me on <a href="https://www.linkedin.com/in/swapnil-ranjan-85b22b201/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Me;

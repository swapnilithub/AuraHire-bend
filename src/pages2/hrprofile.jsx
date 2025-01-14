import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles2/hrprofile.css";

function Hrprofile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    photo: "https://via.placeholder.com/150",
    name: "",
    phone: "",
    email: "",
    resume: "resume.pdf",
  });

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email) {
      fetch(`/api/profile/hr${email}`)
        .then(response => response.json())
        .then(data => setProfile(data))
        .catch(error => console.error('Error fetching profile:', error));
    }
  }, []);

  const handleEditClick = () => {
    navigate("/edit-profile-hr");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login"); 
  };

  return (
    <div className="hr-profile-container">
      <header className="hr-profile-header">
        <h1>Hi, {profile.name || "Guest"}!</h1>
        <ProfileDisplay 
          profile={profile} 
          onEditClick={handleEditClick} 
          onLogout={handleLogout} 
        />
      </header>
    </div>
  );
}

function ProfileDisplay({ profile, onEditClick, onLogout }) {
  return (
    <div className="hr-profile-display">
      <div className="hr-photo">
        <img src={profile.photo} alt="Profile" className="hr-profile-photo" />
      </div>
      <div className="hr-details">
        <div className="hr-detail">
          <strong>Name:</strong> {profile.name}
        </div>
        <div className="hr-detail">
          <strong>Phone:</strong> {profile.phone}
        </div>
        <div className="hr-detail">
          <strong>Email:</strong> {profile.email}
        </div>
        <div className="hr-detail">
          <strong>Resume:</strong> <a href={profile.resume} download className="hr-resume-link">Download</a>
        </div>
      </div>
      <div className="button-group">
        <button type="button" className="hr-edit-button" onClick={onEditClick}>Edit</button>
        <button type="button" className="hr-change-password-button">Change Password</button>
        <button type="button" className="hr-logout-button" onClick={onLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default Hrprofile;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    photo: "https://drive.google.com/uc?export=view&id=1Am4DtRb-_0ZqOrUjYe7kLHgjh5WM9yO1",
    name: "",
    phone: "",
    email: "",
    resume: "resume.pdf",
  });

  useEffect(() => {
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name') || ""; // Replace with stored or default name
    const phone = localStorage.getItem('phone') || "+91-"; // Replace with stored or default phone
    const updatedProfile = { ...profile, email, name, phone };
    setProfile(updatedProfile);
  }, []);

  const handleEditClick = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>Hi, {profile.name || "Guest"}!</h1>
        <ProfileDisplay profile={profile} onEditClick={handleEditClick} />
      </header>
    </div>
  );
}

function ProfileDisplay({ profile, onEditClick }) {
  return (
    <div className="profile-display">
      <div className="photo">
        <img src={profile.photo} alt="Profile" className="profile-photo" />
      </div>
      <div className="details">
        <div className="detail">
          <strong>Name:</strong> {profile.name}
        </div>
        <div className="detail">
          <strong>Phone:</strong> {profile.phone}
        </div>
        <div className="detail">
          <strong>Email:</strong> {profile.email}
        </div>
        <div className="detail">
          <strong>Resume:</strong> <a href={profile.resume} download className="resume-link">Download</a>
        </div>
      </div>
      <div className="button-group">
        <button type="button" className="edit-buttonn" onClick={onEditClick}>Edit</button>
        <button type="button" className="change-password-button">Change Password</button>
        <button type="button" className="logout-button">Log Out</button>
      </div>
    </div>
  );
}

export default Profile;

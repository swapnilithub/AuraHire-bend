import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles2/hrprofile.css";

function Hrprofile() {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const profile = {
    photo: "https://via.placeholder.com/150",
    name: "Swapnil",
    phone: "+91-853400220",
    email: "mailtoswapnilr@example.com",
    resume: "resume.pdf",
  };

  const handleEditClick = () => {
    navigate("/edit-profile-hr"); // Navigate to the EditProfile2 page
  };

  return (
    <div className="hr-profile-container">
      <header className="hr-profile-header">
        <h1>Hr, {profile.name}!</h1>
        <ProfileDisplay profile={profile} onEditClick={handleEditClick} />
      </header>
    </div>
  );
}

function ProfileDisplay({ profile, onEditClick }) {
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
      <button type="button" className="hr-edit-button" onClick={onEditClick}>Edit</button>
      <button type="button" className="hr-change-password-button">Change Password</button>
      <button type="button" className="hr-logout-button">Log Out</button>
    </div>
  );
}

export default Hrprofile;

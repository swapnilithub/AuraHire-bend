import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles2/editProfile2.css";

function EditProfile2() {
  const [profile, setProfile] = useState({
    name: "Swapnil",
    phone: "+91-853400220",
    email: "mailtoswapnilr@example.com",
    resume: "resume.pdf",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    navigate("/");
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile hr</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Photo URL:
          <input
            type="text"
            name="photo"
            value={profile.photo}
            onChange={handleChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Resume URL:
          <input
            type="text"
            name="resume"
            value={profile.resume}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfile2;

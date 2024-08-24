import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/editProfile.css";

function EditProfile() {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    resume: "",
    photo: "", 
  });

  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (email) {
      fetch(`http://localhost:8080/api/profile?email=${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${email}:${password}`)}`
        }
      })
        .then(response => response.json())
        .then(data => setProfile(data))
        .catch(error => console.error('Error fetching profile data:', error));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update profile data
    fetch('http://localhost:8080/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${profile.email}:${localStorage.getItem('password')}`)}` // Include basic auth if needed
      },
      body: JSON.stringify(profile),
    })
      .then(response => {
        if (response.ok) {
          navigate("/"); // Redirect to home or another page on success
        } else {
          console.error('Failed to update profile');
        }
      })
      .catch(error => console.error('Error updating profile:', error));
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Photo URL:
          <input
            type="text"
            name="photo"
            value={profile.photo || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={profile.phone || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Resume URL:
          <input
            type="text"
            name="resume"
            value={profile.resume || ""}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfile;

import React, { useState, useEffect } from "react";
import "../styles/editProfile.css";

function EditProfile() {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    resume: "",
    photo: "",
  });

  const [message, setMessage] = useState(""); // New state for success message

  useEffect(() => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');

    if (!email) {
      alert("Please log in to edit your profile.");
    } else {
      fetch(`http://localhost:8080/api/profile?email=${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa(`${email}:${password}`)}`
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Error fetching profile data");
          }
          return response.json();
        })
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

    fetch('http://localhost:8080/api/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${profile.email}:${localStorage.getItem('password')}`)}`
      },
      body: JSON.stringify(profile),
    })
      .then(response => {
        if (response.ok) {
          setMessage("Profile updated successfully!"); // Show success message
        } else {
          return response.text().then(text => {
            console.error('Failed to update profile:', text);
          });
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
      {message && <p>{message}</p>} {/* Display success message */}
    </div>
  );
}

export default EditProfile;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles2/editProfile2.css";

function EditProfile2() {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    resume: "",
    photo: "",
  });

  const { email } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:8080/api/profile-hr/${email}`)
        .then(response => response.json())
        .then(data => setProfile(data))
        .catch(error => console.error('Error fetching profile:', error));
    } else {
      navigate('/'); 
    }
  }, [email, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/profile-hr/${email}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            console.error(`Failed to update profile: ${text}`);
            throw new Error(text);
          });
        }
        return response.json();
      })
      .then(() => {
        navigate("/"); 
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        alert(`Failed to update profile: ${error.message}`);
      });
  };

  return (
    <div className="edit-profile-container">
      <h1>Edit Profile Hr</h1>
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

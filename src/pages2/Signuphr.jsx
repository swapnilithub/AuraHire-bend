import "../styles/signup.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signuphr = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    photo: "",
    resume: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:15000/api/signup-hr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();

      if (response.ok) {
        // Store necessary data in localStorage
        localStorage.setItem("name", formData.name);
        localStorage.setItem("email", formData.email);
        localStorage.setItem("phone", formData.phone);
        localStorage.setItem("photo", formData.photo);
        localStorage.setItem("resume", formData.resume);
        
        // Navigate to the next page
        navigate("/homehr");
      } else {
        setMessage(text || "Signup failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <div className="image-content">
          <p className="tagline">
            Join the <strong>Aura</strong>Hire
          </p>
          <p className="subtext">
            Create your account to enjoy all the features of AuraHire.
          </p>
        </div>
      </div>
      <div className="signup-form-section">
        <h2>Create your Hr Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          {message && <p>{message}</p>}
          <div className="signup-form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="signup-form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="signup-form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="signup-form-group">
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="signup-form-group">
            <label>Photo URL:</label>
            <input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
            />
          </div>
          <div className="signup-form-group">
            <label>Resume URL:</label>
            <input
              type="text"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
            />
          </div>
          <button className="signup-button" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signuphr;

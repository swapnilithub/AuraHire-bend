import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // Default role
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
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user info
        navigate("/home");
      } else {
        setMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <div className="image-content">
          <p className="tagline">Join the <black>Aura</black>Hire</p>
          <p className="subtext">
            Create your account to enjoy all the features of AuraHire.
          </p>
        </div>
      </div>
      <div className="signup-form-section">
        <h2>Create your Account</h2>
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
          <button className="signup-button" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

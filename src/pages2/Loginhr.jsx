import "../styles/login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginhr = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
      const response = await fetch("http://localhost:8080/api/hr/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();

      if (response.ok) {
        navigate("/home");
      } else {
        setMessage(text || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const handleSignUp = () => {
    navigate("/Signup-Hr");
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <div className="image-content">
          <p className="tagline"><strong>Aura</strong>Hire</p>
          <p className="subtext">
            Where the world comes for the future
          </p>
        </div>
      </div>
      <div className="login-form-section">
        <h2>Welcome to <black>Aura</black>Hire Hr authentication</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {message && <p>{message}</p>}
          <div className="login-form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="login-form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="login-button" type="submit">
            Sign in
          </button>
          <p className="signupp-prompt">
            New to <strong>Aura</strong>Hire?{" "}
            <button className="signupp-button" type="button" onClick={handleSignUp}>
              Create Account
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Loginhr;

import "../styles/login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
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
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <div className="image-content">
          <p className="tagline"><black>Aura</black>Hire</p>
          <p className="subtext">Where the world comes for the future</p>
        </div>
      </div>
      <div className="login-form-section">
        <h2>Welcome to <duo>Aura</duo>Hire</h2>
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
          <button className="login-button" type="submit">Sign in</button>
          <p className="signup-prompt">
            New to <duo>Aura</duo>Hire?{" "}
            <button className="signup-button" type="button" onClick={handleSignUp}>
              Create Account
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

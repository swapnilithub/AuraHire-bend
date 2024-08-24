import "../styles/signup.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();

      if (response.ok) {
        localStorage.setItem("email", formData.email);
        localStorage.setItem("password", formData.password);

        navigate("/home");
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
          <p className="tagline">Join the <strong>Aura</strong>Hire</p>
          <p className="subtext">
            Create your account to enjoy all the features of Lovebirds.
          </p>
        </div>
      </div>
      <div className="signup-form-section">
        <h2>Create your Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          {message && <p>{message}</p>}
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

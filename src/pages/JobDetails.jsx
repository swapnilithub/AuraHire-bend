import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must log in to apply for jobs.");
      navigate("/login");
      return;
    }

    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:15000/api/jobs/${id}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch job details: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchProfile = () => {
      const userId = localStorage.getItem("user_id");
      const email = localStorage.getItem("email");
      const name = localStorage.getItem("name");

      if (userId && email && name) {
        setProfile({ userId, email, name });
      } else {
        console.warn("Profile data missing from localStorage. Redirecting to login.");
        localStorage.clear();
        alert("Session expired. Please log in again.");
        navigate("/login");
      }
    };

    fetchJob();
    fetchProfile();
  }, [id, navigate]);

  const handleApply = async () => {
    if (!profile) {
      alert("User profile not found! Please log in.");
      return;
    }

    const applicationData = {
      user_id: profile.userId,
      email: profile.email,
      name: profile.name,
      job_id: id,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:15000/api/applicants/apply`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to apply: ${errorMessage}`);
      }

      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error applying to job:", error);
      alert("Error submitting application");
    }
  };

  if (error) return <p>Error: {error}</p>;
  if (!job) return <p>Loading job details...</p>;

  return (
    <div className="job-details">
      <h1>{job.title}</h1>
      <p><strong>Category:</strong> {job.category}</p>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Description:</strong> {job.description}</p>

      <button type="button" onClick={handleApply}>Apply Now</button>
    </div>
  );
};

export default JobDetails;

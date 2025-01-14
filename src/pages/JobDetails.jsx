import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/jobs/${id}`);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to fetch job details: ${response.status} ${response.statusText} - ${errorText}`);
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchProfile = () => {
      const email = localStorage.getItem("email");
      const name = localStorage.getItem("name");

      if (email && name) {
        setProfile({ email, name });
      } else {
        console.error('Profile data missing from localStorage');
      }
    };

    fetchJob();
    fetchProfile();
  }, [id]);

  const handleApply = async () => {
    if (!profile || !profile.email) {
      alert("User profile not found! Please ensure you are logged in.");
      return;
    }

    const applicationData = {
      email: profile.email,
      jobId: id,
    };

    try {
      const response = await fetch(`http://api/applicants/apply/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to apply: ${response.status} ${response.statusText} - ${errorMessage}`);
      }

      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error applying to job:', error);
      alert('Error submitting application');
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!job) {
    return <p>Loading job details...</p>;
  }

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

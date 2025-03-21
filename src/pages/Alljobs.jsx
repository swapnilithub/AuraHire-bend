import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Alljobs.css";

const Alljobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/jobs');
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Network response was not ok: ${errorText}`);
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = (job) => {
    navigate(`/job-details/${job.id}`);
  };

  return (
    <div className="container-alljobs">
      <h1 className="title">Jobs <strong>for</strong> you</h1>
      <div className="jobs-list">
        {jobs.length === 0 ? (
          <p className="no-jobs">No jobs available.</p>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className="job-item">
              <h2 className="job-title">{job.title}</h2>
              <p><strong>Category:</strong> {job.category}</p>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Description:</strong> {job.description}</p>
              <button className="apply-button" onClick={() => handleApply(job)}>Apply</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Alljobs;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/JobDetails.css";

const JobDetails = () => {
  const { id } = useParams(); // Get job id from url
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/jobs/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error('Error fetching job:', error);
      }
    };

    fetchJob();
  }, [id]);

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
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;

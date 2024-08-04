import React from 'react';
import '../styles/Alljobs.css';

const JobCard = ({ job }) => (
  <div className="job-card">
    <h2>{job.title}</h2>
    <p className="category">Category: <a href="#">{job.category}</a></p>
    <p>{job.description}</p>
    <hr />
    <p>Company: {job.company}</p>
    <p>Location: {job.location}</p>
    <button>Apply</button>
  </div>
);

const Alljobs = ({ jobs = [] }) => {
  return (
    <div className="jobs-container">
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))
      )}
    </div>
  );
};

export default Alljobs;

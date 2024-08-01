
import React from 'react';
import '../styles/Alljobs.css';

const jobs = [
  {
    title: 'Company name here',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  }
  ,{
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },
  {
    title: 'xxxxx',
    category: 'xxxxxx',
    company: 'xxxxx',
    location: 'xxxxxx',
    date: 'xxxxxx',
    description: 'param',
  },

];

const JobCard = ({ job }) => (
  <div className="job-card">
    <h2>{job.title}</h2>
    <p className="category">Category: <a href="#">{job.category}</a></p>
    <p>{job.description}</p>
    <hr />
    <p>Company: {job.company}</p>
    <p>Location: {job.location}</p>
    <p>Date: {job.date}</p>
    <button>Apply</button>
  </div>
);

const Alljobs = () => {
  return (
    <div className="jobs-container">
      {jobs.map((job) => (
        <JobCard key={job.title} job={job} />
      ))}
    </div>
  );
};

export default Alljobs;

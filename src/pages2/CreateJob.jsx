import React, { useState } from 'react';
import "../styles2/createjob.css";

const CreateJob = ({ addJob, jobs }) => {
  // State variables for form fields
  const [jobTitle, setJobTitle] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [jobCompany, setJobCompany] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  console.log(addJob);

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newJob = {
      title: jobTitle,
      category: jobCategory,
      company: jobCompany,
      location: jobLocation,
      description: jobDescription,
    };

    if (typeof addJob === 'function') {
      addJob(newJob);
    } else {
      console.error("addJob is not a function");
    }
    setJobTitle('');
    setJobCategory('');
    setJobCompany('');
    setJobLocation('');
    setJobDescription('');
  };

  return (
    <div className="containerjob">
      <h1>Create Job</h1>
      <form onSubmit={handleSubmit} className="job-form">
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobCategory">Category:</label>
          <input
            type="text"
            id="jobCategory"
            value={jobCategory}
            onChange={(e) => setJobCategory(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobCompany">Company:</label>
          <input
            type="text"
            id="jobCompany"
            value={jobCompany}
            onChange={(e) => setJobCompany(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobLocation">Location:</label>
          <input
            type="text"
            id="jobLocation"
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description:</label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="buttoncjob">Submit</button>
      </form>
    </div>
  );
};

export default CreateJob;

import React, { useState } from 'react';
import "../styles2/createjob.css";

const CreateJob = ({ addJob }) => {
  const [job, setJob] = useState({
    title: '',
    category: '',
    company: '',
    location: '',
    description: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob(prevJob => ({ ...prevJob, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!job.title || !job.category || !job.company || !job.location || !job.description) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const data = await response.json();
      addJob(data); // Update the state with new job
      setJob({ title: '', category: '', company: '', location: '', description: '' }); // Clear form
      alert('Job added successfully!');
    } catch (error) {
      setError('Failed to add job. Please try again.');
    }
  };

  return (
    <div className="containerjob">
      <h2>Create Job</h2>
      {error && <p className="error">{error}</p>}
      <form className="job-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title</label>
          <input name="title" value={job.title} onChange={handleChange} placeholder="Job Title" />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input name="category" value={job.category} onChange={handleChange} placeholder="Category" />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input name="company" value={job.company} onChange={handleChange} placeholder="Company" />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input name="location" value={job.location} onChange={handleChange} placeholder="Location" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name="description" value={job.description} onChange={handleChange} placeholder="Description" />
        </div>
        <button className="buttoncjob" type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default CreateJob;

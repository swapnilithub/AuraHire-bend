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
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob(prevJob => ({ ...prevJob, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!job.title || !job.category || !job.company || !job.location || !job.description) {
      setError('Please fill in all fields');
      return;
    }

    // Get user from localStorage and extract hr_id
    const user = JSON.parse(localStorage.getItem('user')); // Assuming user object is stored in LS
    const hr_id = user?.id; // Extract hr_id from user object

    if (!hr_id) {
      setError('No HR ID found. Please login again.');
      return;
    }

    const token = localStorage.getItem('token'); // Get the token from local storage

    if (!token) {
      setError('No token found. Please login again.');
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch('http://localhost:15000/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Pass token in header
        },
        body: JSON.stringify({
          ...job,
          hr_id // Send hr_id in the payload
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create job');
      }

      const data = await response.json();
      addJob(data); // Update the state with new job
      setJob({ title: '', category: '', company: '', location: '', description: '' }); // Clear form
      alert('Job added successfully!');
    } catch (error) {
      setError(error.message || 'Failed to add job. Please try again.');
    } finally {
      setIsSubmitting(false);
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
        <button 
          className="buttoncjob" 
          type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Add Job'}
        </button>
      </form>
    </div>
  );
};

export default CreateJob;

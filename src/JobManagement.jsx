import React, { useState } from 'react';
import CreateJob from './pages2/CreateJob';
import Alljobs from './pages/Alljobs';

const JobManagement = () => {
  const [jobs, setJobs] = useState([]);

  const addJob = (newJob) => {
    console.log('New job added in JobManagement:', newJob);
    setJobs(prevJobs => {
      console.log('Jobs before update in JobManagement:', prevJobs);
      return [...prevJobs, newJob];
    });
  };

  console.log('Jobs state in JobManagement:', jobs);

  return (
    <div className="job-management">
      <CreateJob addJob={addJob} />
      <Alljobs jobs={jobs} />
    </div>
  );
};

export default JobManagement;

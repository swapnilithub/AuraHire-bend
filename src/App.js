import React, { useState } from 'react';
import Layout from './components/layout/Layout';


const App = () => {
  const [jobs, setJobs] = useState([
    { title: 'Software Engineer', category: 'IT', company: 'TechCorp', location: 'Bangalore', description: 'Develop software solutions.' },
    { title: 'Data Scientist', category: 'IT', company: 'DataGenius', location: 'Mumbai', description: 'Analyze data to drive business decisions.' },
    { title: 'Product Manager', category: 'Management', company: 'InnovateTech', location: 'Delhi', description: 'Oversee product development from inception to launch.' },
    // Add more job entries here
  ]);

  const addJob = (newJob) => {
    
    setJobs((prevJobs) => {
      
      return [...prevJobs, newJob];
    });
  };

  console.log('App jobs?:', jobs); // Check the jobs state

  return (
    <Layout jobs={jobs} addJob={addJob} />
  );
};

export default App;

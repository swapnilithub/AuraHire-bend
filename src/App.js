import React, { useState } from 'react';
import { Client } from 'appwrite';
import Layout from './components/layout/Layout';

// Initialize Appwrite SDK
const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
  .setProject('66bae69a002db73f2ac4'); // Replace with your Project ID

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

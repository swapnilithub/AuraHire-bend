import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobApplicantsPage = () => {
    const { id } = useParams(); 
    const [job, setJob] = useState(null);
    const [applicants, setApplicants] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    console.log('JobApplicantsPage rendered with ID:', id);

    useEffect(() => {
        if (!id) {
            console.error('Job ID is undefined');
            setError('Job ID is undefined');
            setLoading(false);
            return;
        }

        console.log(`Fetching job details for ID: ${id}`);  

        const fetchJobAndApplicants = async () => {
            try {
                
                const jobResponse = await fetch(`http://localhost:8080/api/jobs/${id}`);
                if (!jobResponse.ok) {
                    throw new Error(`Failed to fetch job details: ${jobResponse.status} ${jobResponse.statusText}`);
                }
                const jobData = await jobResponse.json();
                setJob(jobData);

                const applicantsResponse = await fetch(`https://api/applicants/job/${id}`);
                if (!applicantsResponse.ok) {
                    throw new Error(`Failed to fetch applicants: ${applicantsResponse.status} ${applicantsResponse.statusText}`);
                }
                const applicantsData = await applicantsResponse.json();
                setApplicants(applicantsData);
            } catch (error) {
                console.error('Error occurred:', error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJobAndApplicants();
    }, [id]); 

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!job) {
        return <p>Job details not found.</p>;
    }

    return (
        <div className="job-applicants-page">
            <h1>Job Details</h1>
            <div className="job-details">
                <h2>{job.title}</h2>
                <p><strong>Category:</strong> {job.category}</p>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Description:</strong> {job.description}</p>
            </div>

            <h2>Applicants</h2>
            {applicants.length === 0 ? (
                <p>No applicants for this job yet.</p>
            ) : (
                <ul>
                    {applicants.map((applicant) => (
                        <li key={applicant.id}>
                            <p><strong>Name:</strong> {applicant.name}</p>
                            <p><strong>Email:</strong> {applicant.email}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default JobApplicantsPage;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const Alljobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.warn("No token found. Redirecting to login.");
          navigate("/login");
          return;
        }

        const response = await fetch("http://localhost:15000/api/jobs", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          if (response.status === 403 || response.status === 401) {
            console.warn("Unauthorized access. Redirecting to login.");
            localStorage.removeItem("token");
            navigate("/login");
            return;
          }
          throw new Error(`Network response was not ok: ${await response.text()}`);
        }

        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [navigate]);

  const handleViewJob = (jobId) => {
    navigate(`/job-details/${jobId}`);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">
        Jobs <strong>for</strong> You
      </h1>
      <Row>
        {jobs.length === 0 ? (
          <p className="text-center">No jobs available.</p>
        ) : (
          jobs.map((job) => (
            <Col key={job.id} md={4} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Text>
                    <strong>Category:</strong> {job.category} <br />
                    <strong>Company:</strong> {job.company} <br />
                    <strong>Location:</strong> {job.location} <br />
                    <strong>Description:</strong> {job.description}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleViewJob(job.id)}>
                    View
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Alljobs;

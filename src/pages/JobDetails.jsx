import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Spinner, Container, Card, Button, Alert } from "react-bootstrap";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          console.warn("No token found. Redirecting to login.");
          navigate("/login");
          return;
        }

        const response = await fetch(`http://localhost:15000/api/job/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        console.log("Raw response:", response); // ✅ Debugging API response

        if (!response.ok) {
          throw new Error(`Failed to fetch job details (Status: ${response.status})`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error(`Unexpected response type: ${contentType}`);
        }

        const data = await response.json();
        console.log("Job Data Received:", data); // ✅ Debugging Data
        setJob(data);
      } catch (error) {
        console.error("Error fetching job details:", error);
        setMessage({ type: "danger", text: error.message });
      }
    };

    fetchJobDetails();
  }, [id, navigate]);

  const handleApply = async () => {
    setLoading(true);
    setMessage(null);

    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!user || !token) {
      setMessage({ type: "danger", text: "User information missing. Please log in again." });
      setLoading(false);
      return;
    }

    const { id: user_id, email, name } = user;
    const jobIdNumber = parseInt(id, 10); // ✅ Convert job_id to number

    try {
      const response = await fetch(`http://localhost:15000/api/apply/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user_id, email, name, job_id: jobIdNumber }), // ✅ Send job_id as number
      });

      console.log("Application Response:", response); // ✅ Debugging API response

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log("Application Success:", data); // ✅ Debugging success response

      setMessage({ type: "success", text: "Application submitted successfully!" });
    } catch (error) {
      console.error("Error applying for job:", error);
      setMessage({ type: "danger", text: error.message });
    } finally {
      setLoading(false);
    }
  };

  if (!job)
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading job details...</p>
      </Container>
    );

  return (
    <Container className="mt-5">
      <Card className="shadow-lg p-4">
        <Card.Body>
          <h1 className="text-primary">{job.title}</h1>
          <hr />
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Description:</strong> {job.description}</p>

          {message && <Alert variant={message.type}>{message.text}</Alert>}

          <Button variant="success" className="mt-3" onClick={handleApply} disabled={loading}>
            {loading ? "Applying..." : "Apply Now"}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default JobDetails;

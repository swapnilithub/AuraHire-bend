import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  CircularProgress,
} from "@mui/material";

const JobApplicantsPage = () => {
  const [applicants, setApplicants] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false); // To control the modal visibility

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("🔹 Token from LocalStorage:", token);

        if (!token) {
          setError("No token found. Please log in.");
          setLoading(false);
          return;
        }

        const response = await fetch("http://localhost:15000/api/applicants", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Cache-Control": "no-cache",
          },
        });

        if (!response.ok) {
          const errorMessage = await response.json();
          console.error("❌ API Error:", errorMessage);

          if (response.status === 401) {
            setError("Invalid token. Please log in again.");
          } else if (response.status === 404) {
            setError("No applicants found for your jobs.");
            setOpen(true); // Show modal for no applicants
          } else {
            setError("Failed to fetch applicants.");
          }

          setLoading(false);
          return;
        }

        const data = await response.json();
        console.log("🔹 Applicants Data:", data);

        if (data.length === 0) {
          setError("No applicants found for your jobs.");
          setOpen(true);
        } else {
          setApplicants(data);
        }
      } catch (error) {
        console.error("❌ Fetch Error:", error.message);
        setError(error.message);
        setOpen(true); // Show error modal
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="job-applicants-page">
      <h1>Applicants for Your Jobs</h1>

      {loading ? (
        <CircularProgress />
      ) : applicants.length === 0 ? (
        <p>No applicants found for your jobs.</p>
      ) : (
        <ul>
          {applicants.map((applicant) => (
            <li key={applicant.id}>
              <p>
                <strong>Name:</strong> {applicant.name}
              </p>
              <p>
                <strong>Email:</strong> {applicant.email}
              </p>
              <p>
                <strong>Applied On:</strong>{" "}
                {new Date(applicant.created_on).toLocaleDateString()}
              </p>
              <p>
                <strong>HR ID:</strong> {applicant.hr_id}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Material UI Dialog (Modal) for error or no applicants */}
      <Dialog open={open} onClose={handleCloseModal}>
        <DialogTitle>No Applicants Found</DialogTitle>
        <DialogContent>
          <p>{error}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default JobApplicantsPage;

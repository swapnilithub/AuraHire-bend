import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Avatar, Typography, Button, Grid, CircularProgress } from "@mui/material";
import { Edit, Logout } from "@mui/icons-material";

function Hrprofile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    photo: "https://via.placeholder.com/150",
    name: "",
    phone: "",
    email: "",
    resume: "resume.pdf",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    if (email && token) {
      fetch("http://localhost:15000/api/profile/hr", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          setProfile(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching profile:', error);
          setLoading(false);
          alert('Failed to load profile, please try again later.');
        });
    }
  }, []);

  const handleEditClick = () => {
    navigate("/edit-profile-hr");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Card sx={{ p: 4, boxShadow: 3, width: "100%", minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold", color: "black" }}>
          Hi, {profile.name || "Guest"}!
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar src={profile.photo || "https://via.placeholder.com/150"} sx={{ width: 140, height: 140 }} />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mb: 1, color: "black" }}>Name: {profile.name}</Typography>
            <Typography variant="h6" sx={{ mb: 1, color: "black" }}>Phone: {profile.phone}</Typography>
            <Typography variant="h6" sx={{ mb: 1, color: "black" }}>Email: {profile.email}</Typography>
            <Typography variant="h6" sx={{ mb: 2, color: "black" }}>
              Resume: <a href={profile.resume} target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>Download</a>
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
            <Button variant="contained" color="warning" startIcon={<Edit />} onClick={handleEditClick} sx={{ width: "100%" }}>
              Edit
            </Button>
            <Button variant="contained" color="error" startIcon={<Logout />} onClick={handleLogout} sx={{ width: "100%" }}>
              Logout
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default Hrprofile;

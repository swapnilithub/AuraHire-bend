import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  TextField,
  Button,
  Avatar,
  CircularProgress,
  Alert,
  Typography,
  Grid,
} from "@mui/material";
import { Edit, Save, Logout } from "@mui/icons-material";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    id: "",
    email: "",
    name: "",
    phone: "",
    photo: "",
    resume: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, severity: "", message: "" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    setProfile((prevProfile) => ({
      ...prevProfile,
      id: storedUser.id,
      email: storedUser.email,
      name: storedUser.name,
    }));

    fetchProfile(storedUser.id, token);
  }, [navigate]);

  const fetchProfile = async (id, token) => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:15000/api/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setProfile((prevProfile) => ({
          ...prevProfile,
          phone: data.phone || "",
          photo: data.photo || "",
          resume: data.resume || "",
        }));
      } else {
        console.error("Error fetching profile:", data.error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProfile = { ...profile };
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:15000/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedProfile),
      });

      const data = await response.json();
      if (response.ok) {
        setAlert({ show: true, severity: "success", message: data.message });
        setIsEditing(false);
        fetchProfile(profile.id, token);
      } else {
        setAlert({ show: true, severity: "error", message: data.error });
      }
    } catch (error) {
      setAlert({
        show: true,
        severity: "error",
        message: "An error occurred while updating your profile.",
      });
      console.error("Submit error:", error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Card sx={{ p: 4, boxShadow: 3, width: "100%", minHeight: "70vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {alert.show && (
          <Alert severity={alert.severity} onClose={() => setAlert({ show: false })}>
            {alert.message}
          </Alert>
        )}

        {isLoading ? (
          <CircularProgress sx={{ alignSelf: "center" }} />
        ) : isEditing ? (
          <form onSubmit={handleSubmit}>
            <TextField label="Name" fullWidth variant="outlined" value={profile.name} disabled sx={{ my: 2 }} />
            <TextField label="Email" fullWidth variant="outlined" value={profile.email} disabled sx={{ my: 2 }} />
            <TextField label="Phone" name="phone" fullWidth variant="outlined" value={profile.phone} onChange={handleChange} required sx={{ my: 2 }} />
            <TextField label="Photo URL" name="photo" fullWidth variant="outlined" value={profile.photo} onChange={handleChange} required sx={{ my: 2 }} />
            <TextField label="Resume URL" name="resume" fullWidth variant="outlined" value={profile.resume} onChange={handleChange} required sx={{ my: 2 }} />
            <Button variant="contained" color="primary" type="submit" startIcon={<Save />}>Save</Button>
            <Button variant="outlined" color="secondary" sx={{ ml: 2 }} onClick={() => setIsEditing(false)}>Cancel</Button>
          </form>
        ) : (
          <Grid container alignItems="center" spacing={3} sx={{ height: "100%" }}>
            {/* Profile Picture on the Left */}
            <Grid item xs={3} sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar src={profile.photo || "https://via.placeholder.com/150"} sx={{ width: 140, height: 140 }} />
            </Grid>

            {/* Profile Info in the Center */}
            <Grid item xs={6} sx={{ textAlign: "center" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>Name: {profile.name}</Typography>
              <Typography variant="h6" sx={{ mb: 1 }}>Email: {profile.email}</Typography>
              <Typography variant="h6" sx={{ mb: 1 }}>Phone: {profile.phone}</Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Resume: <a href={profile.resume} target="_blank" rel="noopener noreferrer">View Resume</a>
              </Typography>
            </Grid>

            {/* Edit and Logout Buttons on the Right */}
            <Grid item xs={3} sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
              <Button variant="contained" color="warning" startIcon={<Edit />} onClick={() => setIsEditing(true)} sx={{ width: "100%" }}>
                Edit
              </Button>
              <Button variant="contained" color="error" startIcon={<Logout />} onClick={() => navigate("/login")} sx={{ width: "100%" }}>
                Logout
              </Button>
            </Grid>
          </Grid>
        )}
      </Card>
    </Container>
  );
};

export default ProfilePage;

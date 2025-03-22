import React, { useState } from "react";
import { jsPDF } from "jspdf";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    education: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(18);
    doc.text("Resume", 20, y);
    doc.setFontSize(12);
    y += 10;

    doc.text(`Name: ${resumeData.name}`, 20, y);
    y += 10;
    doc.text(`Email: ${resumeData.email}`, 20, y);
    y += 10;
    doc.text(`Phone: ${resumeData.phone}`, 20, y);
    y += 10;

    doc.text("Skills:", 20, y);
    y += 10;
    doc.text(resumeData.skills, 20, y, { maxWidth: 170 });
    y += 20;

    doc.text("Experience:", 20, y);
    y += 10;
    doc.text(resumeData.experience, 20, y, { maxWidth: 170 });
    y += 20;

    doc.text("Education:", 20, y);
    y += 10;
    doc.text(resumeData.education, 20, y, { maxWidth: 170 });

    doc.save("resume.pdf");
  };

  return (
    <Container
      maxWidth={false} // Makes container 100% width
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        bgcolor: "#f4f4f4",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px", // Keeps it clean on larger screens
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: "white",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Resume Builder
        </Typography>
        <Grid container spacing={2}>
          {/* Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={resumeData.name}
              onChange={handleChange}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              value={resumeData.email}
              onChange={handleChange}
            />
          </Grid>

          {/* Phone */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              variant="outlined"
              value={resumeData.phone}
              onChange={handleChange}
            />
          </Grid>

          {/* Skills */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Skills"
              name="skills"
              multiline
              rows={3}
              variant="outlined"
              value={resumeData.skills}
              onChange={handleChange}
            />
          </Grid>

          {/* Experience */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Experience"
              name="experience"
              multiline
              rows={3}
              variant="outlined"
              value={resumeData.experience}
              onChange={handleChange}
            />
          </Grid>

          {/* Education */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Education"
              name="education"
              multiline
              rows={3}
              variant="outlined"
              value={resumeData.education}
              onChange={handleChange}
            />
          </Grid>

          {/* Buttons */}
          <Grid item xs={12} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={generatePDF}
              sx={{ mt: 2, width: "100%" }}
            >
              Download Resume
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ResumeBuilder;

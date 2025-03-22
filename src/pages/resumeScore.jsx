import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import "bootstrap/dist/css/bootstrap.min.css";

// Specify the worker version compatible with pdfjs-dist
GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.6.347/es5/build/pdf.worker.min.js`;

const ResumeScorePage = () => {
  const [resumeContent, setResumeContent] = useState(""); // To store extracted text from PDF
  const [resumeScore, setResumeScore] = useState(0); // Store the score
  const [alertMessage, setAlertMessage] = useState(""); // Alert message for score
  const [alertVariant, setAlertVariant] = useState("success"); // Variant for the alert

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      extractTextFromPDF(file); // Process the PDF file
    } else {
      setAlertMessage("Please upload a valid PDF file.");
      setAlertVariant("danger");
    }
  };

  // Extract text from PDF file
  const extractTextFromPDF = async (file) => {
    const fileReader = new FileReader();
    fileReader.onload = async function () {
      const typedarray = new Uint8Array(this.result);
      const pdfDoc = await getDocument(typedarray).promise;
      let fullText = "";

      for (let i = 0; i < pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i + 1);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item) => item.str).join(" ");
        fullText += pageText + " ";
      }
      setResumeContent(fullText); // Set the extracted text to state
    };
    fileReader.readAsArrayBuffer(file);
  };

  // Calculate resume score based on extracted content
  const calculateResumeScore = () => {
    let score = 0;

    // Score based on the presence of key sections in the resume
    if (resumeContent.includes("skills")) score += 20;
    if (resumeContent.includes("experience")) score += 20;
    if (resumeContent.includes("education")) score += 20;
    if (resumeContent.includes("contact")) score += 10;
    if (resumeContent.length > 300) score += 10; // Length of resume
    if (resumeContent.length > 600) score += 10; // More length for better score

    setResumeScore(score); // Set the calculated score

    // Show message based on score
    if (score < 50) {
      setAlertMessage("Your resume score is low! Consider adding more details.");
      setAlertVariant("danger");
    } else {
      setAlertMessage("Your resume score is good!");
      setAlertVariant("success");
    }
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <Row className="w-100">
        <Col className="text-center">
          <h2 className="mb-4">Resume Scoring</h2>

          {/* Display score alert */}
          {alertMessage && <Alert variant={alertVariant}>{alertMessage}</Alert>}

          {/* Resume file input field */}
          <Form className="w-100">
            <Form.Group className="mb-3">
              <Form.Label>Upload Your Resume (PDF)</Form.Label>
              <Form.Control type="file" accept="application/pdf" onChange={handleFileChange} />
            </Form.Group>

            <Button variant="primary" onClick={calculateResumeScore} disabled={!resumeContent}>
              Calculate Resume Score
            </Button>
          </Form>

          {/* Display the score */}
          {resumeScore > 0 && (
            <div className="mt-4">
              <strong>Resume Score: </strong> {resumeScore}/100
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ResumeScorePage;

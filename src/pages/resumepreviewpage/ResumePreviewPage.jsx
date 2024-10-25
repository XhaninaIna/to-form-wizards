import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResumePreview from "../../components/resumepreview/ResumePreview";
import "./resumepreviewpage.css";

const ResumePreviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Load formData from location state or local storage
  const [formData, setFormData] = useState(() => {
    if (location.state) {
      return location.state;
    }
    const storedData = localStorage.getItem("cvFormData");
    return storedData ? JSON.parse(storedData) : null;
  });

  // If no formData is available, navigate the user back to the start of the wizard
  useEffect(() => {
    if (!formData) {
      navigate("/wizzard/step-1");
    }
  }, [formData, navigate]);

  if (!formData) {
    return <div>No data available. Please fill out the wizard first.</div>;
  }

  // Navigate back to the wizard to edit CV
  const handleBackToWizard = () => {
    // Retrieve the latest data from local storage
    const storedData = localStorage.getItem("cvFormData");
    const updatedFormData = storedData ? JSON.parse(storedData) : null;

    // Navigate to the first step of the wizard with the current data
    navigate("/wizzard/step-1", { state: updatedFormData });
  };

  const handleBackToList = () => {
    navigate("/");
  };

  return (
    <div className="resume-preview-page">
      <h1>Resume Preview</h1>
      <ResumePreview formData={formData} />
      <div className="navigation-buttons">
        <button onClick={handleBackToWizard}>Edit CV</button>
        <button onClick={handleBackToList}>Back to CV List</button>
      </div>
    </div>
  );
};

export default ResumePreviewPage;

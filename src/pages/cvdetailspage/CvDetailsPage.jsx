import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./cvdetailpage.css";

export default function CvDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cv, setCv] = useState(null);

  useEffect(() => {
    const storedCvs = JSON.parse(localStorage.getItem("cvs")) || [];
    const selectedCv = storedCvs.find((cv) => cv.id === String(id));
    setCv(selectedCv);
  }, [id]);

  if (!cv) return <div>CV not found</div>;

  const handleEditClick = () => {
    navigate("/edit-cv", { state: { cv } }); // Pass CV data to EditCvPage
  };

  const handleBackClick = () => {
    navigate("/"); // Navigate back to the CV list
  };

  return (
    <div className="cv-details-page">
      <h2>{cv.name}'s CV</h2>
      <p>Email: {cv.email}</p>
      <p>Education: {cv.education}</p>
      <p>Experience: {cv.experience}</p>

      <button onClick={handleEditClick} className="edit-button">
        Edit CV
      </button>
      <button onClick={handleBackClick} className="back-button">
        Back to List
      </button>
    </div>
  );
}

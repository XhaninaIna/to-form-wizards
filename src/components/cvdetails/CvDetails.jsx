import React from "react";
import { useNavigate } from "react-router-dom";

const CvDetails = ({ id }) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/wizard/1/${id}`);
  };
  return (
    <div>
      <h1>CV Details</h1>
      <button onClick={handleEdit}>Edit CV</button>
    </div>
  );
};

export default CvDetails;

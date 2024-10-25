import React from "react";
import "./cvlist.css";

export default function CvList({ cvList, onDelete, onViewDetails }) {
  return (
    <div className="cv-list">
      {cvList.map((cv) => (
        <div key={cv.id} className="cv-item">
          <h3>{cv.name}</h3>
          <p>Email: {cv.email}</p>
          <button
            onClick={() => onViewDetails(cv.id)}
            className="view-details-button"
          >
            View Details
          </button>
          <button onClick={() => onDelete(cv.id)} className="delete-button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

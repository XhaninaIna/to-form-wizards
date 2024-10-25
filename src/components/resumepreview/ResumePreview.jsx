import React from "react";

const ResumePreview = ({ formData }) => {
  const { name, email, education, experience } = formData || {};

  return (
    <div className="resume-preview">
      <h3>{name || "No Name Provided"}</h3>
      <p>Email: {email || "No Email Provided"}</p>
      <p>Education: {education || "No Education Provided"}</p>
      <p>Experience: {experience || "No Experience Provided"}</p>
    </div>
  );
};

export default ResumePreview;

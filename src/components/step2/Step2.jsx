import React, { useEffect, useState } from "react";
import "./step2.css";

export default function Step2({ onNext, formData }) {
  const [education, setEducation] = useState(formData.education || "");
  // Reset value when formData changes
  useEffect(() => {
    setEducation(formData.education || "");
  }, [formData]);
  // Pass updated education data to WizzardContainer
  const handleNext = (e) => {
    e.preventDefault();
    onNext({ education });
  };
  return (
    <div className="step2">
      <h2>Step 2: Education Information</h2>
      <form onSubmit={handleNext}>
        <input
          type="text"
          placeholder="Education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

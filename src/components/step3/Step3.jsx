import React, { useEffect, useState } from "react";
import "./step3.css";

export default function Step3({ onNext, formData }) {
  const [experience, setExperience] = useState(formData.experience || "");
  // Reset value when formData changes
  useEffect(() => {
    setExperience(formData.experience || "");
  }, [formData]);

  const handleNext = (e) => {
    e.preventDefault();
    onNext({ experience });
  };

  return (
    <div className="step3">
      <h2>Step 3: Experience Information</h2>
      <form onSubmit={handleNext}>
        <textarea
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

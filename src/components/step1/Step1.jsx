import React, { useEffect, useState } from "react";
import "./step1.css";

export default function Step1({ onNext, formData }) {
  const [name, setName] = useState(formData.name || "");
  const [email, setEmail] = useState(formData.email || "");
  // Reset values when formData changes
  useEffect(() => {
    setName(formData.name || "");
    setEmail(formData.email || "");
  }, [formData]);

  const handleNext = (e) => {
    e.preventDefault();
    // Pass updated data to WizzardContainer
    onNext({ name, email });
  };

  return (
    <div className="step1">
      <h2>Step 1: Personal Information</h2>
      <form onSubmit={handleNext}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./cvfilter.css";

export default function CvFilter({ onFilterChange }) {
  const location = useLocation();
  const [filter, setFilter] = useState("");

  // Sync the input value with the query parameter on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailFilter = params.get("email") || "";
    setFilter(emailFilter);
  }, [location.search]);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    onFilterChange(value.toLowerCase());
  };

  return (
    <div className="cv-filter">
      <input
        type="text"
        placeholder="Filter by email..."
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}

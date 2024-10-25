import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CvFilter from "../../components/cvfilter/CvFilter";
import CvList from "../../components/cvlist/CvList";
import "./cvlistpage.css";

export default function CvListPage() {
  const [cvs, setCvs] = useState(JSON.parse(localStorage.getItem("cvs")) || []);
  const [filteredCvs, setFilteredCvs] = useState(cvs);
  const navigate = useNavigate();
  const location = useLocation();
  // Function to handle delete action
  const handleDelete = (id) => {
    const updatedCvs = cvs.filter((cv) => cv.id !== id);
    setCvs(updatedCvs);
    setFilteredCvs(updatedCvs);
    localStorage.setItem("cvs", JSON.stringify(updatedCvs));
  };
  // Load CVs on initial mount
  useEffect(() => {
    const storedCvs = JSON.parse(localStorage.getItem("cvs")) || [];
    setCvs(storedCvs);
    setFilteredCvs(storedCvs);
  }, []);
  // Filter CVs based on query string 'email'
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const emailFilter = params.get("email") || "";

    if (emailFilter) {
      const filtered = cvs.filter((cv) =>
        cv.email?.toLowerCase().includes(emailFilter.toLowerCase())
      );
      setFilteredCvs(filtered);
    } else {
      setFilteredCvs(cvs);
    }
  }, [location.search, cvs]);

  // Function to update the URL with the filter query
  const filterCvsByEmail = (filter) => {
    const params = new URLSearchParams(location.search);
    if (filter) {
      params.set("email", filter);
    } else {
      params.delete("email");
    }
    navigate({ search: params.toString() });
  };

  // Navigate to Step-1
  const handleAddCvClick = () => {
    navigate("/wizzard/step-1");
  };

  // Navigate to CV Details
  const handleViewDetails = (id) => {
    navigate(`/cv/${id}`);
  };

  return (
    <div className="cv-list-page">
      <button onClick={handleAddCvClick} style={{ marginLeft: "20px" }}>
        Add List
      </button>
      <CvFilter onFilterChange={filterCvsByEmail} />
      <CvList
        cvList={filteredCvs}
        onDelete={handleDelete}
        onViewDetails={handleViewDetails}
      />
    </div>
  );
}

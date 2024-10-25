import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditCvPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cvData, setCvData] = useState({
    name: "",
    email: "",
    education: "",
    experience: "",
  });

  useEffect(() => {
    // Check if CV data is passed through location state
    if (location.state && location.state.cv) {
      setCvData(location.state.cv);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const storedCvs = JSON.parse(localStorage.getItem("cvs")) || [];
    const updatedCvs = storedCvs.map((cv) => {
      if (cv.id === location.state.cv.id) {
        return { ...cv, ...cvData };
      }
      return cv;
    });

    localStorage.setItem("cvs", JSON.stringify(updatedCvs));
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="edit-cv-page">
      <h2>Edit CV</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={cvData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={cvData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Education:
          <input
            type="text"
            name="education"
            value={cvData.education}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Experience:
          <input
            type="text"
            name="experience"
            value={cvData.experience}
            onChange={handleChange}
            required
          />
        </label>
        <button
          type="button"
          onClick={handleSave}
          style={{ marginBottom: "20px" }}
        >
          Save Changes
        </button>
        <button type="button" onClick={handleCancel} className="cancel-button">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditCvPage;

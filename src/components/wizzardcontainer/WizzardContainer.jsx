import React, { useEffect, useState } from "react";
import Step1 from "../step1/Step1";
import Step2 from "../step2/Step2";
import Step3 from "../step3/Step3";
import FormNavigation from "../formnavigation/FormNavigation";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./wizzardcontainer.css";

export default function WizzardContainer({ step }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: "",
    email: "",
    education: "",
    experience: "",
  });
  const collectDataAndNextStep = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  const handleFinish = () => {
    // Save CV to local storage on finish
    const savedCvs = JSON.parse(localStorage.getItem("cvs")) || [];
    const updatedCvs = [...savedCvs, formData]; // Add the new CV
    localStorage.setItem("cvs", JSON.stringify(updatedCvs));

    // Reset form to initial state
    resetForm();

    navigate("/resume-preview", { state: formData });
  };

  const resetForm = () => {
    setFormData({
      id: uuidv4(),
      name: "",
      email: "",
      education: "",
      experience: "",
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 onNext={collectDataAndNextStep} formData={formData} />;
      case 2:
        return <Step2 onNext={collectDataAndNextStep} formData={formData} />;
      case 3:
        return <Step3 onNext={collectDataAndNextStep} formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="wizard-container">
      {renderStep()}
      <FormNavigation
        currentStep={step}
        prevStep={() =>
          step > 1 && navigate(`/wizzard/step-${step - 1}`, { state: formData })
        }
        nextStep={() => {
          if (step < 3) {
            collectDataAndNextStep(formData);
            navigate(`/wizzard/step-${step + 1}`, { state: formData });
          } else {
            handleFinish();
          }
        }}
      />
    </div>
  );
}

import React from "react";
import WizzardContainer from "../../components/wizzardcontainer/WizzardContainer";
import "./wizzardpage.css";

const WizardPage = ({ step }) => {
  return (
    <div className="wizard-page">
      <h1>Welcome to the CV Wizard</h1>
      <WizzardContainer step={step} />
    </div>
  );
};

export default WizardPage;

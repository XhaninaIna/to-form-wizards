import React from "react";

const FormNavigation = ({ currentStep, prevStep, nextStep }) => {
  return (
    <div className="form-navigation">
      {currentStep > 1 && <button onClick={prevStep}>Back</button>}
      {currentStep < 3 && <button onClick={nextStep}>Next</button>}
      {currentStep === 3 && <button onClick={nextStep}>Submit</button>}
    </div>
  );
};

export default FormNavigation;

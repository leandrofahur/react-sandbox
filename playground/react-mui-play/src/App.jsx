import React, { useState } from "react";
import OuterStepper from "./components/OuterStepper/OuterStepper";
import "./App.scss";

const steps = [
  {
    label: "First item",
    innerSteps: [
      {
        label: "Subitem 1",
      },
    ],
  },
  {
    label: "Second item",
    innerSteps: [
      {
        label: "Subitem 1",
      },
      {
        label: "Subitem 2",
      },
      {
        label: "Subitem 3",
      },
    ],
  },
  {
    label: "Third item",
    innerSteps: [],
  },
];
function App() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNextOuterStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePreviousOuterStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <OuterStepper
      outerSteps={steps}
      activeStep={activeStep}
      handleNextOuterStep={handleNextOuterStep}
      handlePreviousOuterStep={handlePreviousOuterStep}
    />
  );
}

export default App;

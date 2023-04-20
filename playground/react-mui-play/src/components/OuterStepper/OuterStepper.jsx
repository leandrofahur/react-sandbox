import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, Box, Stepper, Step, StepLabel } from "@mui/material";

import styles from "./OuterStepper.module.scss";
import InnerStepper from "../InnerStepper/InnerStepper";

function OuterStepper(props) {
  const { steps } = props;

  const [activeOuterStep, setActiveOuterStep] = useState(0);
  const [activeInnerStep, setActiveInnerStep] = useState(0);

  const handleNext = () => {
    if (activeInnerStep === steps[activeOuterStep].innerSteps.length - 1) {
      // Last inner step, move to next outer step
      setActiveOuterStep((prevActiveStep) => prevActiveStep + 1);
      setActiveInnerStep(0);
    } else {
      // Move to next inner step
      setActiveInnerStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeInnerStep === 0) {
      // First inner step, move to previous outer step
      setActiveOuterStep((prevActiveStep) => prevActiveStep - 1);
      setActiveInnerStep(steps[prevActiveStep].innerSteps.length - 1);
    } else {
      // Move to previous inner step
      setActiveInnerStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const isLastOuterStep = activeOuterStep === steps.length - 1;
  const isLastInnerStep =
    activeInnerStep === steps[activeOuterStep].innerSteps.length - 1;
  const isFirstOuterStep = activeOuterStep === 0;
  const isFirstInnerStep = activeInnerStep === 0;

  return (
    <Box className={styles.boxStepStyling}>
      <Stepper activeStep={activeOuterStep} orientation="vertical">
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
              {step.innerSteps.length > 0 && (
                <InnerStepper
                  steps={step.innerSteps}
                  activeStep={activeInnerStep}
                  handleNext={handleNext}
                  handlePrevious={handlePrevious}
                />
              )}
            </Step>
          );
        })}
      </Stepper>
      {/* <Box className={styles.boxCtaStyling}>
        <Button
          disabled={isFirstOuterStep && isFirstInnerStep}
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={isLastOuterStep && isLastInnerStep}
        >
          {isLastOuterStep && isLastInnerStep ? "Finish" : "Next"}
        </Button>
      </Box> */}
    </Box>
  );
}

OuterStepper.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default OuterStepper;

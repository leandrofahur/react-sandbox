import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, Box, Stepper, Step, StepLabel } from "@mui/material";

import styles from "./OuterStepper.module.scss";

function OuterStepper(props) {
  const { steps } = props;
  const [activeStep, setActiveStep] = useState(0);

  const isLastStep = activeStep === steps.length - 1;
  const isFirstStep = activeStep === 0;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box className={styles.boxStepStyling}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          // console.log({ stepProps, labelProps });

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box className={styles.boxCtaStyling}>
        <Button disabled={isFirstStep} onClick={handlePrevious}>
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ ml: 1 }}
          disabled={isLastStep}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

OuterStepper.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default OuterStepper;

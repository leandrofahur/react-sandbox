import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, Box, Stepper, Step, StepLabel } from "@mui/material";

import styles from "./InnerStepper.module.scss";

function InnerStepper(props) {
  const { steps, activeStep } = props;

  // const isLastStep = activeStep === steps.length - 1;
  // const isFirstStep = activeStep === 0;

  return (
    <Box sx={{ paddingLeft: "50px" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={step.label} {...stepProps}>
              <StepLabel {...labelProps}>{step.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {/* <Box className={styles.boxCtaStyling}>
        <Button disabled={isFirstStep} onClick={handlePrevious}>
          Previous
        </Button>
        <Button variant="contained" onClick={handleNext} disabled={isLastStep}>
          {isLastStep ? "Finish" : "Next"}
        </Button>
      </Box> */}
    </Box>
  );
}

InnerStepper.propTypes = {
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
  // handleNext: PropTypes.func.isRequired,
  // handlePrevious: PropTypes.func.isRequired,
};

export default InnerStepper;

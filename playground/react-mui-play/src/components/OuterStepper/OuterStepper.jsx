import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, Box, Stepper, Step, StepLabel } from "@mui/material";

import styles from "./OuterStepper.module.scss";

function OuterStepper(props) {
  const {
    outerSteps,
    activeStep,
    handleNextOuterStep,
    handlePreviousOuterStep,
  } = props;

  const isLastStep = activeStep === outerSteps.length - 1;
  const isFirstStep = activeStep === 0;

  return (
    <Box className={styles.boxStepStyling}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {outerSteps.map((outerStep, index) => {
          const stepProps = {};
          const labelProps = {};

          console.log(outerStep);

          // console.log({ stepProps, labelProps });

          return (
            <Step key={outerStep.label} {...stepProps}>
              <StepLabel {...labelProps}>{outerStep.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box className={styles.boxCtaStyling}>
        <Button disabled={isFirstStep} onClick={handlePreviousOuterStep}>
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNextOuterStep}
          disabled={isLastStep}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

OuterStepper.propTypes = {
  outerSteps: PropTypes.array.isRequired,
  handleNextOuterStep: PropTypes.func.isRequired,
  handlePreviousOuterStep: PropTypes.func.isRequired,
};

export default OuterStepper;

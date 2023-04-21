import React, { useState } from "react";
import PropTypes from "prop-types";

import { Box, Stepper, Step, StepLabel } from "@mui/material";

import styles from "./InnerStepper.module.scss";

function InnerStepper(props) {
  const { steps, activeStep } = props;

  return (
    <Box sx={{ paddingLeft: "50px" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

InnerStepper.propTypes = {
  steps: PropTypes.array.isRequired,
  activeStep: PropTypes.number.isRequired,
};

export default InnerStepper;

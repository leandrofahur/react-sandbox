import React from "react";
import PropTypes from "prop-types";

import { Box, Stepper, Step, StepLabel } from "@mui/material";

import { checkIfNAN } from "../../../state/stepperSlice";

import styles from "./InnerStepper.module.scss";

function InnerStepper(props) {
  const { steps, activeStep } = props;

  return (
    <Box className={styles.boxStepStyling}>
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
  steps: PropTypes.array,
  activeStep: PropTypes.number.isRequired,
};

InnerStepper.defaultProps = {
  steps: [],
};

export default InnerStepper;

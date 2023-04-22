import React from "react";
import PropTypes from "prop-types";

import { Box, Stepper, Step, StepLabel } from "@mui/material";

import { useSelector } from "react-redux";
import InnerStepper from "../InnerStepper/InnerStepper";

import styles from "./OuterStepper.module.scss";

function OuterStepper(props) {
  const { steps } = props;

  const { activeOuterStep, activeInnerStep } = useSelector(
    (state) => state.stepper
  );

  return (
    <Box className={styles.boxStepStyling}>
      <Stepper
        activeStep={activeOuterStep}
        alternativeLabel
        orientation="vertical"
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
            <InnerStepper
              steps={steps[activeOuterStep].innerSteps}
              activeStep={activeInnerStep}
            />
          </Step>
        ))}
        {/* <InnerStepper
          steps={steps[activeOuterStep].innerSteps}
          activeStep={activeInnerStep}
        /> */}
      </Stepper>
    </Box>
  );
}

OuterStepper.propTypes = {
  steps: PropTypes.array,
};

OuterStepper.defaultProps = {
  steps: [],
};

export default OuterStepper;

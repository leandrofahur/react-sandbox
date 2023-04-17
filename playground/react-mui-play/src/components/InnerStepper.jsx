import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import styles from "./InnerStepper.module.scss";

function InnerStepper(props) {
  const { steps, activeStep } = props;

  const connectorClasses = {
    line: styles.stepConnectorLine,
    active: styles.activeStep,
    completed: styles.completedStep,
    disabled: styles.disabledStep,
  };

  return (
    <Stepper
      activeStep={activeStep}
      orientation="vertical"
      connector={null}
      classes={{ root: styles.innerStepper }}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

export default InnerStepper;

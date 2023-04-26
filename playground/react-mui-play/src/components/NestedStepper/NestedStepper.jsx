import React, { useState } from "react";
import PropTypes from "prop-types";

import { Stepper, Step, StepLabel, StepContent } from "@mui/material";
import { render } from "node-sass";

export function NestedStepper(props) {
  const { steps } = props;
  const [activeStep, setActiveStep] = useState(0);

  const renderStep = (step, index) => {
    const haschildren = step.children && step.children.length > 0;

    return (
      <Step key={index} active={activeStep === index} completed={false}>
        <StepLabel>{step.label}</StepLabel>
        <StepContent>
          {haschildren && (
            <Stepper orientation="vertical" activeStep={-1}>
              {step.children.map(renderStep)}
            </Stepper>
          )}
        </StepContent>
      </Step>
    );
  };

  return <Stepper>{steps.map(renderStep)}</Stepper>;
}

NestedStepper.propTypes = {
  states: PropTypes.array.isRequired,
};

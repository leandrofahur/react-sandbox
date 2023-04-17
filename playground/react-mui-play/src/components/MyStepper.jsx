import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import InnerStepper from "./InnerStepper";
import styles from "./MyStepper.module.scss";

function MyStepper(props) {
  const { steps, activeStep } = props;

  const renderInnerStepper = (innerSteps) => {
    return (
      <InnerStepper
        steps={innerSteps.map((step) => step.label)}
        activeStep={0}
      />
    );
  };

  return (
    <Stepper activeStep={activeStep} orientation="vertical" connector={null}>
      {steps.map((outerStep, outerIndex) => {
        const isLastOuterStep = outerIndex === steps.length - 1;
        const innerSteps = outerStep.innerSteps || [];
        return (
          <React.Fragment key={outerStep.label}>
            <Step>
              <StepLabel>{outerStep.label}</StepLabel>
            </Step>
            {innerSteps.length > 0 && (
              <Step>{renderInnerStepper(innerSteps)}</Step>
            )}
            {!isLastOuterStep && (
              <Step classes={{ connector: styles.stepConnector }}>
                <div className={styles.stepConnectorLine} />
              </Step>
            )}
          </React.Fragment>
        );
      })}
    </Stepper>
  );
}

export default MyStepper;

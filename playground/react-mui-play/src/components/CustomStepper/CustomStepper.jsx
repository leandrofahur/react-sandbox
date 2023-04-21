import React from "react";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  nextOuterStep,
  prevOuterStep,
  nextInnerStep,
  prevInnerStep,
} from "../../state/stepperSlice";

import styles from "../MyStepper/OuterStepper/OuterStepper.module.scss";

function InnerStepper({ steps, activeStep }) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel>{step.label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

function CustomStepper({ steps }) {
  const dispatch = useDispatch();
  const { activeOuterStep, activeInnerStep } = useSelector(
    (state) => state.stepper
  );

  const handleNext = () => {
    if (activeInnerStep === steps[activeOuterStep].innerSteps.length - 1) {
      dispatch(nextOuterStep(steps[activeOuterStep].innerSteps.length));
      dispatch(nextInnerStep(steps[activeOuterStep].innerSteps.length));
    } else {
      dispatch(nextInnerStep(steps[activeOuterStep].innerSteps.length));
    }
  };

  const handleBack = () => {
    if (activeInnerStep === 0) {
      dispatch(prevOuterStep(steps[activeOuterStep - 1].innerSteps.length - 1));
      dispatch(prevInnerStep(steps[activeOuterStep - 1].innerSteps.length - 1));
    } else {
      dispatch(prevInnerStep());
    }
  };

  const isLastOuterStep = activeOuterStep === steps.length - 1;
  const isLastInnerStep =
    activeInnerStep === steps[activeOuterStep].innerSteps.length - 1;
  const isFirstOuterStep = activeOuterStep === 0;
  const isFirstInnerStep = activeInnerStep === 0;

  return (
    <Box className={styles.boxStyling}>
      <Stepper activeStep={activeOuterStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <InnerStepper
        steps={steps[activeOuterStep].innerSteps}
        activeStep={activeInnerStep}
      />
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          disabled={isFirstOuterStep && isFirstInnerStep}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={isLastOuterStep && isLastInnerStep}
        >
          {isLastOuterStep && isLastInnerStep ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  );
}

export default CustomStepper;

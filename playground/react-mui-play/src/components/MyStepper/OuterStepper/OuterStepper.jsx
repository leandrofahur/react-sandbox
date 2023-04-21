import React from "react";
import PropTypes from "prop-types";

import { Button, Box, Stepper, Step, StepLabel } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import {
  nextOuterStep,
  prevOuterStep,
  nextInnerStep,
  prevInnerStep,
} from "../../../state/stepperSlice";
import InnerStepper from "../InnerStepper/InnerStepper";

import styles from "./OuterStepper.module.scss";

function OuterStepper(props) {
  const { steps } = props;

  const dispatch = useDispatch();
  const { activeOuterStep, activeInnerStep } = useSelector(
    (state) => state.stepper
  );

  const isLastOuterStep = activeOuterStep === steps.length - 1;
  const isLastInnerStep =
    activeInnerStep === steps[activeOuterStep].innerSteps.length - 1;
  const isFirstOuterStep = activeOuterStep === 0;
  const isFirstInnerStep = activeInnerStep === 0;

  // console.log({ activeOuterStep, activeInnerStep });

  const handleNext = () => {
    const currentInnerStepsLength = steps[activeOuterStep].innerSteps.length;
    if (activeInnerStep === currentInnerStepsLength - 1) {
      dispatch(nextOuterStep({ innerStepsLength: currentInnerStepsLength }));
      dispatch(nextInnerStep({ innerStepsLength: currentInnerStepsLength }));
    } else {
      dispatch(nextInnerStep({ innerStepsLength: currentInnerStepsLength }));
    }
  };

  const handlePrevious = () => {
    if (activeInnerStep === 0) {
      dispatch(prevOuterStep(steps[activeOuterStep - 1].innerSteps.length - 1));
      dispatch(prevInnerStep());
    } else {
      dispatch(prevInnerStep());
    }
  };

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
          </Step>
        ))}
        <InnerStepper
          steps={steps[activeOuterStep].innerSteps}
          activeStep={activeInnerStep}
        />
      </Stepper>
      <Box className={styles.boxCtaStyling}>
        <Button
          disabled={isFirstOuterStep && isFirstInnerStep}
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={isLastOuterStep && isLastInnerStep}
        >
          {isLastOuterStep ? "Finish" : "Next"}
        </Button>
      </Box>
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

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

import styles from "./OuterStepper.module.scss";
import InnerStepper from "../InnerStepper/InnerStepper";

function OuterStepper(props) {
  const { steps } = props;

  const dispatch = useDispatch();
  const activeOuterStep = useSelector((state) => state.stepper.activeOuterStep);
  const activeInnerStep = useSelector((state) => state.stepper.activeInnerStep);

  const handleNext = () => {
    if (activeInnerStep === steps[activeOuterStep].innerSteps.length - 1) {
      // Last inner step, move to next outer step
      dispatch(
        nextOuterStep({
          innerStepsLength: steps[activeOuterStep + 1].innerSteps.length,
        })
      );
      dispatch(prevInnerStep());
    } else {
      // Move to next inner step
      dispatch(
        nextInnerStep({
          innerStepsLength: steps[activeOuterStep].innerSteps.length,
        })
      );
    }
  };

  const handlePrevious = () => {
    if (activeInnerStep === 0) {
      // First inner step, move to previous outer step
      dispatch(
        prevOuterStep({
          prevInnerStepsLength: steps[activeOuterStep - 1].innerSteps.length,
        })
      );
      dispatch(
        nextInnerStep({
          innerStepsLength: steps[activeOuterStep - 1].innerSteps.length,
        })
      );
    } else {
      // Move to previous inner step
      dispatch(prevInnerStep());
    }
  };

  const isLastOuterStep = activeOuterStep === steps.length - 1;
  const isLastInnerStep =
    activeInnerStep === steps[activeOuterStep].innerSteps.length - 1;
  const isFirstOuterStep = activeOuterStep === 0;
  const isFirstInnerStep = activeInnerStep === 0;

  return (
    <Box className={styles.boxStepStyling}>
      <Stepper activeStep={activeOuterStep} orientation="vertical">
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <>
              <Step key={step.label} {...stepProps}>
                <StepLabel {...labelProps}>{step.label}</StepLabel>
                {/* {step.innerSteps.length > 0 && ( */}
                <InnerStepper
                  steps={step.innerSteps}
                  activeStep={activeInnerStep}
                  handleNext={handleNext}
                  handlePrevious={handlePrevious}
                />
                {/* )} */}
              </Step>
            </>
          );
        })}
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
  steps: PropTypes.array.isRequired,
};

export default OuterStepper;

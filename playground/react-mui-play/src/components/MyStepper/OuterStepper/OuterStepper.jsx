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

  const handleNextOuterStep = () => {
    const innerStepsLength = steps[activeOuterStep].innerSteps.length;
    dispatch(nextOuterStep({ innerStepsLength }));
  };

  const handlePreviousOuterStep = () => {
    const prevInnerStepsLength = steps[activeOuterStep - 1].innerSteps.length;
    dispatch(prevOuterStep({ prevInnerStepsLength }));
  };

  const handleNextInnerStep = () => {
    const innerStepsLength = steps[activeOuterStep].innerSteps.length;
    dispatch(nextInnerStep({ innerStepsLength }));
  };

  const handlePreviousInnerStep = () => {
    dispatch(prevInnerStep());
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
                {step.innerSteps.length > 0 && (
                  <InnerStepper
                    steps={step.innerSteps}
                    activeStep={activeInnerStep}
                    handleNext={handleNextInnerStep}
                    handlePrevious={handlePreviousInnerStep}
                  />
                )}
              </Step>
            </>
          );
        })}
      </Stepper>
      <Box className={styles.boxCtaStyling}>
        <Button
          disabled={isFirstOuterStep && isFirstInnerStep}
          onClick={handlePreviousOuterStep}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={handleNextOuterStep}
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

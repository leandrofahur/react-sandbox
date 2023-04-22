import React from "react";

import { Button, Box, Stack } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import {
  nextOuterStep,
  prevOuterStep,
  nextInnerStep,
  prevInnerStep,
  setActiveOuterStep,
  setActiveInnerStep,
} from "./state/stepperSlice";

import OuterStepper from "./components/MyStepper/OuterStepper/OuterStepper";
import StepperProgress from "./components/StepperProgress/StepperProgress";

import { steps } from "./constants/steps";
import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch();
  const { activeOuterStep, activeInnerStep } = useSelector(
    (state) => state.stepper
  );

  const isLastOuterStep = activeOuterStep === steps.length - 1;
  const isLastInnerStep =
    activeInnerStep === steps[activeOuterStep].innerSteps.length - 1;
  const isFirstOuterStep = activeOuterStep === 0;
  const isFirstInnerStep = activeInnerStep === 0;

  console.log({ isLastOuterStep, isLastInnerStep });

  const handleNext = () => {
    const currentInnerStepsLength = steps[activeOuterStep].innerSteps.length;
    if (activeInnerStep === currentInnerStepsLength - 1) {
      dispatch(nextOuterStep({ innerStepsLength: currentInnerStepsLength }));
      dispatch(setActiveInnerStep(0));
    } else {
      dispatch(nextInnerStep({ innerStepsLength: currentInnerStepsLength }));
    }
  };

  const handlePrevious = () => {
    if (activeInnerStep === 0) {
      const prevOuterStepIndex = activeOuterStep - 1;
      dispatch(prevOuterStep(prevOuterStepIndex));
      const lastInnerStepIndex =
        steps[prevOuterStepIndex].innerSteps.length - 1;
      dispatch(prevInnerStep(lastInnerStepIndex));
      dispatch(setActiveOuterStep(prevOuterStepIndex));
      dispatch(setActiveInnerStep(lastInnerStepIndex));
    } else if (typeof activeInnerStep === "number" && activeInnerStep >= 0) {
      dispatch(prevInnerStep());
      dispatch(setActiveInnerStep(activeInnerStep - 1));
    }
  };

  return (
    <Stack direction="column" spacing={10}>
      <OuterStepper steps={steps} />
      <StepperProgress step={steps[activeOuterStep]} />
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
    </Stack>
  );
}

export default App;

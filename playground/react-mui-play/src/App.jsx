import React from "react";

import { Stack } from "@mui/material";

import OuterStepper from "./components/MyStepper/OuterStepper/OuterStepper";
import StepperProgress from "./components/StepperProgress/StepperProgress";

import { steps } from "./constants/steps";
import styles from "./App.module.scss";

function App() {
  return (
    <Stack direction="column" spacing={10}>
      <OuterStepper steps={steps} />
      <StepperProgress step={steps[0].label} />
    </Stack>
  );
}

export default App;

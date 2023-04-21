import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import OuterStepper from "./components/MyStepper/OuterStepper/OuterStepper";

import styles from "./App.module.scss";

const steps = [
  {
    label: "First item",
    innerSteps: [
      {
        label: "Subitem 1",
      },
      {
        label: "Subitem 2",
      },
      {
        label: "Subitem 3",
      },
      {
        label: "Subitem 4",
      },
    ],
  },
  {
    label: "Second item",
    innerSteps: [
      {
        label: "Subitem 1",
      },
      {
        label: "Subitem 2",
      },
      {
        label: "Subitem 3",
      },
    ],
  },
  {
    label: "Third item",
    innerSteps: [
      {
        label: "Subitem 1",
      },
      {
        label: "Subitem 2",
      },
    ],
  },
];

function App() {
  return (
    <>
      <OuterStepper steps={steps} />
    </>
  );
}

export default App;

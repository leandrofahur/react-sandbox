import React from "react";
import OuterStepper from "./components/OuterStepper/OuterStepper";
import "./App.scss";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

function App() {
  return <OuterStepper steps={steps} />;
}

export default App;

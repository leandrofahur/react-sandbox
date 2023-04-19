import React from "react";
import "./App.scss";

const steps = [
  {
    label: "Step 1",
    innerSteps: [{ label: "Step 1.1" }, { label: "Step 1.2" }],
  },
  {
    label: "Step 2",
    innerSteps: [{ label: "Step 2.1" }, { label: "Step 2.2" }],
  },
  {
    label: "Step 3",
    innerSteps: [{ label: "Step 3.1" }, { label: "Step 3.2" }],
  },
];
function App() {
  return <div className="App"></div>;
}

export default App;

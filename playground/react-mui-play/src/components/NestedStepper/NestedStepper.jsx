import React from "react";
import PropTypes from "prop-types";

import { Stepper, Step, StepLabel, StepContent } from "@mui/material";

export function NestedStepper(props) {
  const { states } = props;
  return <div />;
}

NestedStepper.propTypes = {
  states: PropTypes.array.isRequired,
};

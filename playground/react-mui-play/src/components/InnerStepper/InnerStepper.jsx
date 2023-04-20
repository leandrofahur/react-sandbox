import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, Box, Stepper, Step, StepLabel } from "@mui/material";

import styles from "./InnerStepper.module.scss";

function InnerStepper(props) {
  return <div />;
}

InnerStepper.propTypes = {
  steps: PropTypes.array,
};

InnerStepper.defaultProps = {
  steps: [],
};

export default InnerStepper;

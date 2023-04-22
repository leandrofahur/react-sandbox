import React from "react";
import PropTypes from "prop-types";

import { Box, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import styles from "./StepperProgress.module.scss";

function StepperProgress(props) {
  const { step } = props;

  const { activeInnerStep } = useSelector((state) => state.stepper);
  // console.log(step.innerSteps[activeInnerStep].label);

  return (
    <Box className={styles.boxStepStyling}>
      <Paper variant="outlined" square className={styles.paperStepStyling}>
        <Typography fontSize={18} color="white">
          {step.label}
        </Typography>
        <Typography fontSize={14} color="white">
          {step.innerSteps[activeInnerStep].label}
        </Typography>
      </Paper>
    </Box>
  );
}

StepperProgress.propTypes = {
  step: PropTypes.object.isRequired,
};

export default StepperProgress;

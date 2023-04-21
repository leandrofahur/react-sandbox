import React from "react";
import PropTypes from "prop-types";

import { Box, Paper, Typography } from "@mui/material";

import styles from "./StepperProgress.module.scss";

function StepperProgress(props) {
  const { step } = props;

  return (
    <Box className={styles.boxStepStyling}>
      <Paper variant="outlined" square className={styles.paperStepStyling}>
        <Typography fontSize={24} color="white">
          {step}
        </Typography>
      </Paper>
    </Box>
  );
}

StepperProgress.propTypes = {
  step: PropTypes.string,
};

export default StepperProgress;

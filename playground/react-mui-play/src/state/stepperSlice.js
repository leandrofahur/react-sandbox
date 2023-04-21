import { createSlice } from "@reduxjs/toolkit";

export const stepperSlice = createSlice({
  name: "stepper",
  initialState: {
    activeOuterStep: 0,
    activeInnerStep: 0,
  },
  reducers: {
    nextOuterStep: (state, action) => {
      const { innerStepsLength } = action.payload;
      state.activeOuterStep =
        state.activeInnerStep === innerStepsLength - 1
          ? state.activeOuterStep + 1
          : state.activeOuterStep;
      state.activeInnerStep =
        state.activeInnerStep === innerStepsLength - 1
          ? 0
          : state.activeInnerStep + 1;
    },
    prevOuterStep: (state, action) => {
      const { prevInnerStepsLength } = action.payload;
      state.activeOuterStep =
        state.activeInnerStep === 0
          ? state.activeOuterStep - 1
          : state.activeOuterStep;
      state.activeInnerStep =
        state.activeInnerStep === 0
          ? prevInnerStepsLength - 1
          : state.activeInnerStep - 1;
    },
    nextInnerStep: (state, action) => {
      const { innerStepsLength } = action.payload;
      state.activeInnerStep =
        state.activeInnerStep === innerStepsLength - 1
          ? state.activeInnerStep
          : state.activeInnerStep + 1;
    },
    prevInnerStep: (state) => {
      state.activeInnerStep =
        state.activeInnerStep === 0
          ? state.activeInnerStep
          : state.activeInnerStep - 1;
    },
    checkIfNAN: (state, action) => {
      const { activeOuterStepLength } = action.payload;
      if (
        isNaN(state.activeOuterStep) ||
        state.activeOuterStep < 0 ||
        state.activeOuterStep > activeOuterStepLength - 1
      ) {
        state.activeOuterStep = 0;
      }
    },
  },
});

export const {
  nextOuterStep,
  prevOuterStep,
  nextInnerStep,
  prevInnerStep,
  checkIfNAN,
} = stepperSlice.actions;
export default stepperSlice.reducer;

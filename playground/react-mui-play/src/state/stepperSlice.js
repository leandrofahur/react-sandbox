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
      const { activeInnerStep } = action.payload;
      if (
        isNaN(state.activeInnerStep) ||
        state.activeInnerStep < 0 ||
        state.activeInnerStep > activeInnerStep - 1
      ) {
        state.activeInnerStep = 0;
      }
    },
    setActiveOuterStep: (state, action) => {
      state.activeOuterStep = action.payload;
    },
    setActiveInnerStep: (state, action) => {
      state.activeInnerStep = action.payload;
    },
  },
});

export const {
  nextOuterStep,
  prevOuterStep,
  nextInnerStep,
  prevInnerStep,
  checkIfNAN,
  setActiveOuterStep,
  setActiveInnerStep,
} = stepperSlice.actions;
export default stepperSlice.reducer;

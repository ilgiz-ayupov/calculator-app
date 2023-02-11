import { createSlice } from "@reduxjs/toolkit";

// Types
import type { RootState } from "store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { KeyNumber, KeyOperator } from "types";

// Slice
export const exampleSlice = createSlice({
  name: "example",
  initialState: "",
  reducers: {
    addNumber(state, action: PayloadAction<KeyNumber>) {
      return state + action.payload;
    },

    addOperator(state, action: PayloadAction<KeyOperator>) {
      return state + ` ${action.payload} `;
    },

    deleteLastChar(state) {
      return state.slice(0, -1);
    },

    clearExample() {
      return "";
    },

    calcResult(state) {
      // eslint-disable-next-line no-eval
      return eval(state);
    },
  },
});

// Actions
export const {
  addNumber,
  addOperator,
  deleteLastChar,
  clearExample,
  calcResult,
} = exampleSlice.actions;

// Selectors
export const selectExample = (state: RootState) => state.example;

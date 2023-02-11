import { createSlice } from "@reduxjs/toolkit";

// Types
import type { RootState } from "store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { KeyNumber, KeyOperator } from "types";

// Utils
import { isDigit } from "utils";

// Slice
export const exampleSlice = createSlice({
  name: "example",
  initialState: "0",
  reducers: {
    addNumber(state, action: PayloadAction<KeyNumber>) {
      if (state === "0" && action.payload !== ".") {
        return action.payload;
      }

      let lastChar = state.trim()?.at(-1)!;
      if (action.payload === ".") {
        return isDigit(lastChar) ? state + "." : state;
      }

      return state + action.payload;
    },

    addOperator(state, action: PayloadAction<KeyOperator>) {
      const lastChar = state.trim()?.at(-1)!;
      if (state.length && isDigit(lastChar)) {
        return state + ` ${action.payload} `;
      }
      return state;
    },

    deleteLastChar(state) {
      return state.trim().slice(0, -1);
    },

    clearExample() {
      return "";
    },

    calcResult(state) {
      const formattedState = state.replace("X", "*");
      // eslint-disable-next-line no-eval
      return String(eval(formattedState));
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

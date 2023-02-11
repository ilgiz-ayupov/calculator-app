import { configureStore } from "@reduxjs/toolkit";

// Slices
import { exampleSlice } from "./example-slice";

export const store = configureStore({
  reducer: {
    example: exampleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

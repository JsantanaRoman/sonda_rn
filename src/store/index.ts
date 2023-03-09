import { configureStore } from "@reduxjs/toolkit";
import playAllReducer from "./playAll";

export const store = configureStore({
  reducer: {
    playAll: playAllReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

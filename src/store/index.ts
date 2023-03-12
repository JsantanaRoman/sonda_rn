import { configureStore } from "@reduxjs/toolkit";
import playAllReducer from "./slices/playAll";
import membershipSelectedReducer from "./slices/membershipSelected";

export const store = configureStore({
  reducer: {
    playAll: playAllReducer,
    membershipSelected: membershipSelectedReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const playAllSlice = createSlice({
  name: "playAll",
  initialState: {
    playAll: false,
  },
  reducers: {
    setPlayAll(state, action: PayloadAction<boolean>) {
      state.playAll = action.payload;
    },
  },
});

export const { setPlayAll } = playAllSlice.actions;
export default playAllSlice.reducer;

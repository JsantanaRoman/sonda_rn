import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const membershipSelected = createSlice({
  name: "membershipSelected",
  initialState: {
    membershipSelected: "Supporter",
  },
  reducers: {
    setMembershipSelected(state, action: PayloadAction<string>) {
      state.membershipSelected = action.payload;
    },
  },
});

export const { setMembershipSelected } = membershipSelected.actions;
export default membershipSelected.reducer;

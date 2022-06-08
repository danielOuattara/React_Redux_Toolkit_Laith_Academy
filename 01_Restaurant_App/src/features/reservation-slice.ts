import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
};

export const reservationSlice = createSlice({
  name: "resevations",
  initialState,
  reducers: {
    // add(state, action) {
    //   state.customers.push(action.payload);
    // },
  },
});

export const addAction = reservationSlice.actions;
export default reservationSlice.reducer;

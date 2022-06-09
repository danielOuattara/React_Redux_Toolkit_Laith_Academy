import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  customers: string[];
}

const initialState: ReservationState = {
  customers: [],
};

export const reservationSlice = createSlice({
  name: "resevations",
  initialState,
  reducers: {
    addReseveration(state, action: PayloadAction<string>) {
      state.customers.push(action.payload);
    },
    removeReseveration(state, action: PayloadAction<string>) {
      console.log("action.payload = ", action.payload);
      state.customers = state.customers.filter((customer) => customer !== action.payload);
    },
  },
});

export const reservationActions = reservationSlice.actions;
export default reservationSlice.reducer;

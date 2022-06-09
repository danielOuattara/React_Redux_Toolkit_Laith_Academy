import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
}

interface ReservationState {
  customers: Customer[];
}

const initialState: ReservationState = {
  customers: [],
};

export const reservationSlice = createSlice({
  name: "resevations",
  initialState,
  reducers: {
    addReseveration(state, action: PayloadAction<Customer>) {
      state.customers.push({
        id: action.payload.id,
        name: action.payload.name,
      });
    },
    removeReseveration(state, action: PayloadAction<string>) {
      state.customers = state.customers.filter(
        (customer) => customer.id !== action.payload
      );
    },
  },
});

export const reservationActions = reservationSlice.actions;
export default reservationSlice.reducer;

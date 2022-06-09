import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
  mealsOrdered: string[];
}

interface OrderingState {
  orders: Customer[];
}

const initialState: OrderingState = {
  orders: [],
};

export const orderingListSlice = createSlice({
  name: "ordering-list",
  initialState,
  reducers: {
    addCustomerForOrdering(state, action: PayloadAction<Customer>) {
      state.orders.push({
        id: action.payload.id,
        name: action.payload.name,
        mealsOrdered: [],
      });
    },

    removeCustomerForOrdering(state, action: PayloadAction<Customer>) {
      state.orders = state.orders.filter(
        (item) => item.id !== action.payload.id
      );
    },

    // orderMeal(state, action: PayloadAction<string>) {
    //   const itemToUpdate = state.find(
    //     (item) => item.id === action.payload.id
    //   );
    // },
  },
});

export const orderingActions = orderingListSlice.actions;
export default orderingListSlice.reducer;

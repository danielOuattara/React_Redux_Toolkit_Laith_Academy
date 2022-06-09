import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../features/reservation-slice";
import orderingListReducer from "../features/ordering-slice";

export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    ordersList: orderingListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import React from "react";
import { useDispatch } from "react-redux";
import { reservationActions } from "./../features/reservation-slice";
import { orderingActions } from "./../features/ordering-slice";

interface ReservationCardTypes {
  name: string;
  id: string;
}

export default function ReservationCard({ name, id }: ReservationCardTypes) {
  const dispatch = useDispatch();

  const removeReservation = () => {
    dispatch(reservationActions.removeReseveration(id));
  };

  const handleCustomerReadyToOrder = () => {
    // console.log("Hello, welcome", name, id)
    dispatch(
      orderingActions.addCustomerForOrdering({ id, name, mealsOrdered: [] })
    );
  };

  return (
    <div className="reservation-card-container">
      {name}
      <button
        className="command-btn btn"
        type="button"
        onClick={handleCustomerReadyToOrder}
      >
        &gt;&gt;
      </button>
      <button
        className="remove-btn btn"
        type="button"
        onClick={removeReservation}
      >
        X
      </button>
    </div>
  );
}

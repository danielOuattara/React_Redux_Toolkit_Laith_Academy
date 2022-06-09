import React from "react";
import { useDispatch } from "react-redux";
import { reservationActions } from "./../features/reservation-slice";
interface ReservationCardTypes {
  name: string;
}

export default function ReservationCard({ name }: ReservationCardTypes) {
  const dispatch = useDispatch();

  const removeReservation = () => {
    dispatch(reservationActions.removeReseveration(name));
  };

  return (
    <div className="reservation-card-container" onClick={removeReservation}>
      {name}
    </div>
  );
}

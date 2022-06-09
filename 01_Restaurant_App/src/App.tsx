import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { reservationActions } from "./features/reservation-slice";

function App() {
  const dispatch = useDispatch();
  const { customers } = useSelector((state: RootState) => state.reservations);

  const [customer, setCustomer] = useState("");

  const handleAddReservation = () => {
    if (customer) {
      dispatch(reservationActions.addReseveration(customer));
      setCustomer("");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {customers.map((name) => (
                <ReservationCard
                  key={name}
                  name={name}
                />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              type="text"
              placeholder="customer name"
              onChange={(event) => setCustomer(event.target.value)}
              value={customer}
            />
            <button type="button" onClick={handleAddReservation}>
              Add
            </button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input type="text" placeholder="add command" />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

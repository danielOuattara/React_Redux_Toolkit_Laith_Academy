import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerOrders from "./components/CustomerOrders";
import ReservationCard from "./components/ReservationCard";
import { reservationActions } from "./features/reservation-slice";

function App() {
  const dispatch = useDispatch();
  const { customers } = useSelector((state: RootState) => state.reservations);
  const { orders } = useSelector((state: RootState) => state.ordersList);

  const [customerName, setCustomerName] = useState("");
  const [customerOrdering, setCustomerOrdering] = useState([]);

  const handleAddReservation = () => {
    if (customerName) {
      const customer = {
        id: Date.now().toString(),
        name: customerName,
      };
      dispatch(reservationActions.addReseveration(customer));
      setCustomerName("");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {customers.map((customer) => (
                <ReservationCard key={customer.id} {...customer} />
              ))}
            </div>
          </div>
          {/*----------------------------------------*/}
          <div className="reservation-input-container">
            <input
              type="text"
              placeholder="customer name"
              onChange={(event) => setCustomerName(event.target.value)}
              value={customerName}
            />
            <button type="button" onClick={handleAddReservation}>
              Add
            </button>
          </div>
        </div>

        <div className="customer-food-container">
          {orders.map((order) => {
            return <CustomerOrders key={order.id} {...order}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

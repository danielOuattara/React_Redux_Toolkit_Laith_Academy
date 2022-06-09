import React from "react";

interface CostumerOrderTypes {
  name: string;
  id: string;
}

export default function CustomerOrders({ name, id }: CostumerOrderTypes) {
  return (
    <div className="customer-food-card-container">
      <div className="customer-orders-header">
        <p>{name} </p>
        <button>remove customer</button>
      </div>
      <div className="customer-foods-container">
        <div className="customer-food"></div>
        <div className="customer-food-input-container">
          <input type="text" placeholder="add command" />
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

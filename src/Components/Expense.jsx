import React from "react";
import './Expense.css'
export default function Expense() {
  // lets create dummy data
  const expenseDate = new Date(2022, 4, 27);
  const title = 'Car Tire';
  const amount= 290.85;
  return (
    <div className="expenseContainer">
      <div className="dateCard">{expenseDate.toISOString()}</div>
      <div className="details">
        <h3>{title}</h3>
        <p>${amount}</p>
      </div>
    </div>
  );
}

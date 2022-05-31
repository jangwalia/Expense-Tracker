import React from "react";
import "./Expense.css";
export default function Expense({title,amount,date}) {
  // lets create dummy data
 
  return (
   <div className="expenseDetails">
        <div className="dateCard">{date.toISOString()}</div>
        <div className="details">
          <h3>{title}</h3>
          <p>${amount}</p>
        </div>
      </div>
    
  );
}

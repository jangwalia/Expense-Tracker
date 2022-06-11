import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./Expense.css";
export default function Expense({title,amount,date}) {
  // lets create dummy data
  
  return (
  <li>
     <div className="expenseDetails">
       <ExpenseDate date={date}/>
        <div className="details">
          <h3>{title}</h3>
          <p>${amount}</p>
        </div>
      </div>
  </li>
  
  );
}

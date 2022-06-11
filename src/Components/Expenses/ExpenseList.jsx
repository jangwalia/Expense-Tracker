import React from 'react'
import Expense from './Expense'
import './ExpenseList.css'
export default function ExpenseList({newFilteredYear}) {
  if(newFilteredYear.length === 0) {
    return <h3>No Expense Found</h3>
  }
  
  return (
    <ul>
  {newFilteredYear.map(item=>
  <Expense
  key = {item.id}
  id= {item.id}
  title = {item.title}
  amount={item.amount}
  date={item.date}
  />
)
  }
    </ul>
  )
}

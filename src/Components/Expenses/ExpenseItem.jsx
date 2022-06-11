import React from 'react'
import { useState } from 'react';
import Expense from './Expense'
import FilterExpense from './FilterExpense'
export default function ExpenseItem({expenses}) {
  const [filteredYear,setFilteredYear] = useState('2019');
  const handleFilter = (year) =>{
    setFilteredYear(year)
  }
  const newFilteredYear = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expenseResult = <h3>NO Record Of Expense For This Year</h3>
  if(newFilteredYear.length > 0) {
    expenseResult = newFilteredYear.map(item=>
      <Expense
      key = {item.id}
      id= {item.id}
      title = {item.title}
      amount={item.amount}
      date={item.date}
      />
    )
  }
  return (
    <div>
      <FilterExpense selected={filteredYear}  onFilterChange = {handleFilter}/>
      {expenseResult}
    </div>
  )
}

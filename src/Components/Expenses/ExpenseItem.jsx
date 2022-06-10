import React from 'react'
import { useState } from 'react';
import Expense from './Expense'
import FilterExpense from './FilterExpense'
export default function ExpenseItem({expenses}) {
  const [filteredYear,setFilteredYear] = useState('2019');
  const handleFilter = (year) =>{
    setFilteredYear(year)
  }
  return (
    <div>
      <FilterExpense selected={filteredYear}  onFilterChange = {handleFilter}/>
      {expenses.map(item=>
        <Expense
        key = {item.id}
        id= {item.id}
        title = {item.title}
        amount={item.amount}
        date={item.date}
        />
      )}
    </div>
  )
}

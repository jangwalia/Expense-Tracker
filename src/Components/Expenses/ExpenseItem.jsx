import React from 'react'
import { useState } from 'react';
import ExpenseList from './ExpenseList';
import FilterExpense from './FilterExpense'
export default function ExpenseItem({expenses}) {
  const [filteredYear,setFilteredYear] = useState('2019');
  const handleFilter = (year) =>{
    setFilteredYear(year)
  }
  const newFilteredYear = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

 
  return (
    <div>
      <FilterExpense selected={filteredYear}  onFilterChange = {handleFilter}/>
      <ExpenseList newFilteredYear = {newFilteredYear}/>
    </div>
  )
}

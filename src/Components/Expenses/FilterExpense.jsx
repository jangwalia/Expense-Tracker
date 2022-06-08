import React, {useState} from 'react'
import './FilteredExpense.css'
export default function FilterExpense({onFilterChange,selected}) {
  const handleFilterChange = (e)=>{
    onFilterChange(e.target.value)
  }
  return (
    <div className='filteredData'>
      <label>Select Year</label>
      <select value = {selected} onChange={handleFilterChange}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  )
}

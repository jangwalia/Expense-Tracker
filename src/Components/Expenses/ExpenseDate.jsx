import React from 'react'
import Card from '../shared/Card';
import './ExpenseDate.css'
export default function ExpenseDate({date}) {
  const options = { month: 'long'};
  const month = Intl.DateTimeFormat('en-US', options).format(date);
  const day = date.toLocaleString('en-US',{day : '2-digit'});
  const year = date.getFullYear();
  return (
    
       <Card className='dateContainer'>
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
        </Card>
    
  )
}

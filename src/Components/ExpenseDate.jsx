import React from 'react'
import Card from './shared/Card';
import './ExpenseDate.css'
export default function ExpenseDate({date}) {
  const month = date.toLocaleString('en-US',{month : 'long'});
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

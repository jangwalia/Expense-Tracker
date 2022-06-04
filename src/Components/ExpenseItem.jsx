import React from 'react'
import Expense from './Expense'
export default function ExpenseItem({expense}) {
  return (
    <div>
      <Expense id={expense[0].id} title={expense[0].title} amount = {expense[0].amount} date={expense[0].date} />
      <Expense id={expense[1].id} title={expense[1].title} amount = {expense[1].amount} date={expense[1].date}/>
      <Expense id={expense[2].id} title={expense[2].title} amount = {expense[2].amount} date={expense[2].date}/>
      <Expense id={expense[3].id} title={expense[3].title} amount = {expense[3].amount} date={expense[3].date}/>
    </div>
  )
}

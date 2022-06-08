import ExpenseForm from "./ExpenseForm";
export default function Newexpense({onCreatExpense}) {
  const handleExpensedata = (expenses)=>{
    const newExpense = {
      ...expenses,
      id : Math.random() * 10
    }
    onCreatExpense(newExpense)
    
  }
  return (
    <div>
      <ExpenseForm onExpenseData = {handleExpensedata}/>
    </div>
  )
}

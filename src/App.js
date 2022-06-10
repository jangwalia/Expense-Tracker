import ExpenseItem from './Components/Expenses/ExpenseItem'
import Card from "./Components/shared/Card";
import { useState } from 'react';
import Newexpense from './Components/NewExpense/Newexpense';
import './App.css'

const dummy_data = [
  { id: 1, title: "car tire", amount: 400, date: new Date(2022, 2, 15) },
  { id: 2, title: "ymca", amount: 180, date: new Date(2022, 2, 20) },
  { id: 3, title: "computer", amount: 800, date: new Date(2022, 2, 24) },
  { id: 4, title: "karate", amount: 200, date: new Date(2022, 2, 28) }
];
function App() {
 
  const [expenses,setExpenses] = useState(dummy_data);
  const handleCreateExpense = (newExpenses)=>{
    setExpenses((prevState)=>{
      return [newExpenses,...prevState];
    });
  }
 
  return (
    <>
    <Newexpense onCreatExpense = {handleCreateExpense}/>
    <Card className="expenseContainer">
     <ExpenseItem expenses = {expenses}/>
    </Card>
    </>
    
  );
}

export default App;

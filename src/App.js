import ExpenseItem from './Components/Expenses/ExpenseItem'
import Card from "./Components/shared/Card";
import { useState } from 'react';
import Newexpense from './Components/NewExpense/Newexpense';
import './App.css'

const dummy_data = [
  { id: 0, title: "car tire", amount: 400, date: new Date(2019, 2, 15) },
  { id: 1, title: "ymca", amount: 180, date: new Date(2020, 3, 20) },
  { id: 2, title: "computer", amount: 800, date: new Date(2021, 5, 24) },
  { id: 3, title: "karate", amount: 200, date: new Date(2022, 10, 28) }
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

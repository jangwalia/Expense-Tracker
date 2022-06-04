
import ExpenseItem from "./Components/ExpenseItem";
import Card from "./Components/shared/Card";
function App() {
  const expense = [
    { id: 1, title: "car tire", amount: 400, date: new Date(2022, 2, 15) },
    { id: 2, title: "ymca", amount: 180, date: new Date(2022, 2, 20) },
    { id: 2, title: "computer", amount: 800, date: new Date(2022, 2, 24) },
    { id: 2, title: "karate", amount: 200, date: new Date(2022, 2, 28) },
  ];
  return (
    <Card className="expenseContainer">
      <ExpenseItem expense = {expense}/>
    </Card>
  );
}

export default App;

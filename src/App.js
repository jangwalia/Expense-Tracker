import Expense from "./Components/Expense";
function App() {
  const expense = [
    { id: 1, title: "car tire", amount: 400, date: new Date(2022, 2, 15) },
    { id: 2, title: "ymca", amount: 180, date: new Date(2022, 2, 20) },
    { id: 2, title: "computer", amount: 800, date: new Date(2022, 2, 24) },
    { id: 2, title: "karate", amount: 200, date: new Date(2022, 2, 28) },
  ];
  return (
    <div className="expenseContainer">
      <Expense id={expense[0].id} title={expense[0].title} amount = {expense[0].amount} date={expense[0].date} />
      <Expense id={expense[1].id} title={expense[1].title} amount = {expense[1].amount} date={expense[1].date}/>
      <Expense id={expense[2].id} title={expense[2].title} amount = {expense[2].amount} date={expense[2].date}/>
      <Expense id={expense[3].id} title={expense[3].title} amount = {expense[3].amount} date={expense[3].date}/>
    </div>
  );
}

export default App;

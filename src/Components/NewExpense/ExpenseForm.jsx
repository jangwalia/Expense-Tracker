import {useState} from 'react'
import './ExpenseForm.css'
export default function ExpenseForm() {
  const [title,setTitle] = useState('');
  const [amount,setAmount] = useState('');
  const [date,setDate] = useState('');

  const handleTitleChange = (e) =>{
    setTitle(e.target.value);
  }

  const handleAmountChange = (e) =>{
    setAmount(e.target.value);
  }

  const handleDateChange = (e) =>{
    setDate(e.target.value);
  }

  const handleSubmitForm = (e) =>{
    e.preventDefault()
    const newExpense = {
      title,
      amount,
      date
    }
    console.log(newExpense);
    setTitle('');
    setAmount('');
    setDate('');
  }
  return (
    <div className='formContainer'>
      <form onSubmit = {handleSubmitForm}>
        <div className="titleForm">
          <label>Title</label>
          <input type="text" value={title} onChange = {handleTitleChange}/>
        </div>
        <div className="amountForm">
          <label>Amount</label>
          <input type="number" value={amount} min='0.01' step='0.01' onChange={handleAmountChange}/>
        </div>
        <div className="dateForm">
          <label>Date</label>
          <input type="date" value={date} min='2022-01-01' max='2022-12-31' onChange={handleDateChange}/>
        </div>
        <div className="submitForm">
          <button type = 'submit'>Add Expense</button>
        </div>
      </form>
    </div>
  )
}

import {useState} from 'react'
import './ExpenseForm.css'
export default function ExpenseForm({onExpenseData}) {
  const [title,setTitle] = useState('');
  const [amount,setAmount] = useState('');
  const [entereddate,setEnteredDate] = useState('');
  const [showForm,setShowForm] = useState(false);

const onShowForm = () =>{
  setShowForm(true)
}

const onHideForm = () =>{
  setShowForm(false)
}

  const handleTitleChange = (e) =>{
    setTitle(e.target.value);
  }

  const handleAmountChange = (e) =>{
    setAmount(e.target.value);
  }

  const handleDateChange = (e) =>{
    setEnteredDate(e.target.value);
  }

  const handleSubmitForm = (e) =>{
    e.preventDefault()
    const newExpense = {
      title,
      amount : +amount,
      date : new Date(entereddate)
    }
    onExpenseData(newExpense);
    setTitle('');
    setAmount('');
    setEnteredDate('');
  }

  if(!showForm) {
    return <div className=' formContainer '>
      <button className='hideForm' onClick={onShowForm}>Add Expense</button>
    </div>
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
          <input type="date" value={entereddate} min='2022-01-01' max='2022-12-31' onChange={handleDateChange}/>
        </div>
        <div className="submitForm">
          <button type = 'submit'>Add Expense</button>
          <button onClick = {onHideForm}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

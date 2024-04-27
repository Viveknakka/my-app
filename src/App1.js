import React, { useState } from 'react';
import './App1.css';

function App1() {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    category: '',
    amount: '',
    description: ''
  });
  const [filterCategory, setFilterCategory] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses(prevExpenses => [...prevExpenses, formData]);
    setFormData({
      date: '',
      category: '',
      amount: '',
      description: ''
    });
  };

  const handleFilterChange = (e) => {
     //console.log("efilter :"+e.key+" val"+e.target.value);
    setFilterCategory(e.target.value);
  };

  const filteredExpenses = filterCategory ? expenses.filter(expense => expense.category === filterCategory) : expenses;

  const totalExpense = expenses.reduce((total, expense) => total + parseInt(expense.amount), 0);

  return (
    <div className="App">
      <h1>Expense Manager</h1>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        <label>Category:</label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} required />

        <label>Amount:</label>
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />

        <label>Description:</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />

        <button type="submit">Add Expense</button>
      </form>

      <h2>Expenses</h2>
      <label>Filter by Category:</label>
      <select onChange={handleFilterChange} value={filterCategory}>
        <option value="">All</option>
        {Array.from(new Set(expenses.map(expense => expense.category))).map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Total Expense: ${totalExpense}</h2>
      </div>
    </div>
  );
}


export default App1;

/*
const NameForm = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default function App1() {
    const list =[1,2,3,4,5];
    const listItems = list.map((item) =>
    <li key={item.toString()}>
        {item}
    </li>
    
    );
  return (
    <div>
        <Temp a = {101}/>
        <NameForm/>
        <ul>
            {listItems}
        </ul>
    </div>
  )
}*/

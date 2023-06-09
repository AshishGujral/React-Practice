import React, { useState } from "react";
import "./ExpenseForm.css";

export const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

// another way to setuse state 
// const [userInput, setUserInput] = useState ({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
// });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })

    // setUserInput((prevState) =>{
    //     return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value);
  }
  const submitHandler =(event) =>{

    event.preventDefault();
    // it will not reload the page if request won't send
    const expenseData ={
        title : enteredTitle,
        date : new Date(enteredDate),
        amount : enteredAmount
    }
    setButtonClicked(false);
    
    // here sending data to a parent class
    props.onSaveExpenseData(expenseData);
    

    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');

  }
  let [buttonClicked, setButtonClicked] = useState(false );
  const FormHandler = () =>{
    setButtonClicked(true);
  }
  const FormDisappear = () =>{
    setButtonClicked(false);
  }
  return (
    <div>

{ buttonClicked ?
      <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value ={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="cancel" onClick={FormDisappear}>Cancel</button>
        <button type="submit"  >Add Expense</button>
      </div>
    </form>
    :
  <button type="submit" onClick={FormHandler}>Add New Expense</button>
}
    </div>
     
  );
};

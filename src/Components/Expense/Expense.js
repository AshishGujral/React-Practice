import React, { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const SaveYearHandler = (enterYearData) => {
    setFilterYear(enterYearData);
    console.log("value", enterYearData);
  };

  const filteredExpenses = props.items.filter(data => data.date.getFullYear().toString() === filterYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSaveYear={SaveYearHandler} selected={filterYear} />
        {filteredExpenses.length == 0 ? <p>No expenses found</p> : 
         filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
       
      </Card>
    </div>
  );
};

export default Expense;

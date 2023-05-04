import React, { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
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
        <ExpensesList items = {filteredExpenses}/>
       
      </Card>
    </div>
  );
};

export default Expense;

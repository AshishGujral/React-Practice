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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSaveYear={SaveYearHandler} selected={filterYear} />
        {props.items.map((expense) => (
          <ExpenseItem
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

import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expense.css";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expense;

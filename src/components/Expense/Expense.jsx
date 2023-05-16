import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";

function Expense(props) {
  return (
    <Card className="expenses">
      <ExpenseFilter />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expense;

import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const ExpenseItem = ({ expense }) => {
  const { dispatch } = useContext(ExpenseContext);

  const handleDelete = () => {
    dispatch({ type: "REMOVE_EXPENSE", payload: expense.id });
  };

  return (
    <div>
      <span>{expense.label}</span>
      <span>{expense.amount} €</span>
      <span>{expense.category}</span>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
};

export default ExpenseItem;
import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { state } = useContext(ExpenseContext);

  return (
    <div>
      {state.expenses.length > 0 ? (
        state.expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))
      ) : (
        <p>Aucune dépense enregistrée.</p>
      )}
    </div>
  );
};

export default ExpenseList;
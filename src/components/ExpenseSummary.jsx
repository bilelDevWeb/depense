import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const ExpenseSummary = () => {
  const { state } = useContext(ExpenseContext);

  const totalAmount = state.expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const categoryTotals = state.expenses.reduce((totals, exp) => {
    totals[exp.category] = (totals[exp.category] || 0) + exp.amount;
    return totals;
  }, {});

  return (
    <div>
      <h2>Total des dépenses : {totalAmount.toFixed(2)} €</h2>
      <h3>Dépenses par catégorie :</h3>
      <ul>
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <li key={category}>
            {category}: {amount.toFixed(2)} €
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;
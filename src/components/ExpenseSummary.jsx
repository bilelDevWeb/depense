import React, { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const ExpenseSummary = () => {
  const { state } = useContext(ExpenseContext);

  const totalAmount = state.expenses.reduce((total, expense) => total + expense.amount, 0);
  const categoryTotals = state.expenses.reduce((totals, expense) => {
    totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
    return totals;
  }, {});

  return (
    <div>
      <h2>Total des dépenses: {totalAmount} €</h2>
      <h3>Détail par catégorie:</h3>
      <ul>
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <li key={category}>{category}: {amount} €</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;
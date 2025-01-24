import React from "react";
import { ExpenseProvider } from "./context/ExpenseContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import "./styles/App.css";

const App = () => {
  return (
    <ExpenseProvider>
      <div className="App">
        <h1>Gestion des Dépenses</h1>
        <ExpenseForm />
        <ExpenseSummary />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
};

export default App;
import React from "react";
import { ExpenseProvider } from "./context/ExpenseContext.jsx";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import ExpenseSummary from "./components/ExpenseSummary.jsx";
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
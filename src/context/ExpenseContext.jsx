import { createContext, useReducer } from 'react';

const ExpenseContext = createContext();

const initialState = {
  expenses: [],
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return { ...state, expenses: [...state.expenses, action.payload] };
    case "REMOVE_EXPENSE":
      return { ...state, expenses: state.expenses.filter(exp => exp.id !== action.payload) };
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
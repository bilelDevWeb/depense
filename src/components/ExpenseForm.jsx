import { useState, useContext} from 'react';
import ExpenseContext from '../context/ExpenseContext.jsx';

const ExpenseForm = () => {
    const [label, setLabel] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Alimentation");
    const { dispatch } = useContext(ExpenseContext);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!label || !amount) return;
      dispatch({
        type: "ADD_EXPENSE",
        payload: { id: Date.now(), label, amount: parseFloat(amount), category },
      });
      setLabel("");
      setAmount("");
      setCategory("Alimentation");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom de la dépense"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <input
          type="number"
          placeholder="Montant"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Alimentation">Alimentation</option>
          <option value="Logement">Logement</option>
          <option value="Transport">Transport</option>
          <option value="Divertissement">Divertissement</option>
          <option value="Santé">Santé</option>
          <option value="Éducation">Éducation</option>
          <option value="Autres">Autres</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>
    );
  };

export default ExpenseForm;
import { useState } from 'react';

function ExpenseForm({ setExpenses }) {

const [description, setDescription] = useState('');
const [amount, setAmount] = useState('');
const [category, setCategory] = useState('Comida');
const [date, setDate] = useState('');
const handleSubmit = (event) => {
  event.preventDefault();

if (!description.trim() || Number(amount) <= 0 || !date) {
    return;
}

  const newExpense = {
    id: Date.now(),
    description: description,
    amount: Number(amount),
    category: category,
    date: date,
  };

  setExpenses((currentExpenses) => [
    ...currentExpenses,
    newExpense,
  ]);
  
  setDescription('');
setAmount('');
setCategory('Comida');
setDate('');
};

  return (
    <section className="expense-form">
      <div className="expense-form__header">
        <p>Añadir movimiento</p>
        <h2>¿En qué se han ido?</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="description">
          Descripción
        </label>

        <input
          id="description"
          type="text"
          placeholder="Ej. Café"
          value={description}
        onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="amount">
          Importe
        </label>

        <input
          id="amount"
          type="number"
          placeholder="4.50"
          value={amount}
        onChange={(event) => setAmount(event.target.value)}
        />

        <label htmlFor="category">
          Categoría
        </label>

        <select 
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        >
          <option value="Comida">Comida</option>
          <option value="Compras">Compras</option>
          <option value="Transporte">Transporte</option>
          <option value="Ocio">Ocio</option>
          <option value="Casa">Casa</option>
          <option value="Salud">Salud</option>
          <option value="Otros">Otros</option>
        </select>

        <label htmlFor="date">
          Fecha
        </label>

        <input
          id="date"
          type="date"
          value={date}
onChange={(event) => setDate(event.target.value)}
        />

        <button type="submit">
          Añadir gasto
        </button>
      </form>
    </section>
  );
}

export default ExpenseForm;
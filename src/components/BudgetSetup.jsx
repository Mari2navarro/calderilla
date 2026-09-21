import { useState } from 'react';

function BudgetSetup({ setMonthlyBudget }) {
  const [budget, setBudget] = useState('');

  const handleSubmit = (event) => {
  event.preventDefault();

  setMonthlyBudget(Number(budget));
};
  return (
    <main className="budget-setup">
      <p className="budget-setup__brand">Calderilla</p>

      <section className="budget-setup__content">
        <p className="budget-setup__eyebrow">
          Empecemos por lo importante.
        </p>

        <h1>¿Cuál es tu presupuesto para este mes?</h1>

        <form className="budget-form" onSubmit={handleSubmit}>
          <label htmlFor="budget">Presupuesto mensual</label>

          <div className="budget-form__input">
           <input
  id="budget"
  type="number"
  placeholder="1.200"
  value={budget}
  onChange={(event) => setBudget(event.target.value)}
/>

            <span>€</span>
          </div>

          <button type="submit">
            Empezar
          </button>
        </form>
      </section>
    </main>
  );
}

export default BudgetSetup;
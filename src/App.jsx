import { useState } from 'react';
import './App.css';
import expenses from './data/expenses';
import BudgetSetup from './components/BudgetSetup';

function App() {
const [monthlyBudget, setMonthlyBudget] = useState(null);
 const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const availableBalance = monthlyBudget - totalExpenses;

   if (monthlyBudget === null) {
    return <BudgetSetup setMonthlyBudget={setMonthlyBudget} />;
  }

  return (
    <main className="app">
     <header className="app-header">
  <p className="app-header__brand">Calderilla<span>.</span></p>

  <div className="app-header__meta">
    <p>Septiembre 2026</p>
    <p>01 / 03</p>
  </div>
</header>

      <section className="dashboard">
      <div className="dashboard__intro">
  <p>Buenos días 👋</p>
  <h1>
  Tu dinero,
  <br />
  de un vistazo.
</h1>
</div>

<section className="balance">
  <div className="balance__header">
    <p>Disponible</p>
    <span>€</span>
  </div>

  <p className="balance__amount">
  {availableBalance.toFixed(2)}
</p>

  <div className="balance__footer">
    <p>Septiembre 2026</p>
    <p>Saldo actual</p>
  </div>
</section>

<section className="summary">
  <article className="summary-card">
    <p className="summary-card__label">Gastado este mes</p>
   <p className="summary-card__amount">
  {totalExpenses.toFixed(2)} €
</p>
  </article>

  <article className="summary-card summary-card--status">
    <p className="summary-card__label">Estado</p>
    <p className="summary-card__status">🟢 Vamos bien.</p>
    <p className="summary-card__message">
      Incluso puede que lleguemos sobrados.
    </p>
  </article>
</section>

<section className="expenses">
  <div className="expenses__header">
    <div>
      <p className="expenses__eyebrow">Movimientos</p>
      <h2>Últimos gastos</h2>
    </div>

    <button className="expenses__link">Ver todos</button>
  </div>

  <div className="expenses__list">
  {expenses.map((expense) => (
    <article className="expense" key={expense.id}>
      <div className="expense__info">
        <p className="expense__name">{expense.description}</p>

        <p className="expense__category">
          {expense.category} · {expense.date}
        </p>
      </div>

      <p className="expense__amount">
        −{expense.amount.toFixed(2)} €
      </p>
    </article>
  ))}
</div>

</section>
      </section>
    </main>
  );
}

export default App;

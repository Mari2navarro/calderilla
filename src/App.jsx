import { useEffect, useState } from "react";
import "./App.css";
import initialExpenses from "./data/expenses";
import BudgetSetup from "./components/BudgetSetup";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [monthlyBudget, setMonthlyBudget] = useState(() => {
    const savedBudget = localStorage.getItem("calderilla-budget");

    if (savedBudget) {
      return JSON.parse(savedBudget);
    }

    return null;
  });

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("calderilla-expenses");

    if (savedExpenses) {
      return JSON.parse(savedExpenses);
    }

    return initialExpenses;
  });

  const [selectedCategory, setSelectedCategory] = useState("Todas");

  useEffect(() => {
    localStorage.setItem("calderilla-expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    if (monthlyBudget !== null) {
      localStorage.setItem("calderilla-budget", JSON.stringify(monthlyBudget));
    }
  }, [monthlyBudget]);

  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);

    setExpenses(updatedExpenses);
  };
  const totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  );

  const filteredExpenses =
    selectedCategory === "Todas"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  const sortedExpenses = [...filteredExpenses].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const availableBalance = monthlyBudget - totalExpenses;
  const remainingPercentage = availableBalance / monthlyBudget;

  if (monthlyBudget === null) {
    return <BudgetSetup setMonthlyBudget={setMonthlyBudget} />;
  }
  let status;
  let statusMessage;

  if (remainingPercentage >= 0.5) {
    status = "🟢 Vamos bien.";
    statusMessage = "Incluso puede que lleguemos sobrados.";
  } else if (remainingPercentage >= 0.2) {
    status = "🟡 Ojo ahí.";
    statusMessage = "Quizá ese café de 4,50 € pueda esperar.";
  } else {
    status = "🔴 Estamos justitos.";
    statusMessage = "Toca mirar dónde se está yendo la pasta.";
  }

  return (
    <main className="app">
      <header className="app-header">
        <p className="app-header__brand">
          Calderilla<span>.</span>
        </p>

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

          <p className="balance__amount">{availableBalance.toFixed(2)}</p>

          <div className="balance__footer">
            <p>Septiembre 2026</p>
            <p>Saldo actual</p>
          </div>
        </section>

        <section className="summary">
          <article className="summary-card">
            <p className="summary-card__label">Gastado este mes</p>
            <p className="summary-card__amount">{totalExpenses.toFixed(2)} €</p>
          </article>

          <article className="summary-card summary-card--status">
            <p className="summary-card__status">{status}</p>

            <p className="summary-card__message">{statusMessage}</p>
          </article>
        </section>

        <section className="expenses">
          <ExpenseForm setExpenses={setExpenses} />
          <div className="expenses__header">
            <div>
              <p className="expenses__eyebrow">Movimientos</p>
              <h2>Últimos gastos</h2>
            </div>

            <button className="expenses__link">Ver todos</button>
          </div>

          <select
            className="expenses__filter"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Comida">Comida</option>
            <option value="Compras">Compras</option>
            <option value="Transporte">Transporte</option>
            <option value="Ocio">Ocio</option>
            <option value="Casa">Casa</option>
            <option value="Salud">Salud</option>
            <option value="Otros">Otros</option>
          </select>

          <div className="expenses__list">
            {filteredExpenses.length === 0 ? (
              <p className="expenses__empty">
                No hay gastos en esta categoría.
              </p>
            ) : (
              sortedExpenses.map((expense) => (
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

                  <button
                    className="expense__delete"
                    type="button"
                    onClick={() => handleDeleteExpense(expense.id)}
                  >
                    ×
                  </button>
                </article>
              ))
            )}
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;

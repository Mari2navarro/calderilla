import './App.css';

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <div>
          <p className="app-header__brand">Calderilla</p>
          <p className="app-header__tagline">Cada céntimo cuenta.</p>
        </div>

        <p className="app-header__month">Septiembre 2026</p>
      </header>

      <section className="dashboard">
      <div className="dashboard__intro">
  <p>Buenos días 👋</p>
  <h1>Tu dinero, de un vistazo.</h1>
</div>

<section className="balance-card">
  <p className="balance-card__label">Disponible</p>

  <p className="balance-card__amount">327,50 €</p>

  <p className="balance-card__period">Septiembre 2026</p>
</section>

<section className="summary">
  <article className="summary-card">
    <p className="summary-card__label">Gastado este mes</p>
    <p className="summary-card__amount">172,50 €</p>
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
    <article className="expense">
      <div className="expense__info">
        <p className="expense__name">Cena</p>
        <p className="expense__category">Comida · 21 sep</p>
      </div>

      <p className="expense__amount">−25,00 €</p>
    </article>

    <article className="expense">
      <div className="expense__info">
        <p className="expense__name">Metro</p>
        <p className="expense__category">Transporte · 20 sep</p>
      </div>

      <p className="expense__amount">−8,50 €</p>
    </article>

    <article className="expense">
      <div className="expense__info">
        <p className="expense__name">Camiseta</p>
        <p className="expense__category">Compras · 19 sep</p>
      </div>

      <p className="expense__amount">−32,00 €</p>
    </article>
  </div>
</section>
      </section>
    </main>
  );
}

export default App;

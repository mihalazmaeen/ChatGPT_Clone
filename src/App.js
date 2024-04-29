

const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>New Chat</li>
        </ul>
        <nav>
          <p>Made by Mihal</p>
        </nav>
      </section>
      <section className="main">
        <h1> VangariGPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">⇒</div>
          </div>
          <p>
            VangariGPT is a clone version of ChatGPT. Version "Almost Vanga".
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;

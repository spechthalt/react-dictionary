import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary App</h1>
        </header>
        <Dictionary />

        <footer>
          <small>Coded by Stephanie Davis and is open sourced on Github</small>
        </footer>
      </div>
    </div>
  );
}

export default App;

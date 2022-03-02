import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Nautical Dictionary ⚓️</h1>
        </header>
        <Dictionary defaultKeyword={"sail"} />

        <footer>
          <small>
            ⛵️ This website was coded by{" "}
            <a
              href="https://www.stephdaviscodes.com"
              rel="noreferrer"
              target="_blank"
            >
              Stephanie Davis
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/spechthalt/react-dictionary"
              rel="noreferrer"
              target="_blank"
            >
              open sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;

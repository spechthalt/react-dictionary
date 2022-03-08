import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <span className="h-color-1">Dic•</span>
            <span className="h-color-2">tion•</span>
            <span className="h-color-3">ar•</span>
            <span className="h-color-1">y</span>
          </h1>
        </header>
        <Dictionary defaultKeyword={"confetti"} />

        <footer>
          <small>
            📖 This website was coded by{" "}
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

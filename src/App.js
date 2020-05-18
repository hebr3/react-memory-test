import React from "react";
import { range } from "ramda";
import "./App.css";

function App() {
  const cells = range(0, 9);
  return (
    <div className="App">
      <header className="App-header">
        <h4>Memory Test</h4>
      </header>
      <div className="board">
        {cells.map((i) => (
          <div className="cell" key={i}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

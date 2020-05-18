import React from "react";
import "./App.css";

function App() {
  const cells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="App">
      <header className="App-header">
        <h4>Memory Test</h4>
      </header>
      <div className="board">
        {cells.map((i) => (
          <div key={i}>{i}</div>
        ))}
      </div>
    </div>
  );
}

export default App;

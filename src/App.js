import React, { useState } from "react";
import { range } from "ramda";
import shuffle from "./utils/shuffle";
import "./App.css";

function App() {
  const cells = shuffle(range(1, 10));
  return (
    <div className="App">
      <header className="App-header">
        <h4>Memory Test</h4>
      </header>
      <div className="board">
        {cells &&
          cells.map((i) => (
            <div className={i < 5 ? "cell-active" : "cell"} key={i}>
              {i}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
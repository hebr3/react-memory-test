import React, { useState, useEffect } from "react";
import * as R from "ramda";
import shuffle from "./utils/shuffle";
import "./App.css";

function App() {
  const [clickedCells, setClickedCells] = useState([]);
  const [cells, setCells] = useState([]);
  const handleClick = (i) => setClickedCells(R.uniq([...clickedCells, i]));

  useEffect(() => {
    setCells(shuffle(R.range(1, 10)));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h4>Memory Test</h4>
      </header>
      <div className="board">
        {cells &&
          cells.map((i) => (
            <div
              className={i < 5 ? "cell-active" : "cell"}
              key={i}
              onClick={() => handleClick(i)}
            >
              {i}
            </div>
          ))}
      </div>
      <pre>{JSON.stringify(clickedCells, 0, 2)}</pre>
    </div>
  );
}

export default App;

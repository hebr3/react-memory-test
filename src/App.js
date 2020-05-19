import React, { useState, useEffect } from "react";
import * as R from "ramda";
import shuffle from "./utils/shuffle";
import "./App.css";

function App() {
  const [width, setWidth] = useState(4);
  const [clickedCells, setClickedCells] = useState([]);
  const [cells, setCells] = useState(R.range(1, width * width + 1));
  const handleClick = (i) => {
    setClickedCells(R.uniq([...clickedCells, i]));
  };

  useEffect(() => {
    setCells(shuffle(cells));
  }, []);

  const Cell = (idx) => {
    if (idx < (width * width) / 2) {
      return (
        <button
          className="cell-active"
          key={idx}
          onClick={() => handleClick(idx)}
        >
          {idx}
        </button>
      );
    }
    return (
      <button className="cell" key={idx}>
        {idx}
      </button>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>Memory Test</h4>
      </header>
      <div
        className="board"
        style={{
          gridTemplateColumns: R.range(0, width)
            .map((i) => "1fr")
            .join(" "),
        }}
      >
        {cells && cells.map(Cell)}
      </div>
      <pre>{JSON.stringify(clickedCells)}</pre>
    </div>
  );
}

export default App;

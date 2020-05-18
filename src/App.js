import React, { useState, useEffect } from "react";
import * as R from "ramda";
import shuffle from "./utils/shuffle";
import "./App.css";

function App() {
  const [width, setWidth] = useState(4);
  const [clickedCells, setClickedCells] = useState([]);
  const [cells, setCells] = useState(R.range(1, width * width + 1));
  const handleClick = (i) => setClickedCells(R.uniq([...clickedCells, i]));

  useEffect(() => {
    setCells(shuffle(cells));
  }, []);

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
        {cells &&
          cells.map((i) => (
            <div
              className={i < (width * width) / 2 ? "cell-active" : "cell"}
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

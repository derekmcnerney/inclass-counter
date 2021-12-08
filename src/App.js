import React, { useState } from "react";
// import Button from "./components/Button";

function App() {
  const [number1, setNumber1] = useState(0);

  const [total, setTotal] = useState(number1);

  function addToTotal() {
    setTotal(total + number1);
  }

  return (
    <div className="App">
      <h1>Add the Numbers</h1>
      <div className="number-inputs">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder="0"
        />
        
      </div>
      <button onClick={addToTotal}> Contribute</button>
      <h2>{total}</h2>
    </div>
  );
}

export default App;

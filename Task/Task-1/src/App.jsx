import React from "react";
import { useCounter } from "./Components/useCounter";
import "./App.css";

export function App() {
  const {
    count,
    handleIncrement,
    handleDecrement,
    handleReset
  } = useCounter();

  return (
    <div className="app">
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}



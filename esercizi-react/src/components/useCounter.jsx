import { useState } from "react";

export default function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter((prev) => prev + 1);
  }
  function handleDecrement() {
    setCounter((prev) => prev - 1);
  }
  function handleReset() {
    setCounter(initialValue);
  }

  return {
    counter: counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
}

import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
export default function Counter({ initialValue = 0, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);
  return (
    <>
      <CounterDisplay counter={counter}></CounterDisplay>
      <button
        className="increment"
        onClick={() => {
          setCounter(counter + incrementAmount);
        }}
      >
        Increment!
      </button>
      <button
        className="decrement"
        onClick={() => {
          setCounter(counter - incrementAmount);
        }}
      >
        Decrement!
      </button>
      <button
        className="reset"
        onClick={() => {
          setCounter(initialValue);
        }}
      >
        Reset!
      </button>
    </>
  );
}

import { useState } from "react";
export default function Counter({ initialValue = 0, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);
  return (
    <>
      <h1> Valore Contatore: {counter}</h1>
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

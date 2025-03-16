import { useEffect } from "react";
import { useState } from "react";

export default function Counter({ initialValue, incrementAmount }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    console.log(`The Value of the Counter is ${counter}`);
  }, [counter]);

  return (
    <>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          setCounter(counter + incrementAmount);
        }}
      >
        Incrementa!
      </button>
      <button
        onClick={() => {
          setCounter(counter - incrementAmount);
        }}
      >
        Decrementa!
      </button>
      <button
        onClick={() => {
          setCounter(initialValue);
        }}
      >
        Reset!
      </button>
    </>
  );
}

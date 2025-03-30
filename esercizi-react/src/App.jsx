import "./App.css";
import useCounter from "./components/useCounter";
import FilteredList from "./components/FilteredList";

function App() {
  const { count, increment, decrement, reset } = useCounter(0);
  const lista = [
    { id: 1, name: "Antonio", age: 23 },
    { id: 2, name: "Davide", age: 22 },
    { id: 3, name: "Daniele", age: 15 },
    { id: 4, name: "Martina", age: 18 },
    { id: 5, name: "Alfredo", age: 33 },
  ];
  return (
    <div>
      <h1>Contatore: {count}</h1>
      <button onClick={increment}>Incrementa</button>
      <button onClick={decrement}>Decrementa</button>
      <button onClick={reset}>Reset</button>
      <h2>Lista filtrata</h2>
      <FilteredList list={lista} />
    </div>
  );
}

export default App;

import "./App.css";
import Clock from "./components/Clock";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter initialValue={0} incrementAmount={1}></Counter>
      <Clock></Clock>
    </>
  );
}

export default App;

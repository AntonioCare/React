import "./App.css";
import Chat from "./components/Chat";
import Clock from "./components/Clock";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      {/* <Chat></Chat> */}
      <Counter initialValue={0} incrementAmount={1}></Counter>
      <Clock></Clock>
    </>
  );
}

export default App;

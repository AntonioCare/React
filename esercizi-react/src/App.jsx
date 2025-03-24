import "./App.css";
import Counter from "./components/Counter";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Counter initialValue={0} incrementAmount={1}></Counter>
      <Welcome name={"Antonio"} age={23}></Welcome>
      <Login></Login>
    </>
  );
}

export default App;

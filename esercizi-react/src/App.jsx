import "./App.css";
import AlertClock from "./components/AlertClock";

function App() {
  function HandleButtonClick() {
    const now = new Date();
    alert(`The Current Time is ${now.toLocaleTimeString()}`);
  }
  return (
    <>
      <AlertClock onClick={HandleButtonClick}></AlertClock>
    </>
  );
}

export default App;

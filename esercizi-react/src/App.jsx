import "./App.css";
import "./components/Color";
import Colors from "./components/Colors";

function App() {
  return (
    <>
      <Colors
        colors={[
          { id: 2, name: "Brown" },
          { id: 3, name: "Purple" },
          { id: 4, name: "Green" },
          { id: 5, name: "Black" },
        ]}
      ></Colors>
    </>
  );
}

export default App;

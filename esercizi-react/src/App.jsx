import "./App.css";
import Hello from "./components/Hello";

function App() {
  return (
    <div>
      <Hello></Hello>
    </div>
  );
}

export default App;

// Puoi usare il componente Hello più di una volta nel componente App? Si.
// Cosa succede se lo fai? Mi Apparirà a video il messaggio Hello world! e What a Beautiful Day! più volte.
// Puoi eseguire il rendering del componente Message direttamente all'interno del componente App? Si.
// Cosa succede se lo fai? Apparirà a schermo la Scritta What a Beautiful Day!.

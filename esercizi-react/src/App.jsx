import "./App.css";
import Risultato from "./components/Risultato";
import Saluto from "./components/saluto";

function App() {
  const nome = "Antonio";
  const cognome = "Carè";
  const persona = {
    nome: "Antonio",
    cognome: "Carè",
    eta: 23,
  };
  function handleClick() {
    console.log("Sono stato cliccato");
  }
  return (
    <>
      <Risultato operazione={handleClick}></Risultato>
      {persona.eta > 18 ? (
        <Saluto nome={persona.nome} cognome={persona.cognome}></Saluto>
      ) : (
        <h3>Non sei autorizzato</h3>
      )}
    </>
  );
}

export default App;

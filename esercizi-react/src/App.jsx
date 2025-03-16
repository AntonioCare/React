import "./App.css";
import Counter from "./components/Counter";
import Semaforo from "./components/Semaforo";

function App() {
  return (
    <>
      <Semaforo></Semaforo>
      <Counter initialValue={0} incrementAmount={3}></Counter>
    </>
  );
}
// Quando si chiama la funzione "setter" per incrementare il contatore,
// il parametro dovrebbe essere una funzione o un valore immediato?
//  Perché?
// Scrivi le tue risposte in un commento.
// Si dovrebbe essere un valore immediato poichè
// la funzione di set viene eseguita in base al valore del conteggio
// attuale in count altrimenti se avessimo dovuto prendere
// il valore di un elemento precedente avrei dovuto usare una funzione.
export default App;

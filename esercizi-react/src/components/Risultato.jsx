import Saluto from "./saluto";

export default function Risultato(props) {
  return (
    <>
      <Saluto nome="Questa è una prova"></Saluto>
      <button onClick={props.operazione}>Cliccami!</button>
    </>
  );
}

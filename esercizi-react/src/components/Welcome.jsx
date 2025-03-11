import Eta from "./Eta";

export default function Welcome(props) {
  return (
    <>
      <p>Welcome, {props.nome}!</p>
      <strong>Welcome, {props.nome}!</strong>
      <p>Your age is, {props.age}!</p>
      <Eta age={23}></Eta>
    </>
  );
}

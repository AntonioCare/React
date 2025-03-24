export default function CounterDisplay({ counter }) {
  const MyStyle = {
    color: "green",
    fontSize: 23,
  };
  return (
    <div style={MyStyle}>
      <h2>Valore del Contatore:{counter}</h2>
    </div>
  );
}

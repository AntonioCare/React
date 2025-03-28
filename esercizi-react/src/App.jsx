import "./App.css";
import useCounter from "./components/useCounter";
import useLogin from "./components/useLogin";
import useGithubUser from "./components/useGithubUser";

function App({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);
  const {
    user,
    onSubmit,
    username,
    password,
    onChangeUser,
    onChangePass,
    onResetUs,
  } = useLogin("");
  console.log(user);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={onIncrement}>Increment Button</button>
      <button onClick={onDecrement}>Decrement Button</button>
      <button onClick={onReset}>Reset Button</button>
      <h1>Form</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Inserire Nome Utente"
          onChange={onChangeUser}
        />
        <input
          type="password"
          value={password}
          placeholder="Inserire password"
          onChange={onChangePass}
        />
        <button type="submit">Invio</button>
        <button onClick={onResetUs}>Reset Ricerca</button>
      </form>
    </>
  );
}

export default App;

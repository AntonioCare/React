import "./App.css";
import useCounter from "./components/useCounter";
import useGithubUser from "./components/useGithubUser";
import useLogin from "./components/useLogin";
import useCurrentLocation from "./components/useCurrentLocation";

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
  const { data, error, loading } = useGithubUser("AntonioCare");
  const { location, errors, loadings, getLocation } = useCurrentLocation();
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

      <div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>There has been an error!</h1>}
        {data && (
          <>
            <h1>
              {data.name}
              {data.login}
            </h1>
            <img src={data.avatar_url} />
          </>
        )}
      </div>
      {loadings && <h1>Loading...</h1>}
      {errors && <h1>Found Error : {errors}</h1>}
      <button onClick={getLocation}>Ottieni posizione </button>
      {location && <h1>Position : {location}</h1>}
    </>
  );
}

export default App;

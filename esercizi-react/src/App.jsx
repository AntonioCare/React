import "./App.css";

import useGithubUser from "./components/useGithubUser";

function App() {
  const { data, error, isLoading, onRefresh } = useGithubUser("Jok3r");
  console.log(data);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>There has been an error!</h1>}
      {data && (
        <>
          <button onClick={onRefresh}>Refresh</button>
          <h1>{data.login}</h1>
          <img src={data.avatar_url} alt="" />
        </>
      )}
    </>
  );
}

export default App;

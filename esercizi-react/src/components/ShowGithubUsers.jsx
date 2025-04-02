import { useState } from "react";
import GithubUser from "./GithubUser.JSX";

export default function GithubUsers() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser((prevUser) => [...prevUser, username]);
    setUsername("");
  };
  function handleReset() {
    setUser([]);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        placeholder="Inserire Nome Utente"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Cerca Utenti</button>
      <button onClick={handleReset}>Reset Ricerca</button>
      {user.map((users, index) => (
        <GithubUser key={index} username={users} />
      ))}
    </form>
  );
}

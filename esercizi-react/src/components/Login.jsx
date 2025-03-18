import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  function handlerUserNameInput(event) {
    setUsername(event.target.value);
  }
  function handlerPasswordInput(event) {
    setPassword(event.target.value);
  }
  function handlerCheckBoxInput(event) {
    setCheckBox(event.target.checked);
  }
  function handleLogin(event) {
    event.preventDefault();
    onLogin({ username, password, checkBox });
  }

  function handleReset() {
    setUsername("");
    setPassword("");
    setCheckBox(false);
  }
  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          placeholder="username"
          value={username}
          type="text"
          onChange={handlerUserNameInput}
        />
        <input
          placeholder="password"
          value={password}
          type="password"
          onChange={handlerPasswordInput}
        />
        <input
          checked={checkBox}
          type="checkBox"
          onChange={handlerCheckBoxInput}
        />
        <button type="submit" disabled={!username || !password}>
          Login
        </button>
        <button onClick={handleReset}>Reset!</button>
      </form>
    </>
  );
}

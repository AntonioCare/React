import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(false);

  const MyStyle = {
    color: "white",
    backgroundColor: password.length < 8 ? "red" : "green",
  };

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
          style={MyStyle}
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

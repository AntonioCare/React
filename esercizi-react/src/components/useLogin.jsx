import { useState } from "react";
export default function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser((prevUser) => [...prevUser, username]);
    setUser((prevPass) => [...prevPass, password]);
    setUsername("");
    setPassword("");
  };

  function onChangeUser(event) {
    setUsername(event.target.value);
  }
  function onChangePass(event) {
    setPassword(event.target.value);
  }

  function handleReset() {
    setUser([]);
  }
  return {
    onSubmit: handleSubmit,
    username: username,
    password: password,
    onChangeUser: onChangeUser,
    onChangePass: onChangePass,
    onResetUs: handleReset,
    user: user,
  };
}

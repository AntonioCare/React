import { useState } from "react";
export default function Form() {
  const [form, SetForm] = useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    SetForm({
      ...form,
      [event.target.name]: event.target.value, // il valore dell'elemento name(nome,cogn,email,psw) verra sostituito con la value inserita!
    });
  }
  function handleSubmit(event) {
    event.preventDefault(); // prevengo il default del submit
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registrazione Avvenuta Con Successo!");
    SetForm({
      nome: "",
      cognome: "",
      email: "",
      password: "",
    });
    // lo converto  in formato json e lo salvo in localStorage
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        placeholder="Inserire Nome"
      />
      <input
        type="text"
        name="cognome"
        value={form.cognome}
        onChange={handleChange}
        placeholder="Inserire Cognome"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Inserire E-mail"
      />
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Inserire Password"
      />
      <button type="submit" name="registrati">
        Registrati Ora!
      </button>
    </form>
  );
}

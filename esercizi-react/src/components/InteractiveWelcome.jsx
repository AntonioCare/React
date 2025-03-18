import { useState } from "react";
import Welcome from "./Welcome";

export default function InteractiveWelcome() {
  const [name, setName] = useState(" ");

  function handlerNameInput(event) {
    setName(event.target.value);
  }
  return (
    <>
      <input type="text" value={name} onChange={handlerNameInput} />
      <Welcome name={name}></Welcome>
    </>
  );
}

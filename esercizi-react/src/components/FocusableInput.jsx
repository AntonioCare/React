import { useEffect, useRef } from "react";

export default function FocusableInput() {
  const mounted = useRef(false);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus(); // ? Operatore di concatenamento facoltativo
    if (!mounted.current) {
      mounted.current = true;
      console.log("Mounting for the first time");
    }
  }),
    [];

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        name="username"
        placeholder="Inserire Username"
      />
    </>
  );
}

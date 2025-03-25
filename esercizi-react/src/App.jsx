import { useState } from "react";
import "./App.css";

import { LanguageContext } from "./components/LanguageContext";
import Hello from "./components/Hello";

function App() {
  const [language, setLanguage] = useState("en");

  function handleLanguage(event) {
    setLanguage(event.target.value);
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      <select value={language} onChange={handleLanguage}>
        <option value="it">IT</option>
        <option value="en">EN</option>
      </select>
      <Hello />
    </LanguageContext.Provider>
  );
}

export default App;

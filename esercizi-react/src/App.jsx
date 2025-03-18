import "./App.css";
import Form from "./components/Form";

import InteractiveWelcome from "./components/InteractiveWelcome";
import Login from "./components/Login";

function App() {
  const handleLogin = (data) => {
    console.log("Login data:", data);
  };
  return (
    <>
      <InteractiveWelcome></InteractiveWelcome>
      <h1>LogIn Form</h1>
      <Login onLogin={handleLogin}></Login>
      {/* Come si impedisce il comportamento predefinito dell'elemento form? 
      Con event.preventDefault() */}
      <h1>Register Form</h1>
      <Form></Form>
    </>
  );
}

export default App;

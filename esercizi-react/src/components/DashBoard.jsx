import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  const navigate = useNavigate();
  // Utilizziamo l'hook di useNavigate per avere dei redirect automatici da utilizzare nelle funzioni
  // Utilizzo "Outlet" per visualizzare SUB pagine all'interno di una rotta
  function handleLogut() {
    alert("Hai Effettuato Il Logout!");
    navigate("/");
  }
  return (
    <>
      <Link to="profilo">profilo</Link> | {""}
      <Link to="impostazioni">impostazioni</Link>
      <h1>DashBoard</h1>
      <Outlet />
      <button onClick={handleLogut}>Logout</button>
    </>
  );
}

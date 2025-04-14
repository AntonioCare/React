import "./App.css";
import DashBoard from "./components/DashBoard";
import Impostazioni from "./components/Impostazioni";
import Profilo from "./components/Profilo";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/dashBoard">DashBoard</Link>
        </div>
        <Routes>
          <Route
            path="/redirect"
            element={<Navigate to="/dashBoard" />}
          ></Route>
          <Route path="/dashBoard" element={<DashBoard />}>
            <Route path="profilo" element={<Profilo />}></Route>
            <Route path="impostazioni" element={<Impostazioni />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

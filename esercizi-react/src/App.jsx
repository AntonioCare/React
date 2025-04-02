import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contatti from "./components/Contatti";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to="/">HomePage</Link>
          <Link to="/about">About</Link>
          <Link to="/contatti">Contatti</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contatti" element={<Contatti></Contatti>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

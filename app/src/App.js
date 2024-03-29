import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";
import logo from "./img/caloriecommander.png";
import ananas from "./img/fruit.png";
import kiwi from "./img/kiwi.png";

function App() {
  return (
    <Router>
      <div className="Test">
        <div className="navbar">
          <img src={logo} className="logo" />
        </div>
        <div className="line"></div>
        <img src={ananas} className="fruit-ananas" />
        <img src={kiwi} className="fruit-kiwi" />
        <ul>
          <Link to="/pages/Inloggen" className="inlogpage">
            Inloggen
          </Link>
          <br />
          <Link to="/pages/Registreren" className="registratiepage">
            Registreren
          </Link>
        </ul>

        <Routes>
          <Route path="/pages/Inloggen" element={<Inloggen />} />
          <Route path="/pages/Registreren" element={<Registreren />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

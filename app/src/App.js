import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";
import logo from "./img/caloriecommander.png";
import ananas from "./img/fruit.png";
import kiwi from "./img/kiwi.png";
import watermelon from "./img/watermelon.png";
import peach from "./img/peach.png";
import banana from "./img/banana.png";

function App() {
  return (
    <Router>
      <div className="Test">
        <div className="navbar">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="line"></div>

        <Link to="/pages/Inloggen" className="button">
          Inloggen
        </Link>
        <Link to="/pages/Registreren" className="button2">
          Registreren
        </Link>

        <Routes>
          <Route path="/pages/Inloggen" element={<Inloggen />} />
          <Route path="/pages/Registreren" element={<Registreren />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

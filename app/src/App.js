import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";

function App() {
  return (
    <Router>
      <div className="Test">
        <nav>
          <ul>
            <Link to="/pages/Inloggen">Inloggen</Link>
            <br />
            <Link to="/pages/Registreren">Registreren</Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/pages/Inloggen" element={<Inloggen />} />
          <Route path="/pages/Registreren" element={<Registreren />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

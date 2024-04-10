import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";
import Dagoverzicht from "./pages/Dagoverzicht";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="/Inloggen" element={<Inloggen />} />
        <Route path="/Registreren" element={<Registreren />} />
        <Route path="/Dagoverzicht" element={<Dagoverzicht />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

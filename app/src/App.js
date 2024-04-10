import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import './index.css';
import Homepage from "./pages/Homepage";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";
import Maandoverzicht from "./pages/Maandoverzicht";


function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="" element={<Homepage />} />
          <Route path="/Inloggen" element={<Inloggen />} />
          <Route path="/Registreren" element={<Registreren />} />
          <Route path="/Maandoverzicht" element={<Maandoverzicht />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

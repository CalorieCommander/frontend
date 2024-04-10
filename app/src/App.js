import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="" element={<Homepage />} />
          <Route path="/Inloggen" element={<Inloggen />} />
          <Route path="/Registreren" element={<Registreren />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

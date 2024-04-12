import React from "react";
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import './index.css';
import Homepage from "./pages/Homepage";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";


function App() {
  return (
    <Switch>
        <Routes>
        <Route exact path="" element={<Homepage />} />
          <Route exact path="/Inloggen" element={<Inloggen />} />
          <Route exact path="/Registreren" element={<Registreren />} />
        </Routes>
    </Switch>
  );
}

export default App;

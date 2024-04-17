import React from "react";
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import './index.css';
// @ts-ignore
import Homepage from "./pages/Homepage";
import Accountpagina from "./pages/Accountpagina";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";
import logo from "./img/caloriecommander.png";


function App() {
  return (
    <Switch>
        <div className="navbar">
          <img src={logo} alt="logo" className="logo" />
          <div className="name-corner">CERCHIO</div>
        </div>
        <div className="line"></div>
        <Routes>
          <Route path="/pages/Account" element={<Accountpagina />} />
        </Routes>
        <Routes>
          <Route exact path="" element={<Homepage />} />
          <Route exact path="/login" element={<Inloggen />} />
          <Route exact path="/account" element={<Accountpagina />} />
          <Route exact path="/register" element={<Registreren />} />
        </Routes>
    </Switch>
  );
}
export default App;

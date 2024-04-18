import React from "react";
import { BrowserRouter as Switch, Route, Routes, Link } from "react-router-dom";
import './index.css';
// @ts-ignore
import Homepage from "./pages/Homepage";
import Accountpagina from "./pages/Accountpagina";
import Inloggen from "./pages/Inloggen";
import Registreren from "./pages/Registreren";
import Dagoverzicht from "./pages/Dagoverzicht";
import Maandoverzicht from "./pages/Maandoverzicht";
import logo from "./img/caloriecommander.png";


function App() {
  const clickeddate = new Date();
  return (
    <Switch>
      <div className="navbar">
        <Link to="/maandoverzicht">
          <img src={logo} alt="logo" className="logo" />
        </Link>
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
        <Route exact path="/dagoverzicht" element={<Dagoverzicht />} />
        <Route exact path="/maandoverzicht" element={<Maandoverzicht />} />
      </Routes>
    </Switch>
  );
}
export default App;
